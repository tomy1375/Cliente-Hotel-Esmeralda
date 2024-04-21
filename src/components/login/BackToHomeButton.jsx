

import { FiArrowLeft } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {
 const navigate = useNavigate();

 const goToHome = () => {
    navigate('/'); 
 };

 return (
    <button
      onClick={goToHome}
      className="flex items-center gap-2 px-4 py-2 text-v font-bold bg-d rounded-2xl hover:bg-amber-400 mt-3 transition-colors"
    >
      <FiArrowLeft size={20} /> Back to home
    </button>
 );
};

export default BackToHomeButton;
