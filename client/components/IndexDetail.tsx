"use client";
import React from "react";
import AddThresholdForm from "./AddThresholdForm";
import ThresholdList from "./ThresholdList";
import MyDatePicker from "./DatePicker";
import Link from "next/link";
import LineChart3 from "./LineChart3";


function IndexDetail() {
  return (
    <div className="bg-slate-100 h-screen w-full">
      <Link href={`/dashboard`}>
        <p className="text-blue-600 text-sm ml-40 pt-10">Back</p>
      </Link>

      <div className="w-3/4 m-auto">
        <MyDatePicker />
        <LineChart3 />
        <ThresholdList />
      <AddThresholdForm/>
      </div>
    </div>
  );
}

export default IndexDetail;
