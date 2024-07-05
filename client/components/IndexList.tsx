import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import withAuth from "./withAuth";

function IndexList() {
  const [indices, setIndices] = useState(null);

  const url = `${process.env.NEXT_PUBLIC_POLYGON_BASE_URL}/v3/reference/tickers?type=CS&market=stocks&active=true&order=asc&limit=20&sort=name&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`;

  useEffect(() => {
    const fetchIndexData = async (): Promise<any | null> => {
      try {
        const response: AxiosResponse<any> = await axios.get(url);
        setIndices(response.data.results);
        
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error with Axios request:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
        return null;
      }
    };

    fetchIndexData();

    return () => {};
  }, []);

  return (
    <div className="p-4 h-screen ">
      <h2 className="text-gray-600 text-xl font-bold">Indices</h2>

      <div className="h-5/6 overflow-y-auto mt-4 p-2 rounded">
        {indices &&
          indices?.map((index) => (
            <p
              className="text-sm text-blue-500 p-2 hover:text-blue-800"
              key={index.ticker}
            >
              <Link href={`/indices/${index.ticker}`} className="">
                {index.name}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
}

export default IndexList;
// export default withAuth(IndexList)
