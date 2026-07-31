/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";

interface UrgencyHeaderProps {
  initialMinutes: number;
}

export default function UrgencyHeader({ initialMinutes }: UrgencyHeaderProps) {
  // Let's keep the remaining seconds in state
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);

  // Restart countdown if the initialMinutes prop changes (e.g. from the customizer)
  useEffect(() => {
    setSecondsLeft(initialMinutes * 60);
  }, [initialMinutes]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      // Loop or reset to keep the urgency active in a demo, or stay at 00:00:01
      setSecondsLeft(initialMinutes * 60);
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, initialMinutes]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const formattedHrs = hrs > 0 ? `${String(hrs).padStart(2, "0")}:` : "";
    const formattedMins = String(mins).padStart(2, "0");
    const formattedSecs = String(secs).padStart(2, "0");

    return `${formattedHrs}${formattedMins}:${formattedSecs}`;
  };

  return (
    <div
      id="urgency-top-bar"
      className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 shadow-md text-center text-xs md:text-sm font-bold tracking-wider select-none flex items-center justify-center gap-2 transition-all"
    >
      <span className="uppercase">
        OFERTA VÁLIDA SOMENTE HOJE •{" "}
        <span className="font-mono bg-black/30 px-2 py-0.5 rounded text-white font-black tracking-widest inline-block min-w-[70px]">
          {formatTime(secondsLeft)}
        </span>
      </span>
    </div>
  );
}
