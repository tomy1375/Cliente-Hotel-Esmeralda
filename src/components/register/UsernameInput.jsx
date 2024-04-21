
function UsernameInput({ value, onChange }) {
  return (
    <div className="flex flex-col px-5 mt-12 text-base text-white max-md:mt-10 max-md:max-w-full">
      <label htmlFor="username" className="font-extrabold max-md:max-w-full">
        Username
      </label>
      <div className="flex gap-3 self-start mt-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d24ad0b8d6df712c8b466347e11499878c8a868bc88d312b7ae1e809db16278?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 w-4 aspect-square" />
        <input
          type="text"
          id="username"
          value={value}
          onChange={onChange}
          placeholder="Enter your User name"
          className="flex-auto bg-transparent border-0 focus:outline-none w-[422px]"
          style={{ fontSize: "1.125rem" }}
        />
      </div>
      <div className="shrink-0 mt-3.5 h-0.5 bg-white max-md:max-w-full" />
    </div>
  );
}

export default UsernameInput;
