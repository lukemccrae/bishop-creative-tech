import React from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function MeetupCards() {
  const organizers = [
    {
      id: 1,
      name: "Luke McCrae",
      image: "https://i.imgur.com/iOtuPi3.jpeg",
    },
  ];

  const nextEvent = {
    id: 1,
    title: "Meet and greet",
    date: "2025-10-24T18:00:00",
    location: "Mountain Rambler Brewery",
  };

  const members = [
    { id: 1, image: "https://i.imgur.com/iOtuPi3.jpeg" },
    { id: 2, image: "https://i.imgur.com/ovtHFmM.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-md mx-auto mb-6">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow">
          <img
            src={"https://i.imgur.com/Zryxwe8.jpeg"}
            alt="Meetup header"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />          
          <div className="relative z-10 flex items-end h-full p-6">
            <div className="text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">
                Bishop Creative Tech
              </h1>
              <p className="mt-1 text-sm sm:text-base opacity-90 drop-shadow-lg">
                Meetups, workshops, and networking — join the community.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-md mx-auto space-y-4">
        {/* Next Event Card */}
        <Card className="shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Next Event</h3>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800">
              {nextEvent.title}
            </h4>
            <p className="text-gray-600">
              <strong>Date:</strong>{" "}
              {new Date(nextEvent.date).toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> {nextEvent.location}
            </p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 font-medium">
              RSVP
            </button>
          </div>
        </Card>

        {/* Organizers Card */}
        <Card className="shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Organizers</h3>
          <div className="space-y-3">
            {organizers.map((organizer) => (
              <div
                key={organizer.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Avatar image={organizer.image} shape="circle" size="large" />
                  <span className="text-base font-medium text-gray-900">
                    {organizer.name}
                  </span>
                </div>
                <button className="flex items-center gap-1 text-indigo-600 font-medium text-sm hover:text-indigo-700">
                  <i className="pi pi-comment text-sm"></i>
                  Message
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Members Card */}
        <Card className="shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              Members{" "}
              <span className="text-gray-500 font-normal">
                {members.length}
              </span>
            </h3>
            <button className="text-indigo-600 font-medium text-sm hover:text-indigo-700">
              See all
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {members.map((member) => (
              <div key={member.id}>
                {member.image ? (
                  <Avatar
                    image={member.image}
                    shape="circle"
                    size="xlarge"
                    className="border-2 border-white shadow-sm"
                  />
                ) : (
                  <Avatar
                    label={member.initials}
                    style={{ backgroundColor: member.color, color: "white" }}
                    shape="circle"
                    size="xlarge"
                    className="border-2 border-white shadow-sm font-semibold"
                  />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
