import moment from 'moment';
import React, { useState } from 'react';
import { Box } from '@mui/material';

import WeekTable from './components/WeekTable';
import './App.css';

function App() {
  const [dateFromCalendar, setDateFromCalendar] = useState(moment().format('YYYY-MM-DD'));

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const [year, month, date] = value.split('-');
    const momentDate = moment().year(Number(year)).month(Number(month) - 1).date(Number(date));
    setDateFromCalendar(momentDate.toLocaleString());

  }
  return (
    <div className="App">
      <Box>
        <label htmlFor="date-input">Select a date: </label>
        <input id='date-input' onChange={(e) => handleChange(e)} title='calendar' value={moment(dateFromCalendar).format('YYYY-MM-DD')} placeholder='' type="date" />
      </Box>
      <WeekTable startDate={dateFromCalendar} />
    </div>
  );
}

export default App;
