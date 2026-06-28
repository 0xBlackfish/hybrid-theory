"use client";

import { useEffect, useState } from "react";

export function LockDate() {
  const [date, setDate] = useState("");
  useEffect(() => {
    const update = () => setDate(new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return <div className="htv-lock-date">{date || " "}</div>;
}

function formatTime(d: Date) {
  const h = d.getHours() % 12 || 12;
  const m = d.getMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

export function LockTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(formatTime(new Date()));
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return <>{time || " "}</>;
}
