import { useMarketData } from "@/contexts/marketData";
import DatePicker from "react-datepicker";

const MyDatePicker = () => {
  const { marketDate, setMarketDate } = useMarketData();

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="flex items-center justify-center gap-2 bg-gray-100 mb-10">
      <span className="text-gray-700 text-sm">Date:</span>
      <DatePicker
        selected={marketDate}
        onChange={(newDate) => {
          const formattedDate = formatDate(newDate);
          setMarketDate(formattedDate);
        }}
        className="p-0 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
        calendarClassName="bg-white p-2 rounded-md shadow-lg"
        todayButton="Today"
        maxDate={new Date()}
      />
    </div>
  );
};

export default MyDatePicker;
