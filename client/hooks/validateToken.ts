import axios from "axios";

export const useValidateToken = async (token: string) => {
  const url = "http://localhost:4000/authenticate";

  const response = await axios.post(
    url,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
