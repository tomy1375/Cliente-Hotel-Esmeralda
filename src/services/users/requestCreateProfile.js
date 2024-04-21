import axios from "axios";
import { API_URL } from "../../utils/global";

const baseUrl = API_URL

const requestCreateProfile = async (token, userId, profileData,) => {
  const formData = new FormData();
  for (const key in profileData) {
    formData.append(key, profileData[key]);
  }

  try {
    const response = await axios.put(
      `${baseUrl}auth/profile/${userId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear perfil:", error);
    throw error;
  }
};

export default requestCreateProfile;
