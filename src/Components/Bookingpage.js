



// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom"
// //import FlightBooking from './FlightBooking';

// export default function SearchFlights() {
//   const [arr, setArr] = useState([]);

//  const fetchFlights = async () => {
//     try {
//       const response = await axios.get("http://localhost:8087/flights");
//       setArr(response.data);
//     } catch (error) {
//       console.error("Error fetching Transaction data:", error);
//     }
//   };
//   fetchFlights();

//   const removeFlights= async (id)=>{
//     alert("Removing"+id);
//    var res= await axios.delete("http://localhost:8087/flights"+id);
//   }






//   return (
//     <div>
//       {arr.map((el) => (
//         <div classNameName="card ms-7" style={{ width:"60rem",margin: "10px"}} key={el.flightid}>
//           <div classNameName="row g-0">
//           <img src="image.jpg" classNameName="col-md-4"  alt="flights" width="10%" height="100%"/>
//             {/* <div classNameName="col-md-4"> 
//               <img src={el.image} classNameName="card-img" alt="transaction" />
//               </div> */}
//             <div classNameName="col-md-8">
//               <div classNameName="card-body">
//                 <h5 classNameName="card-text">{el.flightid}</h5>

//                 <p classNameName="card-text">{el.from}</p>
//                 <p classNameName="card-text">{el.to}</p>
//                 <p classNameName="card-text">{el.depart}</p>
//                 <p classNameName="card-text">{el.passengers}</p>
//                 <p classNameName="card-text">{el.cost}</p>

//                 <button classNameName="btn btn-primary" onClick={(ev) => {
//                 removeFlights(el.flightid);
//                 ev.preventDefault();
//             }}><Link to="/FlightBooking" classNameName="btn btn-primary" style={{margin:"12px"}}>Book</Link> </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       ))}
//     </div>
//   );
//   <Outlet/>
// }


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, Outlet} from "react-router-dom"

// export default function SearchFlights() {
//   const [arr, setArr] = useState([]);

//   // useEffect(() => {
//   //   fetchLodgesData();
//   // }, []);

//   const fetchFlights  = async () => {
//     try {
//       const response = await axios.get("http://localhost:8087/flights");
//       setArr((arr)=>response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   fetchFlights ();

//   const removeFlights= async (id)=>{
//     alert("Removing"+id);
//    var res= await axios.delete("http://localhost:8087/flights"+id);
//   }

//   // const handleUpdate = (el)=>{
//   //   el.preventDefault();
//   //   axios.put("http://localhost:8082/user/"+rating)
//   //   .then((response)=>{
//   //     console.log(response);
//   //   })
//   // }

//   return (
//     <div>
//       {arr.map((el) => (
//         <div className="card ms-7" style={{ width:"20rem",margin: "10px" }} key={el.id}>
//           <div className="row g-0" style={{width:"40rem"}}>
//             {/* <div className="col-md-4"> 
//               <img src={el.image} className="card-img" alt="transaction" />
//               </div> */}
//             <div className="col-md-8">
//               <div className="card-body">
//                 <img src="./images/maru.jpeg" alt="" style={{width:"280px" ,height:"200px"}}/>
//                 <h5 className="card-text">{el.flightid}</h5>
//                 {/* <p className="card-text" style={{margin:"10px"}}>Call : {el.phone}</p> */}
//                 <p className="card-text">From: {el.from}</p>
//                 <p className="card-text">To : {el.to}</p>
//                 <p className="card-text">depart : {el.depart}</p>
//                 {/* <p className="card-text">{el.place}</p>  */}
//                 {/* <label>Name : </label>
//                 <input type="text" name="name" value={rating.name} onChange={handleUpdate}></input> */}
//                 {/* <button className="btn btn-primary" ><Link to={"/Update"} style={{margin: "10px"}}>Update</Link> </button> */}
//                 <Link to={"/FlightBooking"+ el.flightid} className="btn btn-primary" style={{margin: "10px"}}>Book</Link> 
//                 <button className="btn btn-primary" style={{textDecoration:"none",color:"white",margin: "20px" }} href="#"
//                 onClick={(ev) => {
//                 removeFlights(el.flightid);
//                 ev.preventDefault(); 
//                 }} >Remove</button> 
//                 {/* <Link to="/View" className="btn btn-primary" style={{margin: "10px"}}>View</Link>  */}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
//   <Outlet/>
// }

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, Outlet} from "react-router-dom"

