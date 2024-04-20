import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function EmailSentMessage({ email }) {
 const [isButtonEnabled, setIsButtonEnabled] = useState(() => {
    const savedIsButtonEnabled = localStorage.getItem('isButtonEnabled');
    return savedIsButtonEnabled ? JSON.parse(savedIsButtonEnabled) : true;
 });
 const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter ? parseInt(savedCounter) : 30;
 });

 useEffect(() => {
    if (!isButtonEnabled) {
      let timer = counter;
      const countdown = setInterval(() => {
        setCounter(--timer);
        localStorage.setItem('counter', timer);
        if (timer === 0) {
          clearInterval(countdown);
          setIsButtonEnabled(true);
          localStorage.setItem('isButtonEnabled', true);
          setCounter(30); 
        }
      }, 1000);
    }
 }, [isButtonEnabled, counter]);

 const handleResendClick = () => {
    Swal.fire({
      title: 'Success!',
      text: `The email was resent to ${email}.`,
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#fcd34d',
      customClass: {
        confirmButton: 'custom-confirm-button'
      }
    }).then(() => {
      setIsButtonEnabled(false);
      localStorage.setItem('isButtonEnabled', false);
      setCounter(30);
      localStorage.setItem('counter', 30);
    });
 };

 return (
    <main className="flex items-center justify-center mt-10">
      <div className="flex flex-col items-center px-20 py-20 text-5xl font-extrabold tracking-tight text-center text-white shadow-sm bg-v max-w-[604px] max-md:px-5 max-md:text-4xl rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbcdef0b9bce2c7998460d524b40bf5012fe64b53f5f64aefd722e709f34d0cb?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
          alt="Email icon"
          className="mt-8 max-w-full aspect-square w-[134px]"
        />
        <h1 className="mt-7 max-md:text-4xl">Check your email</h1>
        <p className="mt-11 text-2xl font-semibold tracking-tight leading-9 max-md:mt-10 max-md:max-w-full">
          Please check the email address {email} for instructions to reset your
          password.
        </p>
        <button
          onClick={handleResendClick}
          disabled={!isButtonEnabled}
          className={`justify-center items-center self-stretch px-16 py-6 mt-14 bg-amber-300 hover:bg-amber-400 transition-colors rounded-xl shadow-sm text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl ${!isButtonEnabled ? 'opacity-50' : ''}`}
        >
          {isButtonEnabled ? 'Resend email' : `Resend in ${counter} seconds`}
        </button>
      </div>
    </main>
 );
}

function ForgotPasswordRecovery() {
 const location = useLocation();
 const email = location.state?.email || "sin mail";

 return <EmailSentMessage email={email} />;
}

export default ForgotPasswordRecovery;
