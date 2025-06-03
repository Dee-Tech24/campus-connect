import { User, Event, StudyGroup, SkillOffer } from '../types';

// Mock Users
export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    major: 'Computer Science',
    year: 'Junior',
    bio: 'Passionate about AI and machine learning. Looking for project collaborators!',
    skills: ['Python', 'Machine Learning', 'React'],
    interests: ['Hackathons', 'Chess Club', 'Data Science'],
    connections: ['2', '3']
  },
  {
    id: '2',
    name: 'Jamie Smith',
    email: 'jamie.smith@university.edu',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600',
    major: 'Biology',
    year: 'Senior',
    bio: 'Pre-med student interested in research opportunities and study groups.',
    skills: ['Lab Research', 'Scientific Writing', 'Statistics'],
    interests: ['Medical Research', 'Volunteering', 'Tennis'],
    connections: ['1', '4']
  },
  {
    id: '3',
    name: 'Taylor Nguyen',
    email: 'taylor.nguyen@university.edu',
    avatar: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=600',
    major: 'Business Administration',
    year: 'Sophomore',
    bio: 'Entrepreneurship enthusiast looking to connect with like-minded students.',
    skills: ['Marketing', 'Public Speaking', 'Project Management'],
    interests: ['Startups', 'Business Club', 'Basketball'],
    connections: ['1', '5']
  },
  {
    id: '4',
    name: 'Jordan Lee',
    email: 'jordan.lee@university.edu',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    major: 'Graphic Design',
    year: 'Senior',
    bio: 'Creative designer looking for collaboration on multimedia projects.',
    skills: ['Adobe Suite', 'UI/UX Design', 'Illustration'],
    interests: ['Art Shows', 'Photography', 'Film'],
    connections: ['2', '6']
  },
  {
    id: '5',
    name: 'Morgan Rivera',
    email: 'morgan.rivera@university.edu',
    avatar: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600',
    major: 'Environmental Science',
    year: 'Junior',
    bio: 'Passionate about sustainability and climate action. Looking for research partners.',
    skills: ['Data Analysis', 'Field Research', 'Grant Writing'],
    interests: ['Sustainability Club', 'Hiking', 'Community Gardening'],
    connections: ['3', '6']
  },
  {
    id: '6',
    name: 'Casey Williams',
    email: 'casey.williams@university.edu',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    major: 'English Literature',
    year: 'Sophomore',
    bio: 'Writer and editor looking for study groups and literary discussions.',
    skills: ['Creative Writing', 'Editing', 'Literary Analysis'],
    interests: ['Book Club', 'Poetry Slams', 'Theater'],
    connections: ['4', '5']
  }
];

// Mock Events
export const events: Event[] = [
  {
    id: '1',
    title: 'Tech Hackathon 2025',
    description: 'A 48-hour coding competition to build innovative solutions for campus problems.',
    date: '2025-03-15',
    time: '9:00 AM - 6:00 PM',
    location: 'Engineering Building, Room 101',
    organizer: '1',
    attendees: ['1', '3', '4'],
    tags: ['Technology', 'Competition', 'Innovation'],
    image: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    title: 'Biology Study Group',
    description: 'Weekly study session for BIO301: Molecular Biology.',
    date: '2025-02-20',
    time: '4:00 PM - 6:00 PM',
    location: 'Science Center, Room 205',
    organizer: '2',
    attendees: ['2', '5'],
    tags: ['Biology', 'Study Group', 'Academic'],
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    title: 'Startup Pitch Night',
    description: 'Present your business ideas to peers and potential investors.',
    date: '2025-03-10',
    time: '7:00 PM - 9:00 PM',
    location: 'Business School Auditorium',
    organizer: '3',
    attendees: ['1', '3', '5'],
    tags: ['Business', 'Entrepreneurship', 'Networking'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    title: 'Design Portfolio Workshop',
    description: 'Learn how to build and present a compelling design portfolio.',
    date: '2025-02-28',
    time: '3:00 PM - 5:00 PM',
    location: 'Arts Building, Studio 3',
    organizer: '4',
    attendees: ['4', '6'],
    tags: ['Design', 'Portfolio', 'Career'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Mock Study Groups
export const studyGroups: StudyGroup[] = [
  {
    id: '1',
    name: 'Algorithms Study Group',
    course: 'CS301: Advanced Algorithms',
    description: 'Weekly meetup to discuss algorithm problems and solutions.',
    members: ['1', '3'],
    meetingTime: 'Tuesdays, 4:00 PM - 6:00 PM',
    location: 'Computer Science Building, Room 203',
    capacity: 8
  },
  {
    id: '2',
    name: 'Organic Chemistry Group',
    course: 'CHEM245: Organic Chemistry II',
    description: 'Preparing for midterms and final projects.',
    members: ['2', '5'],
    meetingTime: 'Mondays and Thursdays, 5:00 PM - 7:00 PM',
    location: 'Science Center, Lab 110',
    capacity: 6
  },
  {
    id: '3',
    name: 'Marketing Strategy Team',
    course: 'BUS320: Marketing Management',
    description: 'Collaborative work on semester-long marketing projects.',
    members: ['3', '6'],
    meetingTime: 'Wednesdays, 3:00 PM - 5:00 PM',
    location: 'Business School, Room 405',
    capacity: 5
  }
];

// Mock Skill Offers
export const skillOffers: SkillOffer[] = [
  {
    id: '1',
    userId: '1',
    skill: 'Python Programming',
    description: 'Can help with Python basics, data structures, and simple ML applications.',
    availability: 'Weekends and Thursday evenings',
    rating: 4.8
  },
  {
    id: '2',
    userId: '2',
    skill: 'Biology Tutoring',
    description: 'Experienced in explaining complex biological concepts and lab techniques.',
    availability: 'Tuesday and Friday afternoons',
    rating: 4.5
  },
  {
    id: '3',
    userId: '4',
    skill: 'Adobe Illustrator',
    description: 'Can teach illustration basics and advanced techniques.',
    availability: 'Monday evenings and weekends',
    rating: 4.9
  },
  {
    id: '4',
    userId: '6',
    skill: 'Essay Writing & Editing',
    description: 'Help with structuring arguments, grammar, and style for academic papers.',
    availability: 'Flexible schedule, by appointment',
    rating: 4.7
  }
];

// Connection suggestions based on matching algorithms
export const connectionSuggestions = [
  { userId: '1', suggestions: ['5', '6'] },
  { userId: '2', suggestions: ['3', '6'] },
  { userId: '3', suggestions: ['2', '4'] },
  { userId: '4', suggestions: ['1', '5'] },
  { userId: '5', suggestions: ['1', '4'] },
  { userId: '6', suggestions: ['1', '2'] }
];