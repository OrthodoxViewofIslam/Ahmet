import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarReact({ events = [] }) {
  function getEventsByDate(date) {
    return events.filter(event => {
      const d = new Date(event.date);
      return d.toDateString() === date.toDateString();
    });
  }

  function tileContent({ date, view }) {
    if (view !== 'month') return null;
    const matches = getEventsByDate(date);
    return matches.length > 0
      ? <div style={{ fontSize: '0.6rem', color: '#2b6cb0' }}>📘</div>
      : null;
  }

  function onClickDay(date) {
    const match = getEventsByDate(date)[0];
    if (match) {
      window.location.href = match.url;
    }
  }

  return (
    <div className="calendar-container">
      <Calendar
        tileContent={tileContent}
        onClickDay={onClickDay}
      />
    </div>
  );
}