import { useUser } from "@clerk/clerk-react";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import requestCreateProfile from "../../services/users/requestCreateProfile";
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchUserInfo, setUserInfo } from "../../redux/users/actions/usersActions";
import Swal from "sweetalert2";
import { getUserInfo } from "../../services/users/userInfo";

function ProfileModal({ isOpen, onClose }) {
  const { user, isLoaded } = useUser();
  const [countries, setCountries] = useState([]);
  const userInfo = useSelector((state) => state.users.userInfo);
  const [updatedUserInfo, setUpdatedUserInfo] = useState(null);
  

  const dispatch = useDispatch();
  const [showImageInput, setShowImageInput] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEditIcon, setShowEditIcon] = useState(false);

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
      // user.imageUrl||
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  useEffect(() => {
    console.log("Nuevos datos de userInfo:", userInfo);
  }, [userInfo]);

  useEffect(() => {
    dispatch(fetchUserInfo()); 
  }, [dispatch]);


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
      if (!token) {
        console.error("No se encontró el token en las cookies");
        return;
      }

      if (!userInfo || !userInfo.id) {
        console.error("El usuario o el ID del usuario no está definido.");
        return;
      }

      const requestData = {
        userId: userInfo.id,
        full_name: formData.full_name,
        email: formData.email,
        phone_number: formData.phone_number,
        gender: formData.gender,
        document: formData.document,
        country: formData.country,
        birth: formData.birth,
        address: formData.address,
      };

      if (selectedFile) {
        requestData.photo = selectedFile;
      }

      const response = await requestCreateProfile(
        token,
        userInfo.id,
        requestData
      );
      console.log("Perfil creado:", response);
      dispatch(setUserInfo(userInfo));
      dispatch(fetchUserInfo());

      Swal.fire({
        icon: "success",
        title: "Profile updated",
        text: "Profile updated successfully.",
        confirmButtonColor: '#fcd34d',
           customClass: {
             confirmButton: 'custom-confirm-button'
           }
      });
      setUpdatedUserInfo(response);

      onClose();
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        photo_url: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 overflow-y-auto">
      <div className="relative flex flex-col items-center bg-white rounded-lg p-4 w-full max-w-screen-sm sm:max-w-xl md:max-w-2xl lg:max-w-xl overflow-y-auto">
        <h1 className="text-2xl mt-4 font-bold text-font">Edit profile</h1>
        <div className="absolute top-0 right-0 p-4">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="flex justify-center items-center relative m-3">
          <img
            loading="lazy"
            src={formData.photo_url}
            alt="Profile"
            className="mt-0 max-w-full w-auto md:max-w-[200px] aspect-square rounded-[200px] md:rounded-[100px]"
            onMouseEnter={() => setShowEditIcon(true)}
            onMouseLeave={() => setShowEditIcon(false)}
            onClick={() => setShowImageInput(true)}
          />

          <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer opacity-50">
            <FaCamera
              size={30}
              color="#333"
              onClick={() => setShowImageInput(true)}
            />
          </div>

          {showImageInput && (
            <input
              type="file"
              accept="image/*"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
          )}
        </div>
        <div className="flex flex-col">
          <div className="">
            <div className="flex flex-row gap-3 mb-4 items-center">
              <div className="flex flex-col flex-1">
                <label className="font-extrabold  leading-[143%] p-1 text-font ">
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
                  <label className="font-extrabold  leading-[143%] text-font">
                    Email
                  </label>
                  <label
                    className={`ml-2 p-1  rounded-lg ${
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
                <label className="font-extrabold  leading-[143%] text-font">
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
                <label className="font-extrabold  leading-[143%]  text-font">
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
                <label className="font-extrabold  leading-[143%]  text-font">
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
                <label className="font-extrabold  leading-[143%]  text-font">
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
                <label className="font-extrabold  leading-[143%] text-font">
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
                <label className="font-extrabold  leading-[143%] text-neutral-700">
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
          <div className="flex justify-center flex-wrap">
            <button
              className="font-bold px-5 w-2/3 py-3 rounded-lg  text-b bg-v hover:brightness-75 transition-color"
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
