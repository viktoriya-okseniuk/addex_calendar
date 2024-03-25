import "../assets/styles/calendar.css";
import { getDays } from "../utils/calendar.ts";

export const Calendar = () => {
  const longMonth = new Date().toLocaleString("en-EN", { month: "long" });
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const daysCount = [...Array(getDays(year, month)).keys()];

  const date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  [...Array(firstDay).keys()].forEach((el) => daysCount.unshift(-1));
  return (
    <div className="calendar">
      <div className="calendar__nav">
        <div className="calendar__nav__panel">
          <div>
            <button>up</button>
            <button>down</button>
          </div>
          <div>
            {longMonth}, {year}
          </div>
        </div>
        <div className="calendar__nav__days">
          <p>Sunday</p>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
        </div>
      </div>
      <div className="calendar__board">
        {daysCount.map((el) => {
          if (el.toString() === "-1")
            return (
              <div
                last-month="true"
                key={Math.random(new Date()) + el}
                className="calendar__board__card"
              ></div>
            );
          return (
            <div
              key={Math.random(new Date()) + el}
              className="calendar__board__card"
            >
              <p className="calendar__board__card__day">
                {(el + 1).toString()}
              </p>
              <button className="calendar__board__card__add-btn">+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
