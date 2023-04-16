import { fetchGithubRepos } from "@/modules/submission/fetchers/github-repos";
import { GithubUserForm } from "@/modules/submission/github-user.client";
import { w } from "windstitch";

const Base = w.div(`
  flex flex-col gap-8 p-6 overflow-x-auto
`);

type Props = any;

export default async function InteractiveRscPage(props: Props) {
  const { params } = props;

  const name = params.slug;
  const res = name ? await fetchGithubRepos(name) : undefined;

  return (
    <Base>
      <GithubUserForm />
      {res ? (
        <ul>
          {res.map((repo: any) => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Enter a github username to see their public repos.</p>
      )}
    </Base>
  );
}
