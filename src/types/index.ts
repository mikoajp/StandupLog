// Global type definitions for DevLog app
export interface User {
  id: string;
  email: string;
  githubUsername?: string;
  displayName?: string;
}

export interface StandupEntry {
  id: string;
  userId: string;
  date: string;
  yesterday: string;
  today: string;
  blockers: string;
  commits?: GitHubCommit[];
  createdAt: Date;
  updatedAt: Date;
}

export interface GitHubCommit {
  sha: string;
  message: string;
  author: string;
  date: string;
  repo: string;
  url: string;
}

export interface AISummary {
  id: string;
  userId: string;
  type: 'daily' | 'weekly';
  content: string;
  startDate: string;
  endDate: string;
  generatedAt: Date;
}
