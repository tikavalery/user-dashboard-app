import React from "react";
import Chart from "../components/Chart";
import { userData } from "../components/dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import "./Home.css"


function Home() {
 
  return (
    <div className="col-10">
     <div className="home">
     
      <div>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </div>
    </div>

    
  );
}

export default Home;
