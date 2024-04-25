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
      className="flex items-center w-1/3 justify-center gap-2 px-1 py-2 text-white font-bold bg-d rounded-2xl hover:bg-amber-400 mt-3 transition-colors  max-w-xs"
    >
      <FiArrowLeft size={20} /> Back to home
    </button>
  );
};

export default BackToHomeButton;
