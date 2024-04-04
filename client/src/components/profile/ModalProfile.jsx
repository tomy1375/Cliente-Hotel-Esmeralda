// import { useEffect } from "react";
// const ModalProfile = ({ isOpen, onClose, children}) => {
  
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

    
//  if (!isOpen) return null;
//  return (
//     <div className="fixed z-50 inset-0 overflow-y-auto " aria-hidden="true">
//     <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//        <div className="fixed inset-0 transition-opacity">
//          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//        </div>
//        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
//        <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl  ">

      
//          <div className="relative  w-full max-w-2xl max-h-full">
       
//            <div className="absolute top-0 right-0 p-4">
//              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-5 h-5 mr-4 mt-3  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-Profile-hide="default-modal" onClick={onClose}>
            
//                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                </svg>
//              </button>
//            </div>
         
//            <div className="">
//              {children}
//            </div>
         
//            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
        
//              <br />
//            </div>
//          </div>
//        </div>
//     </div>
//    </div>
   
//  );
// };

// export default ModalProfile;