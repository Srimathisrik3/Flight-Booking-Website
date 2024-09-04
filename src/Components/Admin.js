import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet} from "react-router-dom"

export default function Flights() {
  const [arr, setArr] = useState([]);

 const fetchFlightData = async () => {
    try {
      const response = await axios.get("http://localhost:8081/user/");
      setArr(response.data);
    } catch (error) {
      console.error("Error fetching Transaction data:", error);
    }
  };
  fetchFlightData();


  const removeFlights= async (id)=>{
    alert("Removing"+id);
   var res= await axios.delete("http://localhost:8081/user/"+id);
  }



  return (
    <div>
      {arr.map((el) => (
        <div className="card ms-7" style={{ width:"60rem",margin: "10px"}} key={el.id}>
          <div className="row g-0">
          <img src="assets/logo.png" className="col-md-4"  alt="flights" width="10%" height="100%"/>
            {/* <div className="col-md-4"> 
              <img src={el.image} className="card-img" alt="transaction" />
              </div> */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-text">{el.id}</h5>
           
                <p className="card-text">{el.flightname}</p>
                <p className="card-text">Rs.{el.price}</p>
                <p className="card-text">{el.hours}</p>
                <Link to="/Update" className="btn btn-primary" style={{margin:"12px"}}>Update</Link> 
                <button className="btn btn-primary" onClick={(ev) => {
                removeFlights(el.id);
                ev.preventDefault();
            }}><Link to="/Remove" style={{textDecoration:"none",color:"white",margin:"12px"}}>Remove</Link></button> 
              </div>
            </div>
          </div>
        </div>
      
      ))}
    </div>
  );
  <Outlet/>
}

