import * as React from "react";

function TermsAndConditions() {
 return (
    <div className=" flex-col items-center justify-center pt-12 pb-7 bg-white h-screen">
      <div className="flex flex-col items-center font-extrabold leading-[140%] max-md:ml-2.5">
        <div className="text-4xl tracking-tight text-v">
          Terms and Conditions: Easter Offer at Esmeralda Resort & Spa
        </div>
        <div className="mt-6 text-xl tracking-normal text-cyan-950">
          Reservations and Stay Dates:
        </div>
      </div>
      <div className="flex gap-3 pr-5 mt-6 w-full bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="grow justify-center px-12 py-1 text-base font-extrabold tracking-normal leading-6 text-justify bg-white text-neutral-500 w-fit max-md:px-5 max-md:max-w-full">
          The Easter offer is valid for bookings made exclusively for stays between March 24th and March 30th, 2024, subject to room availability at Esmeralda Resort & Spa.
          <br />
          Inclusion of Benefits:
          <br />
          With each room reservation during the specified period, two bottles of 'Portillo Organic Malbec 2022' wine will be provided as a courtesy.
          Additionally, a complimentary day of family car rental will be included to facilitate mobility during your stay at Esmeralda Resort & Spa.
          <br />
          Car Rental Terms of Use:
          <br />
          The complimentary family car rental day must be booked in advance and is subject to availability at the time of reservation.
          Guests must comply with all age, driver's license, and any other requirements set by the car rental provider.
          Any additional costs, such as optional insurance, fuel, and excessive mileage charges, will be the sole responsibility of the guest.
          Esmeralda Resort & Spa is not liable for any incidents or accidents that occur during the car rental period.
          <br />
          Modifications and Cancellations:
          <br />
          Date modifications are subject to availability and may be subject to additional charges.
          For cancellations made within 7 days of the scheduled arrival date, a cancellation fee equivalent to 50% of the total reservation will apply.
          <br />
          Other Terms:
          <br />
          This offer cannot be combined with other promotions, discounts, or special packages.
          Esmeralda Resort & Spa reserves the right to modify, suspend, or cancel this offer at any time without prior notice.
          All bookings are subject to Esmeralda Resort & Spa's standard terms and conditions.
        </div>
      </div>
      {/* <div className="flex justify-center items-center">
 <img 
    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2650&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="" 
    className="w-4/12 h-1/2 object-cover" 
 />
</div> */}




      {/* <div className="flex gap-5 justify-between self-end mt-9 mr-7 whitespace-nowrap leading-[150%] max-md:mr-2.5">
        <button className="my-auto text-lg font-medium text-bl" onClick={() => console.log("Cancel clicked")}>
          Cancel
        </button>
        <button className="justify-center px-16 py-2.5 text-base font-semibold text-white bg-d rounded-lg max-md:px-5" onClick={() => console.log("Agree clicked")}>
          Agree
        </button>
      </div> */}
    </div>
 );
}

export default TermsAndConditions;
