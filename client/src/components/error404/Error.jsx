import * as React from "react";
import { useNavigate } from "react-router-dom";

function Dot({ className }) {
 return <div className={`shrink-0 bg-black rounded-full ${className}`} />;
}


function Error404() {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/");
  };
 return (
    <main className="flex flex-col justify-center items-center min-h-screen px-14 py-14 bg-v max-md:px-5">
      <div className="flex flex-col justify-center w-full bg-orange-50 rounded-3xl max-md:max-w-full">
        <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b96fecafef7e243541f31c8509ce0a72ec9188adc6a8f8424a0318cefe772e0c?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&"
            alt=""
            className="object-cover absolute inset-0 size-full "
          />
          <div className="flex relative gap-5 justify-between mt-20 mb-40 max-w-full max-md:flex-wrap max-md:my-10">
            <Dot className="self-end max-md:mt-10" />
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex flex-col self-end max-w-full ">
                <Dot className="self-end h-[82px] w-[82px]" />
                <Dot className="" />
              </div>
              <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
                <h1 className="self-center text-9xl font-bold text-black max-md:max-w-full max-md:text-4xl">
                  404
                </h1>
                <div className="flex flex-col font-extrabold max-md:max-w-full">
                 <h2 className="self-center text-6xl tracking-tighter text-black leading-[89.6px] max-md:max-w-full max-md:text-4xl">
                    Page Not Found
                 </h2>
                 <div className="flex flex-col mt-3.5 text-center max-md:max-w-full">
                    <p className="text-3xl tracking-tight leading-10 text-black max-md:max-w-full">
                      we're sorry. the page you requested could no be found
                      <br />
                      Please go back to the home page
                    </p>
                    <button onClick={GoHome} className="text-xl py-4 px-3 mt-6 font-bold text-white bg-amber-300 hover:bg-amber-400 transition-colors rounded-2xl shadow-lg w-full">
                   GO HOME
                  </button>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
 );
}

export default Error404;