// export default function Transaction() {
//   const [arr, setArr] = useState([]);



//   const fetchFlights = async () => {
//     try {
//       const response = await axios.get("http://localhost:8081/user");
//       setArr((arr)=>response.data);
//     } catch (error) {
//       console.error("Error fetching Transaction data:", error);
//     }
//   };
//   fetchFlights();

//   const removeTrans= async (id)=>{
//     alert("Removing"+id);
//    var res= await axios.delete("http://localhost:8081/user/"+id);
//   }


//   return (
//     <div>
//     {arr.map((el) => (
//       <div className="card" style={{ width: "18rem", margin:'10px' }} key={el.id}>
//         <div className="card-body">
//           <p className="card-text" style={{textAlign:'left'}}>paid_to: {el.paid_to}</p>
//           <p className="card-text" style={{textAlign:'left'}}>Amount: {el.amount}</p>
//           <p className="card-text" style={{textAlign:'left'}}>Category: {el.category}</p>
//           <Link className="btn btn-primary" to="/update">Update</Link>
//           <button style={{margin:'10px'}}
//             href="#"
//             onClick={(ev) => {
//                 removeTrans(el.id);
//               ev.preventDefault();
//             }}
//             className="btn btn-primary">Remove</button>
//         </div>
//       </div>
//     ))}
//   </div>
// );
//   <Outlet/>
// }



import React from 'react';
import { Link } from 'react-router-dom';

const FlightsAvailable = () => {
    return (
        <div>
            <div>
                <div className="card shadow mb-5 bg-white rounded">

{/* 
                    <div className="card-body">

                        <p className="card-title text-center shadow mb-5 rounded"></p>
                        <p className="searchText"><strong>Search For Cheap Flights</strong></p>






                        <div className="row">

                            <div className="col-sm-6">
                                <select className="browser-default custom-select mb-4" id="select">
                                    <option value="" disabled="" selected="">From City/Airport</option>
                                    <option value="1">New Delhi</option>
                                    <option value="2">Mumbai</option>
                                    <option value="3">Bangalore</option>
                                </select>
                            </div>



                            <div className="col-sm-6">
                                <select className="browser-default custom-select mb-4" id="select">
                                    <option value="" disabled="" selected="">To City/Airport</option>
                                    <option value="1">New Delhi</option>
                                    <option value="2">Mumbai</option>
                                    <option value="3">Bangalore</option>
                                </select>
                            </div>


                        </div>









                        <div className="row">

                            <div className="col-sm-4">
                                <select className="browser-default custom-select mb-4" id="select">
                                    <option value="" disabled="" selected="">Passengers</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>




                            <div className="col-sm-6">
                                <div className="col-sm-6">
                                    <input type="date" required placeholder="Depart" className="form-control" />
                                    <div className="label" id="depart"></div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div> */}

                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/aaa.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">INDIGO</h5>
                                <p className="card-text"> New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.6</p>
                                <p className="card-text">PRICE:25,000/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"><Link to="/passengerdetails">BOOK
                                </Link></div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div></div>
                            <img src="assets/bbb.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">AIR INDIA</h5>
                                <p className="card-text">New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.4</p>
                                <p className="card-text">PRICE:27,500/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"><Link to="/passengerdetails">BOOK
                                </Link></div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/ddd.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">AIR ASIA INDIA</h5>
                                <p className="card-text">New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.8</p>
                                <p className="card-text">PRICE:20,000/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"><Link to="/passengerdetails">BOOK
                                </Link></div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/eee.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">VISTARA AIRLINE</h5>
                                <p className="card-text">New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.1</p>
                                <p className="card-text">PRICE:22,000/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">BOOK
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/fff.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">AKASA AIR</h5>
                                <p className="card-text">New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.7</p>
                                <p className="card-text">PRICE:25,876/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">BOOK
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/ggg.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">AIR INDIA EXPRESS</h5>
                                <p className="card-text">New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.4</p>
                                <p className="card-text">PRICE:25,070/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">BOOK
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div><div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/spicejett,jpg.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">SPICEJET</h5>
                                <p className="card-text">New Delhi to Mumbai</p>
                                <p className="card-text">RATING:4.2</p>
                                <p className="card-text">PRICE:18,177/-</p>
                                <p className="card-text"><small className="text-muted">12-07-2023</small></p>
                                <div className="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3"><Link to="/passengerdetails">BOOK
                                </Link></div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default FlightsAvailable;