import axios from "axios";

const requestCreateProfile = async (token, userId, profileData,) => {
  const formData = new FormData();
  for (const key in profileData) {
    formData.append(key, profileData[key]);
  }

  try {
    const response = await axios.put(
      `http://localhost:4000/auth/profile/${userId}`,
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
