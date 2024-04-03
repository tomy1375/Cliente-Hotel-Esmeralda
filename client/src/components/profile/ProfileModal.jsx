import { useUser } from "@clerk/clerk-react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileImage from "./ProfileImage";

function ProfileModal({ onClose }) {
  const [isEmailVerified, setIsEmailVerified] = useState(true);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    contact: "",
    dni: "",
    country: "",
    gender: "",
  });



  const { user, isLoaded } = useUser();
  const [countries, setCountries] = useState([]);
  const userInfo = useSelector((state) => state.users.userInfo);

  React.useEffect(() => {
    if (isLoaded) {
      setFormData((prevData) => ({
        ...prevData,
        name: user?.fullName || userInfo?.username || "",
        email: user?.primaryEmailAddress?.emailAddress || userInfo?.email || "",
      }));
    }
  }, [isLoaded, user]);

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

  const handleChange = (field) => (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center m-1 pr-8 pb-10 pl-9 bg-white w-3/10 sm:px-5 rounded-lg">
      <h1 className="text-2xl p-4 font-bold text-font">Edit profile</h1>

      <ProfileImage />
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 mb-4 items-center">
          <div className="flex flex-col flex-1">
            <label className="font-medium leading-[143%] text-font p-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300  text-font"
            />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center">
              <label className="font-medium leading-[143%] text-font">
                Email
              </label>
              <label
                className={`ml-2 p-1 rounded-lg ${
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
              value={formData.contact}
              onChange={handleChange("contact")}
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-stone-400"
            />
          </div>

          <disv className="flex flex-col flex-1">
            <label className="font-medium leading-[143%]  text-font">DNI</label>
            <input
              type="text"
              value={formData.dni}
              onChange={handleChange("dni")}
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-stone-400"
            />
          </disv>
        </div>

        <div className="flex flex-row gap-3 mb-4">
          <div className="flex flex-col flex-1">
            <label className="font-medium leading-[143%]  text-font">
              Gender
            </label>
            <select
              value={formData.gender}
              onChange={handleChange("gender")}
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300  text-font cursor-pointer"
            >
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-medium leading-[143%]  text-font">
              Country
            </label>
            <select
              value={formData.country}
              onChange={handleChange("country")}
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300  text-font cursor-pointer mb-5"
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
            <label className="font-medium leading-[143%] text-neutral-700">
              Date of Birth
            </label>
            <input
              type="date"
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-medium leading-[143%] text-neutral-700">
              Address
            </label>
            <input
              type="text"
              className="px-4 py-3 mt-2 leading-6 bg-white rounded-lg border border-solid border-stone-300 text-font"
            />
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
  );
}

export default ProfileModal;
