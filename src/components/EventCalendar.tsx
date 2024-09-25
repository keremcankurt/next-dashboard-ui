"use client";

import { eventsData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounde-md">
      <Calendar onChange={onChange} value={value} locale="tr" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 h-[330px] overflow-hidden">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">
                {event.startTime} - {event.endTime}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
