import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../÷dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const  MONTHS = useMemo(() => [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],[]);

  const [userStats, setUserStats] = useState([])

  useEffect(()=>{
    try {
      const getStats = async () => {
        const res = await axios.get("/users/stats/",{
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Njk5ZjIzOTliZDUwYjJhMWFmMmFmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTk2Njg5OCwiZXhwIjoxNjg2Mzk4ODk4fQ.OSC0jiUe5Pgn_698gJjOfzVCwnmpmM2rFs0mwtweLLQ"
          }
        })
        const statsList = res.data.sort(function (a,b){
          return a._id - b._id
        })
        statsList.map(item => setUserStats(prev=>[...prev,
          {name:MONTHS[item._id-1], "New Users": item.total}
      ]));
      }
      getStats()
    } catch (error) {
      console.log(error)
    }
  },[MONTHS])
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
