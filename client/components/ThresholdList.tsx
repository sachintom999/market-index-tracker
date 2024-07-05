"use client";
import React, { useEffect, useState } from "react";

import { auth } from "@/firebase/config";
import axios from "axios";
import { useParams } from "next/navigation";

const ThresholdList = () => {
  const [thresholds, setThresholds] = useState([]);

  const { id: index } = useParams();

  useEffect(() => {
    const fetchThresholds = async () => {
      const token = await auth.currentUser?.getIdToken();

      console.log({ token });

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/alerts/getThresholds/${index}`;

      console.log({ apiUrl });

      axios
        .get(apiUrl, axiosConfig)
        .then((response) => {
          console.log("Response data:", response.data);

          setThresholds(response.data.data);

          console.log("thresgolds:", thresholds);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchThresholds();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Price triggers
      </h2>

      {thresholds.length === 0 ? (
        <p className="text-gray-500">No thresholds added yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {thresholds &&
            thresholds?.map((threshold) => (
              <li key={threshold.id} className="py-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {/* <p className="text-sm font-medium text-gray-900">{threshold.index}</p> */}
                    <p className="text-sm text-gray-500">
                      <span className="font-bold">Direction:</span>
                      {threshold.type}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-bold">Value:</span>

                      {threshold.value}
                    </p>
                  </div>
                  {/* Add edit/delete options if needed */}
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ThresholdList;
