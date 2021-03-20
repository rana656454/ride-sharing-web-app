import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import riderData from '../../fakedata/riders'
import mapImg from '../../images/Map.png'
import { FaDollarSign } from 'react-icons/fa';
import { BsPeople } from 'react-icons/bs';
import './rideshare.css'
import Header from '../header/Header';
const Rideshare = () => {
    let { id } = useParams();
    const keyId =Number(id)

    //const {name,key} = riderData.find(e => e.key === id )
    const result = riderData.find( ({ key }) => key === keyId );
    console.log(result,keyId)
     const {img,name,price,person} =result
    const [search,setSearched] = useState(false)
    const [place,setPlace] = useState({
        fromPlace:"",
        toPlace:"",
        date:""
    })
    const handleSubmit = (e) => {
        setSearched(true)
        e.preventDefault()
    }

    const handleBlur = (e) => {
            let newPlace = {...place}
            newPlace[e.target.name]=e.target.value
            setPlace(newPlace)
    }
    return (
        <div className="share-container">
        <Header></Header>
        <div className="container">
            <div className="row">
            <div className="col-md-4 col-sm-12 search-result-container">
            {
                search ?<div className="tour-info"><p className="place-info"><span className="from-place">{place.fromPlace} </span><br/> <span className="to-place">{place.toPlace}</span><br/></p><br/><span className="date">Date:{place.date}</span></div>:
                <p></p>
            }
            {
                   !search ? <div className="form-container">
                <form action="" onSubmit={handleSubmit}>
                <label htmlFor="fromplaceId">Pick From</label>
                <input type="text" className="inp-field" onBlur={handleBlur} required name="fromPlace" id="fromplaceId"/>
                <label htmlFor="toplaceId">Pick To</label><br/>
                <input type="text" className="inp-field" onBlur={handleBlur} required name="toPlace" id="toplaceId"/>
                <label htmlFor="dateId">Pickup Date</label><br/>
                <input type="date" className="inp-field" onBlur={handleBlur} name="date" id="dateId"/><br/>
                <input type="submit" className="search-btn" value="Search"/>
            </form>
        
                </div>:
                <div className="ride-info"><p><img src={img} alt="" style={{width:'70px',height:'70px'}}/> <span>{name}</span><span><BsPeople/> {person}</span> <span className="price"><FaDollarSign/>{price}</span></p> </div>
            }
            
            </div>
                
                <div className="col-md-8 map">
                <img src={mapImg} alt=""/>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Rideshare;