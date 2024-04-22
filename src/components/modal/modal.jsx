import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Modal = ({ isOpen, onClose, children, room }) => {
    const navigate = useNavigate()

    useEffect(() => {
      // Bloquear el desplazamiento cuando el modal está abierto.
      if (isOpen) {
          document.body.style.overflow = 'hidden';
      }

      // Función de limpieza que restablece el overflow cuando el componente se desmonta o el modal se cierra.
      return () => {
          document.body.style.overflow = 'auto';
      };
  }, [isOpen]);

  if (!isOpen) {
      return null;
  }
    
 if (!isOpen) return null;
 const handleNavigate = () => {
  navigate('/booking');
  onClose();  // Llamar a onClose para asegurar que se maneje cualquier lógica adicional de cierre y limpiar el estilo del cuerpo.
};
 return (
    <div className="fixed z-50 inset-0 overflow-y-auto" aria-hidden="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-10 pb-20 text-center sm:block sm:p-0">
       <div className="fixed inset-0 transition-opacity">
         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
       </div>
       <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
       <div className="inline-block align-bottom bg-v rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      
         <div className="relative p-4 w-full max-w-2xl max-h-full">
       
           <div className="absolute top-0 right-0 p-4">
             <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={onClose}>
            
               <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
               </svg>
              
             </button>
           </div>
         
           <div className="dark:bg-v px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
             {children}
           </div>
         
           <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
            
             
             <button data-modal-hide="default-modal" type="button" className="text-black bg-amber-300 hover:bg-amber-400 transition-colors focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center " 
             onClick={handleNavigate}
             >Book Now</button>
             <br />
           </div>
         </div>
       </div>
    </div>
   </div>
   
 );
};

export default Modal;
