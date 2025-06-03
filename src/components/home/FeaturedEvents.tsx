import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { events } from '../../data/mockData';

const FeaturedEvents: React.FC = () => {
  // Just show the next two upcoming events
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Featured Events</h2>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {upcomingEvents.map((event) => (
          <Card 
            key={event.id} 
            className="h-full" 
            hoverable
          >
            <div className="h-40 w-full overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Users size={16} className="mr-2" />
                  <span>{event.attendees.length} attending</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex -space-x-2">
                {event.attendees.slice(0, 3).map((attendeeId, index) => {
                  const attendee = { id: attendeeId, avatar: `https://images.pexels.com/photos/${1000000 + parseInt(attendeeId)}/pexels-photo-${1000000 + parseInt(attendeeId)}.jpeg?auto=compress&cs=tinysrgb&w=100` };
                  return (
                    <img
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                      src={attendee.avatar}
                      alt={`Attendee ${attendeeId}`}
                    />
                  );
                })}
                {event.attendees.length > 3 && (
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800 text-xs font-medium text-gray-800 dark:text-gray-200">
                    +{event.attendees.length - 3}
                  </div>
                )}
              </div>
              <Button size="sm">RSVP</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;