import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { Box } from '@mui/material';

import { myDexieDB } from './db/db';
import { DateFormat } from './utils/enums';
import { arrayOfEvents } from './db/stubbedEvents'

import './App.css';
import WeekTable from './components/TimeTable/WeekTable';
import CalendarButtons from './components/WeekButtons/CalendarButtons';

function App() {
  const [dateFromCalendar, setDateFromCalendar] = useState(moment().format(DateFormat.LONG_DATE_FORMAT_INPUT));

  useEffect(() => {
    myDexieDB.table('events').clear();
    myDexieDB.table('events').bulkAdd(arrayOfEvents);
  }, []);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const [year, month, date] = value.split('-');
    const momentDate = moment().year(Number(year)).month(Number(month) - 1).date(Number(date));
    setDateFromCalendar(momentDate.toLocaleString());
  }

  const handeButtonsClick = (action: 'prev' | 'next') => {
    switch (action) {
      case 'prev': {
        setDateFromCalendar(moment(dateFromCalendar).subtract(7, 'days').format(DateFormat.LONG_DATE_FORMAT_INPUT));

        break;
      }
      case 'next': {
        setDateFromCalendar(moment(dateFromCalendar).add(7, 'days').format(DateFormat.LONG_DATE_FORMAT_INPUT));

        break;
      }

      default: {
        setDateFromCalendar(moment(dateFromCalendar).format(DateFormat.LONG_DATE_FORMAT_INPUT));
      }
    }
  }

  return (
    <div className="App">
      <Box sx={{ display: 'flex', margin: '30px 0' }}>
        <CalendarButtons onButtonClick={handeButtonsClick} />
        <input id='date-input' onChange={(e) => handleChange(e)} title='calendar' value={moment(dateFromCalendar).format(DateFormat.LONG_DATE_FORMAT_INPUT)} placeholder='' type="date" />
      </Box>

      <WeekTable startDate={dateFromCalendar} />
    </div>
  );
}

export default App;
