// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  major: string;
  year: string;
  bio: string;
  skills: string[];
  interests: string[];
  connections: string[];
}

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  attendees: string[];
  tags: string[];
  image?: string;
}

// Study group types
export interface StudyGroup {
  id: string;
  name: string;
  course: string;
  description: string;
  members: string[];
  meetingTime: string;
  location: string;
  capacity: number;
}

// Skill sharing types
export interface SkillOffer {
  id: string;
  userId: string;
  skill: string;
  description: string;
  availability: string;
  rating: number;
}