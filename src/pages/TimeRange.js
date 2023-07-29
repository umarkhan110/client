import React, { useState } from 'react';
import Slider from 'react-slider';

const TimeRange = () => {
  const [selectedTime, setSelectedTime] = useState(540); // Default time in minutes (9:00 AM)

  const convertTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    const formattedMins = mins.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMins} ${period}`;
  };

  const handleChange = (value) => {
    setSelectedTime(value);
  };

  return (
    <div id="time-range">
      <p>Time: <span className="slider-time">{convertTime(selectedTime)}</span></p>
      <div className="sliders_step1">
        <Slider
          min={0}
          max={1440}
          step={15}
          defaultValue={selectedTime}
          onChange={handleChange}
          withTracks
          renderThumb={(props) => <div {...props} className="slider-thumb">{convertTime(selectedTime)}</div>}
        />
      </div>
      <br />
      <br />
      <input
        name="formrange"
        id="formrange"
        type="text"
        value={convertTime(selectedTime)}
        readOnly
      />
    </div>
  );
};

export default TimeRange;
