import { useUser } from "@clerk/clerk-react";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import requestCreateProfile from "../../services/users/requestCreateProfile";
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";

function ProfileModal({ isOpen, onClose }) {
  const { user, isLoaded } = useUser();
  const [countries, setCountries] = useState([]);
  const userInfo = useSelector((state) => state.users.userInfo);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [showEditIcon, setShowEditIcon] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(
    userInfo?.emailVerified
  );
  const [formData, setFormData] = useState({
    full_name: user?.fullName || userInfo?.full_name || "",
    email: user?.primaryEmailAddress?.emailAddress || userInfo?.email || "",
    phone_number: userInfo?.phone_number || "",
    document: userInfo?.document || "",
    country: userInfo?.country || "",
    gender: userInfo?.gender || "",
    address: userInfo?.address || "",
    birth: userInfo?.birth || "",
    photo_url:
      userInfo?.photo_url ||
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const handleUpdateImage = () => {
    setFormData((prevData) => ({
      ...prevData,
      photo_url: newImageUrl,
    }));
    setShowImageInput(false);
  };

  useEffect(() => {
    fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "uLmMbkZBbbL5ExZ2xmGYWb-qORHjJ8fBy3RMmMfB3KEyCnLhMabei7gl53LhaxMmKm4",
        "user-email": "tomy_ramos1991@yahoo.com.ar",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const authToken = data.auth_token;
        fetch("https://www.universal-tutorial.com/api/countries", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setCountries(data))
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (userInfo !== null) {
      console.log(userInfo);
      setIsEmailVerified(userInfo.emailVerified);
      setFormData(userInfo);
    }
  }, [userInfo]);

  const handleSubmit = async () => {
    try {
      const token = Cookies.get("token");
      if (token) {
        const response = await requestCreateProfile(token, {
          userId: userInfo.id,
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          document: formData.document,
          country: formData.country,
          birth: formData.birth,
          address: formData.address,
          photo_url: formData.photo_url,
        });
        console.log(response);
        onClose();
      } else {
        console.error("No se encontró el token en las cookies");
      }
    } catch (error) {
      console.error("Error al crear perfil:", error);
    }
  };

  const handleChange = (field) => (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  if (!isOpen) {
    return null;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-60">
      <div className="flex flex-col items-center bg-white rounded-lg p-4 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-xl">
        <h1 className="text-2xl p-4 font-bold text-font">Edit profile</h1>

        <div className="flex justify-center items-center relative m-3">
          <img
            loading="lazy"
            src={formData.photo_url}
            alt="Profile"
            className="mt-0 max-w-full aspect-square rounded-[200px] w-[235px]"
            onMouseEnter={() => setShowEditIcon(true)}
            onMouseLeave={() => setShowEditIcon(false)}
            onClick={() => setShowImageInput(true)}
          />
          {showEditIcon && (
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer">
              <FaCamera
                size={40}
                color="#333"
                onClick={() => setShowImageInput(true)}
              />
            </div>
          )}
          {showImageInput && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4">
              <input
                type="text"
                placeholder="Enter image URL"
                className="w-full mb-2"
                value={formData.photo_url}
                onChange={(e) => setNewImageUrl(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleUpdateImage}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2"
                onClick={() => setShowImageInput(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <div className="">
            <div className="flex flex-row gap-3 mb-4 items-center">
              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%] text-font ">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={handleChange("full_name")}
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300  text-font"
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center">
                  <label className="font-medium leading-[143%] text-font">
                    Email
                  </label>
                  <label
                    className={`ml-2  rounded-lg ${
                      isEmailVerified
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {isEmailVerified ? "Verified" : "Not verified"}
                  </label>
                </div>
                <input
                  type="text"
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300  text-font"
                />
              </div>
            </div>

            <div className="flex flex-row gap-3 mb-4">
              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%] text-font">
                  Contact
                </label>
                <input
                  type="text"
                  value={formData.phone_number}
                  onChange={handleChange("phone_number")}
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
                />
              </div>

              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%]  text-font">
                  DNI
                </label>
                <input
                  type="text"
                  value={formData.document}
                  onChange={handleChange("document")}
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
                />
              </div>
            </div>

            <div className="flex flex-row gap-3 mb-4">
              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%]  text-font">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      gender: e.target.value,
                    }))
                  }
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
                >
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%]  text-font">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      country: e.target.value,
                    }))
                  }
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
                >
                  <option value="">Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.country_name}>
                      {country.country_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-row gap-3 mb-4">
              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%] text-font">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      birth: e.target.value,
                    }))
                  }
                  value={formData.birth}
                />
              </div>

              <div className="flex flex-col flex-1">
                <label className="font-medium leading-[143%] text-neutral-700">
                  Address
                </label>
                <input
                  type="text"
                  className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      address: e.target.value,
                    }))
                  }
                  value={formData.address}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 w-full  flex-wrap">
            <button
              className="flex flex-1 justify-center px-5 hover:bg-red-400 py-3 rounded-lg text-font font-bold bg-white border border-solid border-neutral-700"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              className="flex flex-1 justify-center font-bold px-5 py-3 rounded-lg text-b bg-v hover:brightness-75 transition-color"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
