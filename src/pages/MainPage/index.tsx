import { useState } from "react";
import { Card } from "../../components/card";
import data from "../../data.json";
import "./index.scss";

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

enum Time {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}

const MainPage = () => {
  const [time, setTime] = useState<Time>(Time.Daily);

  const cards = (data as JsonData[]).map((item, index) => (
    <Card
      key={index}
      title={item.title}
      bodyContent={`${item.timeframes[time].current}hrs`}
      footerContent={`${item.timeframes[time].previous}hrs`}
      type={item.title.toLowerCase()}
    />
  ));

  const timeButtons = Object.values(Time).map((item, index) => (
    <button
      key={index}
      className={time === item ? "btn active" : ""}
      onClick={() => setTime(item)}
    >
      {item}
    </button>
  ));

  return (
    <main className="main-page">
      <section className="main-grid">
        <div className="header-container">
          <section className="main-header">
            <h1>Time Tracking</h1>
          </section>
          <section className="time-buttons">{timeButtons}</section>
        </div>
        {cards}
      </section>
    </main>
  );
};

export default MainPage;
