import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Import 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'; // Import styles (you might need to adjust the path)

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>My Date Picker</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy" // Specify date format
      />
      {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default MyDatePicker;
