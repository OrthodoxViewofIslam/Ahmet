import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// ✅ Helper: Parse date string without UTC offset
function parseLocalDate(isoDateStr) {
  const [year, month, day] = isoDateStr.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

export default function CalendarReact({ events = [] }) {
  // ✅ Match posts with this date (as local date)
  function getEventsByDate(date) {
    return events.filter(event => {
      const eventDate = parseLocalDate(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  }

  // ✅ Add 📘 icon with saint name tooltip
  function tileContent({ date, view }) {
    if (view !== 'month') return null;

    const matches = getEventsByDate(date);

    if (matches.length > 0) {
      const titles = matches.map((event) => event.title).join(', ');
      return (
        <div
          style={{
            fontSize: '0.6rem',
            color: '#2b6cb0',
            cursor: 'pointer',
          }}
          title={titles} // Tooltip on hover
        >
          📘
        </div>
      );
    }

    return null;
  }

  // ✅ Click takes you to the first saint post on that day
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