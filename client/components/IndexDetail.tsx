"use client";
import React, { useState } from "react";
import { LineChart } from "./LineChart";
import AddThresholdForm from "./AddThresholdForm";
import ThresholdList from "./ThresholdList";
import MyDatePicker from "./DatePicker";
import { useMarketData } from "@/contexts/marketData";
import Link from "next/link";
import LineChart3 from "./LineChart3";
import withAuth from "./withAuth";

function IndexDetail() {
  // const [marketDate, setMarketDate] = useState(new Date())

  return (
    <div className="bg-slate-100 h-screen w-full">
      <Link href={`/dashboard`}>
        <p className="text-blue-600 text-sm">Back</p>
      </Link>

      <div className="w-3/4 m-auto">
        {/* <MyDatePicker marketDate={marketDate} setMarketDate={setMarketDate} /> */}

        <MyDatePicker />
        {/* <LineChart  marketDate={marketDate}   /> */}
        <LineChart3 />

        <ThresholdList/>
      </div>
      {/* <AddThresholdForm/> */}
      
    </div>
  );
}


export default IndexDetail
// export default withAuth(IndexDetail)