import { useState } from "react";

import { useNavigate } from "react-router-dom";
import DetailModalRoom from "../detail/DetailModalRoom";
import Modal from "../modal/modal";
import { useClerk } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2';

function CardRoom({ room }) {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useClerk();
  const userInfo = useSelector((state) => state.users.userInfo);
  const clientId = userInfo?.username ?? user?.firstName ?? "notcount";

  const single_bed = room.room_detail.single_bed ? room.room_detail.single_bed : 0;
  const double_bed = room.room_detail.double_bed ? room.room_detail.double_bed : 0;

  const handleClick = () => {
    if (clientId === "notcount") {
      Swal.fire({
        icon: 'warning',
        title: 'Log in to continuer',
        text: 'You must log in to book a room.',
        confirmButtonText: 'ok', // Personaliza el texto del botón de confirmación
        confirmButtonColor: '#fcd34d', 
       customClass: {
         confirmButton: 'custom-confirm-button' 
       }
      });
      return; // Detiene la ejecución de la función
    }
    navigate("/booking");
 };

  return (
    <>
      <div className="pl-16 rounded-3xl shadow-sm bg-v max-md:pl-5 w-full  lg:w-7/12 ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 lg:h-[100%]">
          <div className="flex flex-col w-[44%] max-md:ml-8 max-md:w-full lg:h-[66%]">
            <div className="flex z-10 flex-col mt-7 max-md:max-w-full lg:h-[95%]">
              <div className="flex flex-col items-start pl-20 max-md:pl-5 max-md:max-w-full lg:h-[58.33%]">
                <div className="max-w-56 lg:h-[58.33%]">
                  <div className="flex gap-24 max-md:flex-col max-md:gap-0 lg:h-[58.33%]">
                    <div className="flex flex-col max-md:ml-0 max-w-md ">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/663eae8fd7be6df68f6e25af7f35976248e4a857012e381fb6faa82ea9ca17d3?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
                        className="ml-80  shrink-0 max-w-full aspect-square w-[140px] max-md:mt-5 "
                        alt="Superior King"
                      />
                      <div className="mt-3 mb-5 mr-10 text-2xl font-extrabold text-center text-white  ">
                        {room.room_type.name}
                      </div>
                      <div className="mb"></div>
                    </div>
                    <div className="mr-64 flex flex-col w-9/12 max-md:ml-0 max-md:w-full"></div>
                  </div>
                </div>
                <div className=" ml-14 text-base font-semibold text-white max-md:mt-10 max-md:ml-2.5">
                  Sleeps {room.max_capacity} | King: {double_bed} | Single:{single_bed}
                </div>
              </div>
              <div className="mt-5 mb-3 text- font-medium text-white  max-md:max-w-full ">
                {room.description}
              </div>
              <button
                className="ml justify-center items-center px-16 py-4  text-base font-extrabold tracking-normal leading-6 text-white rounded-2xl border border-violet-100 border-solid hover:bg-green-950 transition-colors max-md:px-5 max-md:max-w-full"
                onClick={() => setIsModalOpen(true)}
              >
                SEE MORE
              </button>
              <button
                className="justify-center items-center px-16 py-4 mt-3 text-base font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg max-md:px-5 max-md:max-w-full"
                onClick={handleClick}
              >
                BOOK NOW
              </button>
            </div>
          </div>
          <div className="mt flex flex-col ml-5 w-[60%]  max-md:w-full ">
            <img
              loading="lazy"
              src={room.photo_url}
              className="grow w-full  rounded-r-3xl "
              alt="Room"
            />
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <DetailModalRoom room={room} />
        </Modal>
      </div>
    </>
  );
}

export default CardRoom;

