import { GitHubCommit } from '../types';

export const fetchGitHubCommits = async (
  username: string,
  token: string,
  days: number = 1
): Promise<GitHubCommit[]> => {
  if (!username || !token) return [];

  try {
    const date = new Date();
    date.setDate(date.getDate() - days);
    const since = date.toISOString();

    const response = await fetch(
      `https://api.github.com/search/commits?q=author:${username}+committer-date:>=${since}&sort=committer-date&order=desc`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.cloak-preview',
        },
      }
    );

    if (!response.ok) {
      console.error('GitHub API error:', await response.text());
      return [];
    }

    const data = await response.json();
    
    return data.items.map((item: any) => ({
      sha: item.sha,
      message: item.commit.message,
      date: item.commit.committer.date,
      repo: item.repository.full_name,
    }));
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};
