import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function CalendarReact() {
  return (
    <div style={{ padding: '2rem' }}>
      <div
        data-tooltip-id="test-tooltip"
        data-tooltip-content="✅ Tooltip is working!"
        style={{
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          cursor: 'pointer',
          display: 'inline-block',
          borderRadius: '6px',
        }}
      >
        Hover over this box
      </div>

      <Tooltip id="test-tooltip" />
    </div>
  );
}