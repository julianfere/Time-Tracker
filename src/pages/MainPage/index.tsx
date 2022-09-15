import { useState } from "react";
import { Card } from "../../components/card";
import data from "../../data.json";
import { capitalize } from "../../helpers/capitalizer";
import { footerHelper } from "../../helpers/footerHelper";
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
  const [name, setName] = useState("Fere");
  const [time, setTime] = useState<Time>(Time.Daily);

  const cards = (data as JsonData[]).map((item, index) => (
    <Card
      key={index}
      title={item.title}
      bodyContent={`${item.timeframes[time].current}hrs`}
      footerContent={footerHelper(time, item.timeframes[time].previous)}
      type={item.title.toLowerCase()}
    />
  ));

  const timeButtons = Object.values(Time).map((item, index) => (
    <button
      key={index}
      className={`btn ${time === item ? "btn-active" : ""}`}
      onClick={() => setTime(item)}
    >
      {capitalize(item)}
    </button>
  ));

  return (
    <main className="main-page">
      <section className="main-grid">
        <div className="header-container">
          <div className="main-grid__header">
            <p>Report for </p>
            <h1>{name}</h1>
          </div>
          <section className="main-header">
            <section className="time-buttons">{timeButtons}</section>
          </section>
        </div>
        {cards}
      </section>
    </main>
  );
};

export default MainPage;
