import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//to display the links and search box in a NAVBAR using bootstrap
export default function Nav() {
  
    const [data, setData] = useState({});
    const toggleOpen = () => {
      setData({ isOpen: data.isOpen ? false : true });
    };
    return (
      <div className="container">
        <nav className={"navbar navbar-expand-lg navbar-light bg-dark"} >
          <button className="navbar-brand  nav-link">   <Link to="/flights">Home</Link></button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" style={{marginRight:"auto"}} >
              <li className="nav-item">
                <button className="nav-link">
                  <Link to="/booking">FlightsAvailable</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <Link to="/passengerdetails">FlightBooking</Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <Link to="/user">Admin</Link>
                </button>
              </li>
             
              <li
                className={
                  data.isOpen ? "nav-item dropdown show" : "nav-item dropdown"
                }
              >
                
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  <button className="dropdown-item">
                    <Link to="/places/Coimbatore">Coimbatore</Link>
                  </button>
                  <button className="dropdown-item">
                    <Link to="/places/Chennai">Chennai</Link>
                  </button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item">Something else here</button>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="form-group input-group ">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="input-group-addon">
                  <button className="btn btn-outline-success my-2 my-sm-0"><Link to='/login'>
                    Login</Link>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </nav>
        <Outlet />
      </div>
    );
}


