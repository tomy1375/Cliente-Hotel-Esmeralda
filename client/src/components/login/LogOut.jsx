import React from "react";
import { useClerk } from "@clerk/clerk-react";
import { useHistory } from "react-router-dom";

const SignOutButton = () => {
 const { signOut } = useClerk();
 const history = useHistory();

 const handleSignOut = async () => {
    await signOut();
    history.push("/home"); // Redirige al usuario a la página de inicio
 };

 return (
    <button onClick={handleSignOut}>
      Sign out
    </button>
 );
};

export default SignOutButton;
