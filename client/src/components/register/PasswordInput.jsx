

function PasswordInput({ label, id, value, onChange }) {
  return (
    <div className="flex flex-col self-start ">
      <label htmlFor={id} className="font-extrabold">
        {label}
      </label>
      <div className="flex gap-3 mt-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/561c92496a6bc73d29f322c42048ab8d888bad1de7c90d5f02a294dafb2ecab4?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 aspect-square w-[17px]" />
        <input
          type="password"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={`Enter your ${label}`}
          className="flex-auto bg-transparent border-0 focus:outline-none w-[322px]"
        />
      </div>
    </div>
  );
}

export default PasswordInput;
