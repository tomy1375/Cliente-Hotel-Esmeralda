import axios from "axios";

const  requestCreateProfile = async (token, profileData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/auth/profile/:userId",
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        }
    );
    return response.data;
    }
    catch (error) {
    console.error("Error al crear perfil:", error);
    throw error;
    }
}

export default requestCreateProfile;