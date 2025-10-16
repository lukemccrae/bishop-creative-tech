import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function MeetupCards() {
  const organizers = [
    { 
      id: 1, 
      name: 'Luke McCrae', 
      image: 'https://i.imgur.com/iOtuPi3.jpeg'
    }
  ];

  const members = [
    { id: 1, image: 'https://i.pravatar.cc/150?img=33' },
    { id: 2, initials: 'J', color: '#ec4899' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto space-y-4">
        
        {/* Organizers Card */}
        <Card className="shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Organizers</h3>
          <div className="space-y-3">
            {organizers.map((organizer) => (
              <div key={organizer.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar 
                    image={organizer.image}
                    shape="circle"
                    size="large"
                  />
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
              Members <span className="text-gray-500 font-normal">266</span>
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
                    style={{ backgroundColor: member.color, color: 'white' }}
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