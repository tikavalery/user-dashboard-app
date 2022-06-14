import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import { userData } from "../components/dummyData";
import UserDashBoard from "./UsersDashBoard";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
// import SideBar from "../components/SideBar";
import "./Home.css"


function Home() {
 
  return (
    <div className="col-10">
      {/* <SideBar /> */}
     <div className="home">
     
      <div>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
     {/* <UserDashBoard/> */}
    </div>
    </div>
    </div>

    
  );
}

export default Home;
