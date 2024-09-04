import React from 'react';


const BookingConfirmation = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="text-center order-details">
        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
          <span className="check1"><i className="fa fa-check"></i></span>
          <span className="font-weight-bold">BOOKING CONFIRMED</span>
          <small className="mt-2">Happy Journey!!!</small>
          <a href="#" className="text-decoration-none invoice-link"></a>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;