

function EmailInput({ value, onChange }) {
  return (
    <div className="flex flex-col px-6 mt-14 text-base text-white max-md:mt-10 max-md:max-w-full">
      <label htmlFor="email" className="font-extrabold max-md:max-w-full">
        Email
      </label>
      <div className="flex gap-2.5 self-start mt-5 font-medium">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b763b9a4ae8865edaef99e6e32f2b6df273d48db6ca654071afdc932b7b7a27?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 aspect-square w-[17px]" />
        <input
          type="email"
          id="email"
          value={value}
          onChange={onChange}
          placeholder="Enter your email address"
          className="flex-auto bg-transparent border-0 focus:outline-none w-[422px]"
          style={{ fontSize: "1.125rem" }}
        />
      </div>
      <div className="shrink-0 mt-2.5 h-0.5 bg-white max-md:max-w-full" />
    </div>
  );
}

export default EmailInput;
