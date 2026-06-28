"use client";

import { useEffect, useState } from "react";

export function LockDate() {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));
  }, []);
  return <div className="htv-lock-date">{date || " "}</div>;
}
