
import PasswordInput from './PasswordInput';


function PasswordInputs({ password, confirmPassword, onPasswordChange, onConfirmPasswordChange }) {
  return (
    <>
      <div className="flex gap-5 justify-between items-start mt-12 text-base text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full ml-5">
        <PasswordInput
          label="Password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          style={{ fontSize: "1.125rem" }}  
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0f8696dc697f79d9f1a56754c63cf112bf3acb1e76e2c8d51a405756e495c6f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-end mt-9 w-3.5 aspect-square mr-7" />
      </div>
      <div className="shrink-0 mt-2.5 h-0.5 bg-white max-md:max-w-full ml-5"  style={{width: '93%'}}/>
      <div className="flex gap-5 justify-between items-start mt-12 text-base text-white max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full ml-5">
        <PasswordInput
          label="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          style={{ fontSize: "1.125rem" }}
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ba0781c7e7188017f240c2d37b621fc2106e6ebf9067cf105b9a8f5c228a3f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 self-end mt-9 w-3.5 aspect-square mr-7" />
      </div>
      <div className="shrink-0 mt-2.5 h-0.5 bg-white max-md:max-w-full ml-5 w-[122px]" style={{width: '93%'}}/>
    </>
  );
}

export default PasswordInputs;
