import * as React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import emailPassword from "../../services/users/password/emailPassword";

function RememberPasswordSection() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleContinueClick = async () => {
    const emailInput = document.getElementById("emailInput").value;

    if (emailInput === "") {
      Swal.fire({
        title: "Warning!",
        text: "Please enter an email to continue.",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#fcd34d",
        customClass: {
          confirmButton: "custom-confirm-button",
        },
      });
    } else {
      try {
        const response = await emailPassword(emailInput);
        Swal.fire({
          title: "Success!",
          text: "We have sent you an email to reset your password.",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#fcd34d",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        }).then(() => {
          navigate("/forgotPasswordRecovery");
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "There was an error sending the email. Please try again later.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#fcd34d",
          customClass: {
            confirmButton: "custom-confirm-button",
          },
        });
      }
    }
  };

  return (
    <div className="flex gap-4 self-end mt-12 text-2xl font-bold tracking-tighter max-md:flex-wrap max-md:mt-10">
      <div className="flex-auto my-auto leading-8 text-right text-white">
        <span className="text-xl ">Remembered your password?</span>
        <br />
        <button
          onClick={handleLoginClick}
          className="hover:text-amber-400 transition-colors"
        >
          <span className="">Back to </span>login
        </button>
      </div>
      <button
        onClick={handleContinueClick}
        className="justify-center px-10 py-8 text-center whitespace-nowrap bg-amber-300 rounded-xl shadow-sm text-neutral-800 max-md:px-5  hover:bg-amber-400 transition-colors"
      >
        Continue
      </button>
    </div>
  );
}

function ForgotPassword() {
  return (
    <main className="flex items-center justify-center mt-10">
      <div className="flex flex-col px-20 py-20 shadow-sm bg-v max-w-[685px] max-md:px-5 rounded-lg">
        <header className="self-center mt-3.5 text-5xl font-extrabold tracking-tight text-center text-white leading-[67px] w-[266px] max-md:text-4xl max-md:leading-[62px]">
          Forgot <br /> password?
        </header>
        <h2 className="mt-20 text-2xl font-semibold tracking-tight leading-8 text-white max-md:mt-10 max-md:max-w-full">
          Don't worry. We can help.
        </h2>
        <div className="flex gap-5 px-11 py-6 mt-9 text-2xl font-extrabold tracking-tight leading-8 text-center bg-white bg-opacity-80 rounded-xl border border-solid border-neutral-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-neutral-800 text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full mb-6">
          <input
            type="email"
            id="emailInput"
            placeholder="Enter your email"
            className="flex-auto bg-transparent border-0 focus:outline-none w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/85bf92bc369c39339b842cda0cfc8e0a99fba9042f1cbdd37f14ca7218e91714?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
            alt=""
            className="shrink-0 w-11 aspect-[1.37] ml-"
          />
        </div>
        <RememberPasswordSection />
      </div>
    </main>
  );
}

export default ForgotPassword;
