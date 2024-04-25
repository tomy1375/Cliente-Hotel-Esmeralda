import * as React from "react";
import { useUser } from "@clerk/clerk-react";
import ProfileModal from "./ProfileModal";
import ModalReservation from "./ModalReservation";
import ReservationModal from "./ReservationModal";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdHotel, MdOutlinePayments } from "react-icons/md";
import { fetchUserInfo } from "../../redux/users/actions/usersActions";
import { useDispatch } from "react-redux";
import ModalSecurity from "./ModalSecurity";

const SectionHeader = ({ title, description }) => (
  <div className="flex flex-col text-black max-md:mt-10">
    <div className="text-3xl font-extrabold tracking-tight leading-9">
      {title}
    </div>
    <div className="mt-7 text-lg tracking-normal leading-5">{description}</div>
  </div>
);

function ProfileUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenReservation, setIsModalOpenReservation] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);

  const { user } = useUser();
  const userInfo = useSelector((state) => state.users.userInfo);
  const dispatch = useDispatch();


  let displayName = user?.fullName || userInfo?.username || "Desconocido";
  let displayEmail =
    user?.primaryEmailAddress.emailAddress || userInfo?.email || "Desconocido";
  let displayPhoneNumber =
    user?.phoneNumbers || userInfo?.phone_number || "Desconocido";

  useEffect(() => {
    dispatch(fetchUserInfo()); 
  }, [dispatch]);

  // useEffect(() => {
  //   if (isModalOpen || isModalOpenReservation) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isModalOpen, isModalOpenReservation]);

  useEffect(() => {
    // console.log(user);
  }, [user]);

  // const profilePhoto = 

  return (
    <>
      <div className="flex flex-row ustify-center sm:justify-start xl:justify-start ml-2 mt-8 md:ml-0">
        <div className="max-w-full w-full flex justify-center items-center p-8">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-1/7 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 pt-8 pb-16 mx-auto w-full  text-lg text-white rounded-2xl shadow-sm bg-v bg-opacity-90 max-md:px-5 max-md:mt-10">
              <img
                    loading="lazy"
                    src={user?.imageUrl ? user.imageUrl : (userInfo?.photo_url ? userInfo.photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")}
                    alt="Profile"
                    className="ml-6 mt-3 w-48 h-48 object-cover rounded-full"
                    />


                <div className="flex gap-5 mt-14 max-md:mt-10 ml-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/26c4709492c00da65d6fa729fa2ab40423d04859a3760111aea4ba2e209a09e2?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&"
                    alt=""
                    className="shrink-0 aspect-[1.18] w-[27px]"
                  />
                  <div className="flex-auto my-auto">{displayName}</div>
                </div>
                <div className="shrink-0 mt-7 ml-4 h-px border border-solid bg-white bg-opacity-10 border-white border-opacity-10 w-[199px] max-md:ml-2.5" />
                <div className="flex gap-5 mt-10 whitespace-nowrap ml">
                
                  <div className="flex-auto my-auto">{displayEmail}</div>
                </div>
                <div className="shrink-0 mt-8 ml-4 h-px border border-solid bg-white bg-opacity-10 border-white border-opacity-10 w-[199px] max-md:ml-2.5" />
                <div className="flex gap-5 mt-8 ml-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/09822b6caa5216d78d3ba613ae0d0ac0103187bc950bab6c1f1525811b4f2c25?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&"
                    alt=""
                    className="shrink-0 aspect-[0.93] w-[37px]"
                  />
                  <div className="flex-auto self-start">
                    {displayPhoneNumber}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 gap-3">
                <div className="flex flex-col justify-center">
                  <div className="px-8 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5 flex items-center">
                    <FaUserEdit
                      className="text-d p-4 bg-v w-20 h-20 rounded-full cursor-pointer hover:bg-v-dark transition-all duration-300 max-md:w-10 max-md:h-10 max-md:p-3 max-md:ml-2.5 max-md:mt-10 max-md:mb-5"
                      onClick={() => setIsModalOpen(true)}
                    />
                    <div className="flex flex-col w-full max-md:w-1/3 ml-5 max-md:ml-0">
                      <SectionHeader
                        title="Personal Details"
                        description="Update your information and find out how it's used."
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="px-8 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5 flex items-center">
                  <RiLockPasswordFill
                        className="text-d p-4 bg-v w-20 h-20 rounded-full cursor-pointer hover:bg-v-dark transition-all duration-300 max-md:w-10 max-md:h-10 max-md:p-3 max-md:ml-2.5 max-md:mt-10 max-md:mb-5"
                        onClick={() => setIsSecurityModalOpen(true)}
                        />

                    <div className="flex flex-col w-full max-md:w-2/3 ml-5 max-md:ml-0">
                      <SectionHeader
                        title="Security"
                        description="Change your security settings, set up secure authentication, or delete your account."
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center">
                  <div className="px-8 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5 flex items-center">
                    <MdOutlinePayments
                      className="text-d p-4 bg-v w-20 h-20 rounded-full cursor-pointer hover:bg-v-dark transition-all duration-300 max-md:w-10 max-md:h-10 max-md:p-3 max-md:ml-2.5 max-md:mt-10 max-md:mb-5"
                      onClick={() => setIsModalOpen(true)}
                    />
                    <div className="flex flex-col w-full max-md:w-2/3 ml-5 max-md:ml-0">
                      <SectionHeader
                        title="Payment details"
                        description="Manage your payment methods, update billing information, view transaction history, or delete payment accounts."
                      />
                    </div>
                  </div>
                </div> */}
                <div className="flex flex-col justify-center">
                  <div className="px-8 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5 flex items-center">
                  <MdHotel
                        className="text-d p-4 bg-v w-20 h-20 rounded-full cursor-pointer hover:bg-v-dark transition-all duration-300 max-md:w-10 max-md:h-10 max-md:p-3 max-md:ml-2.5 max-md:mt-10 max-md:mb-5"
                        onClick={() => {
                            if (isModalOpenReservation) {
                              setIsModalOpenReservation(false);
                            } else {
                              setIsModalOpenReservation(true);
                            }
                        }}
                        />

                    <div className="flex flex-col w-full max-md:w-2/3 ml-5 max-md:ml-0">
                      <SectionHeader
                        title="Reservation"
                        description="Manage your reservations, view past bookings, and make new ones."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        
        
      </div>
      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
 <ModalSecurity
    isOpen={isSecurityModalOpen}
    onClose={() => setIsSecurityModalOpen(false)}
 />

          <ReservationModal
          isOpen={isModalOpenReservation}
          onClose={() => setIsModalOpenReservation(false)}
           />

    </>
  );
}

export default ProfileUser;

{
  /* <div className="flex flex-col self-center px-7 pt-8 pb-14 mt-1 ml-96 mb-3 w-full rounded-2xl border border-solid shadow-sm border-neutral-800 max-w-[1500px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-6xl font-extrabold tracking-tighter text-black leading-[70.4px] max-md:max-w-full max-md:text-4xl">Reservations</h2>
          {reservations.map((reservation, index) => (
            <ReservationCard key={index} {...reservation} />
          ))}
          {restaurantReservations.map((reservation, index) => (
            <RestaurantReservationCard key={index} {...reservation} />
          ))}
        </div> */
}
