import { useMarketData } from "@/contexts/marketData";
import { useState } from "react";
import DatePicker from "react-datepicker";

// const MyDatePicker = ({marketDate,setMarketDate}) => {
const MyDatePicker = () => {
    // const [startDate, setStartDate] = useState(new Date());

    const {marketDate,setMarketDate} = useMarketData()
  
    return (
      <div className="flex items-center justify-center  bg-gray-100 mb-10">
        <DatePicker
          selected={marketDate}
          onChange={(newDate) => setMarketDate(newDate)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
          calendarClassName="bg-white p-2 rounded-md shadow-lg"
        //   dayClassName={(date) => "hover:bg-blue-100"}
          todayButton="Today"
          maxDate={new Date()}
        
        />
      </div>
    );
  };
  
  export default MyDatePicker;
  