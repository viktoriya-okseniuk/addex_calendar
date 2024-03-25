import '../assets/styles/calendar.css'

export const Calendar = () => {
  const daysCount = 30
  return (
    <div className="calendar">
      <div className="calendar__nav">
        <div className="calendar__nav__panel">
          <div>
            <button>up</button>
            <button>down</button>
          </div>
          <div>Month</div>
          <div>
            <button>week</button>
            <button>month</button>
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
        {[...Array(daysCount).keys()].map(el => (
          <div className="calendar__board__card">
            {el.toString()}
          </div>
        ))}
      </div>
    </div>
  )
}