import "./index.scss";
import { Card } from "../../components/card";
import data from "../../data.json";

type JsonData = {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
};

const time = data as JsonData[];

const MainPage = () => {
  const cards = time.map((item, index) => (
    <Card
      key={index}
      title={item.title}
      bodyContent={`${item.timeframes.daily.current}hrs`}
      footerContent={`${item.timeframes.daily.previous}hrs`}
      type={item.title.toLowerCase()}
    />
  ));

  return <div className="main">{cards}</div>;
};

export default MainPage;
