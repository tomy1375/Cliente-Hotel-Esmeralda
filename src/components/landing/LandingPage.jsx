import React, { useEffect, useState } from "react";
import { IoMdCloseCircle, IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function LandingPages() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    navigate("/formulario");
    console.log("yendo a formulario");
  };

  const handleClickDetails = () => {
    navigate("/termsAndConditions");
    handleClose();
  };

  const handleClose = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
    localStorage.setItem("modalShown", "true"); 
  };

  useEffect(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative max-w-3xl w-full mx-auto">
        <div className="absolute top-0 right-0 m-4">
          <button className="text-font" onClick={handleClose}>
            <IoMdCloseCircle className="text-red-500 text-3xl" onClick={handleClose} />
          </button>
        </div>
        <iframe
          src="https://d1csarkz8obe9u.cloudfront.net/index.php/posterbuilder/view/361a4970a60f6035f9faf484a5525ed0/1"
          className="w-full h-full border-none"
          style={{ minHeight: "640px" }}

        ></iframe>
      </div>
    </div>
  );
}

export default LandingPages;
