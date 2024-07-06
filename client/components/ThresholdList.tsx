"use client";
import React, { useEffect, useState } from "react";

import { auth } from "@/firebase/config";
import axios from "axios";
import { useParams } from "next/navigation";

import { useMarketData } from "@/contexts/marketData";

const ThresholdList = () => {
  const [thresholds, setThresholds] = useState([]);

  const { triggers, setTriggers } = useMarketData();

  const { id: index } = useParams();

  useEffect(() => {
    const fetchThresholds = async () => {
      const token = await auth.currentUser?.getIdToken();

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/alerts/getThresholds/${index}`;

      axios
        .get(apiUrl, axiosConfig)
        .then((response) => {
          setThresholds(response.data.data);
          setTriggers(response.data.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchThresholds();
  }, [index,setTriggers]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Price triggers
      </h2>

      {triggers?.length === 0 ? (
        <p className="text-gray-500 text-sm">No triggers added.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {triggers &&
            triggers?.map((threshold:any) => (
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
