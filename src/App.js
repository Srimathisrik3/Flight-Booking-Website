import "./App.css"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import FlightBooking from "./Components/FlightBooking"
import History from "./Components/History"
import Navbar from "./Components/Nav"
import FlightsAvailable from "./Components/Bookingpage"
import Flights from "./Components/Admin"
import SignInForm from "./Components/Login"
import Home from "./Components/Home"
import BookingConfirmation from "./Components/BookingConfirmation"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Navbar />} >
        {/* <Route path="/flights" element={<SearchFlights />} />  */}
        <Route  path="/flightHistory" element={<History />} />
        <Route path="/passengerdetails" element={< FlightBooking />} />
        <Route path="/user" element={< Flights/>} />
        <Route path="/login" element={<SignInForm/>}/>
        <Route path="/booking" element={<FlightsAvailable/>}/>
        <Route path="/flights" element={<Home/>}/>
        <Route path="/confirmbooking" element={<BookingConfirmation/>}/>

      </Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}


export default App


