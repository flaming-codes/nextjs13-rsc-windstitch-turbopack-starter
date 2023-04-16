import "server-only";

export const fetchGithubRepos = async (slug: string) => {
  return fetch(`https://api.github.com/users/${slug}/repos`, {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return [];
  });
};
