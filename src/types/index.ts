export interface DailyEntry {
  id: string;
  date: string;
  yesterday: string;
  today: string;
  blockers: string;
  commits: GitHubCommit[];
  aiSummary?: string;
}

export interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  repo: string;
}

export interface UserProfile {
  githubToken?: string;
  githubUsername?: string;
  geminiApiKey?: string;
}
