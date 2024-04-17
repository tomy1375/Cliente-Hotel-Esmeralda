import React, { useState } from 'react';
import eye from "../../assets/eye.png"

function PasswordInput({ label, id, value, onChange }) {
 // Estado para controlar si el password es visible
 const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 // Función para manejar el clic en el ícono de los ojos
 const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
 };

 const eyeIconClosed = "https://cdn.builder.io/api/v1/image/assets/TEMP/72ba0781c7e7188017f240c2d37b621fc2106e6ebf9067cf105b9a8f5c228a3f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&";
 const eyeIconOpen = eye

 return (
    <div className="flex flex-col self-start ">
      <label htmlFor={id} className="font-extrabold">
        {label}
      </label>
      <div className="flex gap-3 mt-5">
        {/* Ícono de los ojos que al hacer clic cambia la visibilidad del password */}
        <div>
          
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c92496a6bc73d29f322c42048ab8d888bad1de7c90d5f02a294dafb2ecab4?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt=""
          className="shrink-0 aspect-square w-[17px]"
         
        />
        </div>
        {/* Input que cambia su tipo basado en el estado isPasswordVisible */}
        <input
          type={isPasswordVisible ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={`Enter your ${label}`}
          className="flex-auto bg-transparent border-0 focus:outline-none w-[322px]"
        />
      <img
          src={isPasswordVisible ? eyeIconOpen : eyeIconClosed}
          alt=""
          className="shrink-0 aspect-square w-[20px] cursor-pointer ml-56"
          onClick={togglePasswordVisibility}
        />
      </div>
    </div>
 );
}

export default PasswordInput;
