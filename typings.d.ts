interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Technology extends SanityBody {
  _type: 'skill';
  progress: number;
  skillImage: Image;
  skillTitle: string;
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  aboutInformation: string;
  email: string;
  heroImage: Image;
  name: string;
  profilePic: Image;
  role: string;
}

export interface Experience extends SanityBody {
  _type: 'experience';
  company: string;
  companyImage: Image;
  jobTitle: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  points: string[];
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: 'skill';
  progress: number;
  skillImage: Image;
  skillTitle: string;
}

export interface Project extends SanityBody {
  _type: 'project';
  linkToBuild: string;
  projectImage: Image;
  projectTitle: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}
