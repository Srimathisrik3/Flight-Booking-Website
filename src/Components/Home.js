import React from "react";
import { Link } from "react-router-dom";


const  Home= () => {

        return (

            <div>

                <div>


                    <div className="Section_top">

                        <div className="card shadow mb-5 bg-white rounded">


                            <div className="card-body">

                                <p className="card-title text-center shadow mb-5 rounded"></p>
                                <p className="searchText"><strong>Search For Cheap Flights</strong></p>
                                <div className="row">

                                    <div className="col-sm-6">
                                        <select className="browser-default custom-select mb-4" id="select">
                                            <option value="" disabled="" selected="">From City/Airport</option>
                                            <option value="1">New Delhi</option>
                                     
                                        </select>
                                    </div>
                                    


                                    <div className="col-sm-6">
                                        <select className="browser-default custom-select mb-4" id="select">
                                            <option value="" disabled="" selected="">To City/Airport</option>
                                        
                                            <option value="2">Mumbai</option>
                                          
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
                                            <input type="date" required placeholder="Return Date" className="form-control" />
                                            <div className="label" id="depart"></div>
                                        </div>

                                    </div>
                                    



                                </div>

                                <botton className="btn btn-primary float-right mt-5"><Link to = "/booking"> Find Flights</Link></botton>
                            </div>
                        </div>




                    </div>



                </div>
                <div>
                    
                </div>

            </div>

            
        )

    }

export default Home;








