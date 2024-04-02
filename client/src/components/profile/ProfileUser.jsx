import * as React from "react";
import { useUser } from "@clerk/clerk-react";
import Modal from "../modal/modal";
import ProfileModal from "./ProfileModal";
import ModalProfile from "./ModalProfile";
import ModalReservation from "./ModalReservation";
import ReservationModal from "./ReservationModal";


const ProfileImage = ({ src, alt }) => (
  
  <img loading="lazy" src={src} alt={alt} className="shrink-0 mx-auto mt-2.5 rounded-full  hover:brightness-75 transition-all duration-300 aspect-square bg-neutral-800 h-[100px] w-[100px] max-md:mt-10" />
  
);

const SectionHeader = ({ title, description }) => (
  <div className="flex flex-col text-black max-md:mt-10">
    <div className="text-3xl font-extrabold tracking-tight leading-9">{title}</div>
    <div className="mt-7 text-lg tracking-normal leading-5">{description}</div>
  </div>
);

const Reservation = ({ title, description }) => (
  <div className="flex flex-col text-black max-md:mt-10">
    <div className="text-3xl font-extrabold tracking-tight leading-9">{title}</div>
    <div className="mt-7 text-lg tracking-normal leading-5">{description}</div>
  </div>
);


function ProfileUser() {

  const [isModalOpen, setIsModalOpen] = React.useState(false); 

  const [isModalOpenReservation, setIsModalOpenReservation] = React.useState(false); 

  const { user, isLoaded } = useUser(); 

  if (!isLoaded) {
     return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-row justify-between ml-6 mt-8">
      <div className="max-w-full w-[786px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-9 pt-8 pb-16 mx-auto w-full text-lg text-white rounded-2xl shadow-sm bg-v bg-opacity-90 max-md:px-5 max-md:mt-10">
            <img
          loading="lazy"
               src={user?.imageUrl || "https://cdn.builder.io/api/v1/image/assets/TEMP/26c4709492c00da65d6fa729fa2ab40423d04859a3760111aea4ba2e209a09e2?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&"}
              alt="Profile"
              className="ml-5 w-48 h-48 object-cover rounded-full"
              />

              <div className="flex gap-5 mt-14 max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26c4709492c00da65d6fa729fa2ab40423d04859a3760111aea4ba2e209a09e2?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" alt="" className="shrink-0 aspect-[1.18] w-[27px]" />
                <div className="flex-auto my-auto">Your name</div>
              </div>
              <div className="self-center mt-6 tracking-normal leading-[145%] text-white text-opacity-90">
                {user?.fullName}
              </div>
              <div className="shrink-0 mt-7 ml-4 h-px border border-solid bg-white bg-opacity-10 border-white border-opacity-10 w-[199px] max-md:ml-2.5" />
              <div className="flex gap-5 mt-10 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f7771e3595549aa31d10e6a1f228d2d51fc2a8088472a7bd56bd4ea28227bab?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" alt="" className="shrink-0 aspect-[0.84] w-[27px]" />
                <div className="flex-auto my-auto">Email</div>
              </div>
              <div className="self-end mt-4 tracking-normal leading-[145%]">
                {user?.primaryEmailAddress.emailAddress || "No email"} 
              </div>
              <div className="shrink-0 mt-8 ml-4 h-px border border-solid bg-white bg-opacity-10 border-white border-opacity-10 w-[199px] max-md:ml-2.5" />
              <div className="flex gap-5 mt-8">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/09822b6caa5216d78d3ba613ae0d0ac0103187bc950bab6c1f1525811b4f2c25?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" alt="" className="shrink-0 aspect-[0.93] w-[37px]" />
                <div className="flex-auto self-start">Phone Number</div>
              </div>
              <div className="self-center mt-5 tracking-normal leading-[145%]">
                -
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[100%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="flex flex-col justify-center">
                <div className="px-8 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[31%] max-md:ml-0 cursor-pointer " onClick={() => setIsModalOpen(true)} >
                     
                      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3dd099163391e6add3e42b3f27ed29a7a59371a0b76eb3e6955715b8982e482?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" alt="Personal Details " 
                      
                      />
                      
                    </div>
                    <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                      <SectionHeader
                        title="Personal Details"
                        description="Update your information and find out howit's used."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-12 max-md:mt-10">
                <div className="px-9 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e13622bd797e9797b741c9103bf3882c3a1f4e12c870a7951fe22a2cf1c71fc1?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" alt="Security" />
                   
                    </div>
                    
                    <div className="flex flex-col  w-[68%] max-md:ml-0 max-md:w-full">
                      <SectionHeader
                        title="Security"
                        description="Change your security settings, set up secure authentication, or delete your account."
                      />
                      
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex px-9 py-6 rounded-2xl border border-solid border-stone-500 max-md:px-5 mt-9">
                  <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full cursor-pointer" onClick={() => setIsModalOpenReservation(true)}>
                      <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/e13622bd797e9797b741c9103bf3882c3a1f4e12c870a7951fe22a2cf1c71fc1?apiKey=c9ddec6ddbc94b67bd3fdb2f72981df8&" alt="Reservation" />
                   
                    </div>
                <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                  
        <Reservation 

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
        {/* <div className="flex flex-col self-center px-7 pt-8 pb-14 mt-1 ml-96 mb-3 w-full rounded-2xl border border-solid shadow-sm border-neutral-800 max-w-[1500px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-6xl font-extrabold tracking-tighter text-black leading-[70.4px] max-md:max-w-full max-md:text-4xl">Reservations</h2>
          {reservations.map((reservation, index) => (
            <ReservationCard key={index} {...reservation} />
          ))}
          {restaurantReservations.map((reservation, index) => (
            <RestaurantReservationCard key={index} {...reservation} />
          ))}
        </div> */}
      </div>
     <ModalProfile  isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ProfileModal />
     </ModalProfile>
        <ModalReservation isOpen={isModalOpenReservation} onClose={() => setIsModalOpenReservation(false)}>
          <ReservationModal/>
        </ModalReservation>
    </div>
  );
}

export default ProfileUser;