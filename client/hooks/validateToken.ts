import axios from "axios";

export const useValidateToken = async (token: string,fullName?:string) => {
  // const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/authenticate`;
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/authenticate`;

  console.log("7",fullName)

  const response = await axios.post(
    url,
    { name:fullName},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
