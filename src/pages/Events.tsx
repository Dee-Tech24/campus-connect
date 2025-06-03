import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Calendar, MapPin, Users, Filter, Plus } from 'lucide-react';
import Card, { CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { events } from '../data/mockData';

const Events: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Events</h1>
          <div className="flex space-x-2">
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Button className="flex items-center">
              <Plus size={16} className="mr-2" />
              Create Event
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} hoverable className="flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                  <Badge variant="primary">{event.tags[0]}</Badge>
                </div>
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
              <CardFooter className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {event.attendees.slice(0, 3).map((attendeeId, index) => {
                    const attendeeAvatar = `https://images.pexels.com/photos/${1000000 + parseInt(attendeeId)}/pexels-photo-${1000000 + parseInt(attendeeId)}.jpeg?auto=compress&cs=tinysrgb&w=100`;
                    return (
                      <img
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
                        src={attendeeAvatar}
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
                <Button>RSVP</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Events;