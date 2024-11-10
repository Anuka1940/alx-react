// Notifications.js
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        style={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="Close icon" style={{ width: '10px', height: '10px' }} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

