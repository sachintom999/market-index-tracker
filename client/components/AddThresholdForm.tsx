import { auth } from "@/firebase/config";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

const AddThresholdForm = () => {

  const {id:index} = useParams()
  
  const [direction, setDirection] = useState("above"); // Default to 'above'
  const [thresholdValue, setThresholdValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., submit to Firestore or handle state
    // console.log("Direction:", direction);
    // console.log("Threshold Value:", thresholdValue);

    const token = await auth.currentUser?.getIdToken();

    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your authorization token
        "Content-Type": "application/json",
      },
    };

    const apiUrl = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/set-threshold`; // Replace with your API endpoint
    const postData = {
      index,
      type: direction,
      value: thresholdValue.toString(),
    };

    axios
      .post(apiUrl, postData, axiosConfig)
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset form fields
    setDirection("above");
    setThresholdValue("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <h2 className="text-lg text-gray-500 font-semibold mb-4">Add Threshold</h2>
      <form onSubmit={handleSubmit}>
        {/* Dropdown for direction */}
        <div className="mb-4">
          <label
            htmlFor="direction"
            className="block text-sm font-medium text-gray-700"
          >
            Direction
          </label>
          <select
            id="direction"
            name="direction"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="above">Above</option>
            <option value="below">Below</option>
          </select>
        </div>

        {/* Threshold value input */}
        <div className="mb-4">
          <label
            htmlFor="thresholdValue"
            className="block text-sm font-medium text-gray-700"
          >
            Threshold Value
          </label>
          <input
            type="number"
            id="thresholdValue"
            name="thresholdValue"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter threshold value"
            value={thresholdValue}
            onChange={(e) => setThresholdValue(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Threshold
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddThresholdForm;
