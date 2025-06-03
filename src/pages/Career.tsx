import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Briefcase, Building2, MapPin, DollarSign, Filter } from 'lucide-react';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const mockJobs = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Internship',
    salary: '$30-40/hr',
    description: 'Looking for a passionate software engineering intern to join our team for the summer...',
    requirements: ['React', 'TypeScript', 'Node.js'],
    posted: '2 days ago'
  },
  {
    id: '2',
    title: 'Research Assistant',
    company: 'BioTech Labs',
    location: 'Boston, MA',
    type: 'Part-time',
    salary: '$25-35/hr',
    description: 'Assist in conducting research in molecular biology and data analysis...',
    requirements: ['Lab Experience', 'Data Analysis', 'Research'],
    posted: '1 week ago'
  },
  {
    id: '3',
    title: 'Marketing Coordinator',
    company: 'Creative Agency',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$50-60k/year',
    description: 'Join our creative team to help coordinate marketing campaigns...',
    requirements: ['Social Media', 'Content Creation', 'Analytics'],
    posted: '3 days ago'
  }
];

const Career: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Career Opportunities</h1>
          <Button variant="outline" className="flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {mockJobs.map((job) => (
              <Card key={job.id} hoverable>
                <CardContent>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                      <div className="flex items-center mt-1 text-gray-600 dark:text-gray-300">
                        <Building2 size={16} className="mr-1" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    <Badge variant={
                      job.type === 'Internship' ? 'primary' :
                      job.type === 'Part-time' ? 'secondary' : 'success'
                    }>
                      {job.type}
                    </Badge>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={16} className="mr-1" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <DollarSign size={16} className="mr-1" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{job.description}</p>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, index) => (
                        <Badge key={index} variant="default">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Posted {job.posted}</span>
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase size={16} className="mr-2" />
                    Resume Builder
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building2 size={16} className="mr-2" />
                    Company Directory
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin size={16} className="mr-2" />
                    Career Fairs
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Job Alerts</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Get notified when new positions match your preferences
                </p>
                <Button className="w-full">Set Up Alerts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Career;