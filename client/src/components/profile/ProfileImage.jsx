import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react"; // Importa useState
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa"; // Importa el icono de camarita

function ProfileImage() {
  const { user, isLoaded } = useUser();
  const userInfo = useSelector((state) => state.users.userInfo);
  const [showEditIcon, setShowEditIcon] = useState(false); // Estado para controlar la visibilidad del icono de edición

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  let imageUrl =
    user?.imageUrl ||
    userInfo?.Image ||
    "https://www.researchgate.net/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png";

  return (
    <div className="flex justify-center items-center relative m-3">
      <img
        loading="lazy"
        src={imageUrl}
        alt="Profile"
        className="mt-0 max-w-full aspect-square rounded-[200px] w-[235px]"
        onMouseEnter={() => setShowEditIcon(true)}
        onMouseLeave={() => setShowEditIcon(false)}
      />
      {showEditIcon && (
        <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer">
          <FaCamera size={40} color="#333" />
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
