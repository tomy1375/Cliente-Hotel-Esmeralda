import * as React from "react";
import { useNavigate } from "react-router-dom";
function PaymentDetail({ label, value }) {
  return (
    <div className="flex gap-5 mt-6 max-md:flex-wrap">
      <div className="flex-1 text-neutral-500">{label}</div>
      <div className="font-medium text-center text-neutral-900">{value}</div>
    </div>
  );
}

function Pay() {

    const navigate = useNavigate()

  const paymentDetails = [
    { label: "Location Number", value: "000085752257" },
    { label: "Description",},
    { label: "TypeRoom", value: "Standard Room" },
    { label: "Payment Time", value: "25-02-2023, 13:22:16" },
    { label: "Payment Method", value: "Bank Transfer" },
    { label: "Sender Name", value: "Tomas Ramos" },
  ];

  const amountDetails = [
    { label: "Amount", value: "IDR 1,000,000" },
   
    { label: "Admin Fee", value: "IDR 193.00" },
   
  ];
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center p-10 text-2xl leading-8 bg-white shadow-2xl rounded-[39.969px] max-md:px-5 w-full md:w-3/4 lg:w-1/2 ml-96">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e3728f6d703a1c24b9f2b34bc4c67159236d2740277f84f27711e488db70fb8?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
        alt="Payment success icon"
        className="self-center aspect-[0.99] w-[93px]"
      />
      <h2 className="mt-7 text-3xl leading-10 text-center text-zinc-700 max-md:max-w-full">
        Payment Success!
      </h2>
      <p className="mt-3.5 text-4xl font-semibold text-center leading-[53.2px] text-neutral-900 max-md:max-w-full">
        IDR 1,000,000
      </p>
      <hr className="shrink-0 mt-12 h-0.5 bg-gray-200 border-2 border-gray-200 border-solid max-md:mt-10 max-md:max-w-full" />
      {paymentDetails.map((detail, index) => (
        <PaymentDetail key={index} label={detail.label} value={detail.value} />
      ))}
      <hr className="shrink-0 mt-6 h-0.5 bg-gray-200 border-2 border-gray-200 border-dashed max-md:max-w-full" />
      {amountDetails.map((detail, index) => (
        <PaymentDetail key={index} label={detail.label} value={detail.value} />
      ))}
      <button className="justify-center px-8 py-4 text-white bg-amber-300 rounded-md max-md:px-5 mt-10 hover:bg-amber-400 transition-colors" onClick={handleClick}>Go to Home</button>
    </div>
  );
}
export default Pay