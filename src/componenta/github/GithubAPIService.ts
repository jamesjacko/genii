import { Octokit } from "octokit";

export class GithubApiService {
	private octokit: Octokit;

	constructor(authToken: string) {
		this.octokit = new Octokit({ auth: authToken });
	}

	async getFile(owner: string, repo: string, path: string): Promise<string> {
		const response = await this.octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
			owner,
			repo,
			path,
		});
		const text = await response.data.content;
		return text;
	}
}