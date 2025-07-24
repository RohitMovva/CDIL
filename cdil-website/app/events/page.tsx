"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../components/button";

interface Event {
  id: string;
  date: Date;
  title: string;
  location: string;
  address: string;
  room: string;
  startTime: string;
  endTime: string;
  description: string;
}

export default function EventsPage() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);

  useEffect(() => {
    const generateUpcomingEvents = (): void => {
      const events: Event[] = [];
      const today = new Date();
      const currentMonth = today.getMonth();
      const currentYear = today.getFullYear();

      // Generate events for the next 6 months
      for (let monthOffset = 0; monthOffset < 6; monthOffset++) {
        const targetMonth = currentMonth + monthOffset;
        const targetYear = currentYear + Math.floor(targetMonth / 12);
        const normalizedMonth = targetMonth % 12;

        // Find second Sunday
        const secondSunday = getSecondSunday(normalizedMonth, targetYear);
        // Find third Sunday
        const thirdSunday = getThirdSunday(normalizedMonth, targetYear);

        // Only include events that haven't passed yet
        if (secondSunday >= today) {
          events.push({
            id: `${targetYear}-${normalizedMonth}-2nd`,
            date: secondSunday,
            title: "Digital Literacy Workshop",
            location: "Lafayette Public Library",
            address: "775 W Baseline Rd, Lafayette, CO 80026",
            room: "Community Room A",
            startTime: "2:00 PM",
            endTime: "4:00 PM",
            description:
              "Learn essential computer skills in a supportive environment. Perfect for beginners!",
          });
        }

        if (thirdSunday >= today) {
          events.push({
            id: `${targetYear}-${normalizedMonth}-3rd`,
            date: thirdSunday,
            title: "Tech Help & Q&A Session",
            location: "Sister Carmen Community Center",
            address: "2825 Lafayette Dr, Boulder, CO 80305",
            room: "Meeting Room B",
            startTime: "1:30 PM",
            endTime: "3:30 PM",
            description:
              "Bring your questions! Our volunteers will help with smartphones, tablets, and computers.",
          });
        }
      }

      // Sort events by date
      events.sort((a, b) => a.date.getTime() - b.date.getTime());
      setUpcomingEvents(events);
    };

    generateUpcomingEvents();
  }, []);

  const getSecondSunday = (month: number, year: number): Date => {
    const firstDay = new Date(year, month, 1);
    const firstSunday = new Date(firstDay);
    firstSunday.setDate(1 + ((7 - firstDay.getDay()) % 7));
    const secondSunday = new Date(firstSunday);
    secondSunday.setDate(firstSunday.getDate() + 7);
    return secondSunday;
  };

  const getThirdSunday = (month: number, year: number): Date => {
    const firstDay = new Date(year, month, 1);
    const firstSunday = new Date(firstDay);
    firstSunday.setDate(1 + ((7 - firstDay.getDay()) % 7));
    const thirdSunday = new Date(firstSunday);
    thirdSunday.setDate(firstSunday.getDate() + 14);
    return thirdSunday;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatShortDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid gap-10">
          <h1 className="text-7xl">Join us for free workshops</h1>
          <h2 className="text-xl">
            Every second and third Sunday of the month, we host hands-on digital
            literacy workshops in partnership with local community
            organizations.
          </h2>
        </div>
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="Workshop in session"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="grid gap-10 place-content-center place-items-center text-center">
        <h1 className="text-5xl">What to expect</h1>
        <h2 className="text-xl max-w-4xl">
          Our workshops are designed to be welcoming and supportive for learners
          of all levels. Come as you are—no prior experience needed!
        </h2>
        <div className="grid grid-cols-3 gap-10 max-w-6xl">
          <div className="grid gap-5 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-semibold">Small Groups</h3>
            <p className="text-lg">
              We keep our workshops small to ensure everyone gets personalized
              attention and can learn at their own pace.
            </p>
          </div>
          <div className="grid gap-5 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-semibold">Bring Your Device</h3>
            <p className="text-lg">
              Bring your own smartphone, tablet, or laptop to practice on the
              device you'll actually use at home.
            </p>
          </div>
          <div className="grid gap-5 p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-semibold">Patient Instructors</h3>
            <p className="text-lg">
              Our student volunteers are trained to be patient teachers who
              understand that everyone learns differently.
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="grid gap-15">
        <div className="grid gap-10 place-content-center place-items-center text-center">
          <h1 className="text-5xl">Upcoming events</h1>
          <h2 className="text-xl">
            All events are free and open to the public. No registration
            required—just show up!
          </h2>
        </div>

        <div className="grid gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="grid grid-cols-4 gap-8 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Date */}
              <div className="grid gap-2 place-items-center">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl grid place-items-center">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-blue-600 uppercase">
                      {event.date.toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                    <div className="text-2xl font-bold text-blue-800">
                      {event.date.getDate()}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {event.date.toLocaleDateString("en-US", { weekday: "long" })}
                </div>
              </div>

              {/* Event Details */}
              <div className="col-span-2 grid gap-3">
                <h3 className="text-2xl font-semibold">{event.title}</h3>
                <p className="text-lg text-gray-600">{event.description}</p>
                <div className="flex gap-6 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Time:</span>
                    <span>
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="grid gap-2">
                <h4 className="font-semibold text-lg">{event.location}</h4>
                <p className="text-sm text-gray-600">{event.address}</p>
                <p className="text-sm text-gray-600">{event.room}</p>
                <div className="mt-4">
                  <Button
                    text="Get directions"
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      event.address
                    )}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid gap-10">
          <h1 className="text-5xl">Frequently asked questions</h1>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Do I need to register?
              </h3>
              <p className="text-lg text-gray-700">
                No registration required! Just show up at any of our scheduled
                events. We operate on a first-come, first-served basis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What should I bring?
              </h3>
              <p className="text-lg text-gray-700">
                Bring any device you'd like help with—smartphone, tablet, or
                laptop. If you don't have a device, we can provide one during
                the workshop.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Is there really no cost?
              </h3>
              <p className="text-lg text-gray-700">
                Completely free! Our mission is to make digital literacy
                accessible to everyone, regardless of financial situation.
              </p>
            </div>
          </div>
        </div>
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="People learning together"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="grid gap-10 place-content-center place-items-center text-center bg-blue-50 p-16 rounded-3xl">
        <h1 className="text-5xl">Can't make it to a workshop?</h1>
        <h2 className="text-xl max-w-3xl">
          We also offer one-on-one tutoring sessions and can work with
          organizations to bring workshops directly to your community.
        </h2>
        <div className="flex gap-10">
          <Button text="Request private tutoring" href="/contact" />
          <Button text="Partner with us" href="/partners" />
        </div>
      </div>
    </>
  );
}
