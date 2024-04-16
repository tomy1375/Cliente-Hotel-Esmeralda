import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClientChat from './ClientChat';

const ModalChat = ({ socket, handleClose, show, children }) => {
   const chatUserId = 'mauri2024'; // Forzar chatUserId a 'mauri2024'
   const navigate = useNavigate(); 

   const showHideClassName = show ? 'modal block' : 'modal hidden';

   const handleCloseModal = () => {
      handleClose(); 
   };
  
   return (
     <div className={showHideClassName}>
       <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">

       
       <div className="modal-content bg-gray-300 w-full md:max-w-2xl mx-auto rounded-lg shadow-xl border border-gray-300 relative">
       <div className="py-6 px-8 bg-gray-100">

           <div
             className="modal-close absolute top-0 right-0 m-2 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white"
             onClick={handleCloseModal}
           >
             <span>X</span>
           </div>
           <div className="py-4 px-6 bg-gray-100"> {/* Cambio de fondo a gris claro */}
             <h2 className="text-xl font-bold mb-4">Client: {chatUserId}</h2>
             {children}
             <ClientChat socket={socket} id={chatUserId} />
           </div>
         </div>
       </div>
     </div>
     </div>
     
   );
};

export default ModalChat;

