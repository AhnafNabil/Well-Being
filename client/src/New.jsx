import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import styled from "styled-components";

const New = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("12:00");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <AppointmentContainer>
      <h3>Make an appointment</h3>
      <DateTimePickerContainer>
        <DatePickerWrapper>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            placeholderText="Select date"
          />
        </DatePickerWrapper>
        <TimePickerWrapper>
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            disableClock
            clearIcon={null}
          />
        </TimePickerWrapper>
      </DateTimePickerContainer>
    </AppointmentContainer>
  );
};

export default New;

// Styles
const AppointmentContainer = styled.div`
  background-color: #b0e0e6;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 20px;

  h3 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #006666;
  }
`;

const DateTimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
// background-color: transparent;
const DatePickerWrapper = styled.div`
  .react-datepicker__input-container input {
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    outline: none;
    
  }

  .react-datepicker__input-container input::placeholder {
    color: #888;
  }

  .react-datepicker__input-container input:hover {
    background-color: #e5e5e5;
  }

  .react-datepicker__input-container input:focus {
    background-color: #f9f9f9;
  }

  .react-datepicker__triangle {
    border-bottom-color: #f0f0f0;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name,
  .react-datepicker__time,
  .react-time-picker__input-group__divider {
    color: #333;
  }

  .react-datepicker__day:hover,
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--today {
    background-color: #007bff;
    color: #fff;
  }
`;

const TimePickerWrapper = styled.div`
  .react-time-picker__input-group__input {
    padding: 12px;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .react-time-picker__input-group__input::placeholder {
    color: #888;
  }

  .react-time-picker__input-group__input:hover {
    background-color: #e5e5e5;
  }

  .react-time-picker__input-group__input:focus {
    background-color: #f9f9f9;
  }

  .react-time-picker__input-group__divider {
    color: #888;
  }

  .react-time-picker__clear-button {
    display: none;
  }
`;
