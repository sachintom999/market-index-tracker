"use client";
import IndexList from "@/components/IndexList";
import withAuth from "@/components/withAuth";


 function Dashboard() {
  return (
    <div className="bg-slate-100">
      
      
      <IndexList/>
    </div>
  );
}


export default withAuth(Dashboard)