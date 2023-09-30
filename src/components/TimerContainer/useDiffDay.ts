import { useEffect, useState } from 'react';

export default function useDiffDay(deadlineDay: string) {
  const [date, setDate] = useState(diffDay(deadlineDay));

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(diffDay(deadlineDay));
    }, 1000);
    return () => clearInterval(timer);
  }, [deadlineDay]);

  return date;
}

function diffDay(deadLine: string) {
  const masTime = new Date(deadLine);
  const todayTime = new Date();

  const diff = new Date(masTime.getTime() - todayTime.getTime()).getTime();

  const day = String(Math.floor(diff / (1000 * 3600 * 24))).padStart(2, '0');
  const hour = String(Math.floor((diff / (1000 * 3600)) % 24)).padStart(2, '0');
  const minute = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const second = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  return { day, hour, min: minute, sec: second };
}
