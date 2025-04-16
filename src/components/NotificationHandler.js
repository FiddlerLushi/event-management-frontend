import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('/', {
  autoConnect: false, // prevent auto-connecting before authentication
  withCredentials: true
});

const NotificationHandler = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!userId) return;

    // Connect to socket server
    socket.connect();

    // Emit user connection (optional: use for joining rooms)
    socket.emit('join', { userId });

    // Listen for new notifications from server
    socket.on('notification', (data) => {
      setNotifications((prev) => [...prev, data]);
    });

    // Clean up when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [userId]);

  return (
    <div className="notification-handler">
      <h4>Notifications:</h4>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationHandler;
