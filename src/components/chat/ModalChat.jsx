import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClientChat from './ClientChat';

const ModalChat = ({ socket, handleClose, show, children }) => {
  const userInfo = useSelector(state => state.users.userInfo); // Obtiene userInfo de Redux
  const chatUserId = userInfo.id;  // Usa el ID de userInfo


  const handleCloseModal = () => {
    handleClose(); 
  };


  const modalClassName = show ? 'fixed inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 transition-opacity duration-300 ease-in-out opacity-100' 
                              : 'fixed inset-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out opacity-0';

  return (
    <div className={modalClassName}>
      <div className="modal-content bg-white w-full md:max-w-lg mx-auto rounded-xl shadow-xl border border-gray-300 relative">
        <div className="py-6 px-8">
          <div
            className="modal-close absolute top-3 right-3 m-2 cursor-pointer flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full"
            onClick={handleCloseModal}
          >
            <span>X</span>
          </div>
          <div className="py-1 px-6 bg-d z-50"> 
            <h2 className="text-xl font-bold mb-4">Client: {chatUserId}</h2>
            {children}
            <ClientChat socket={socket} isModalOpen={show} showChat={show} id={chatUserId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChat;
