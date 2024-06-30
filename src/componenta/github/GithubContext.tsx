import { PropsWithChildren, createContext, useContext } from "react";
import { Octokit, RequestError } from "octokit";

type GithubApiContextType = {
	getFile: (owner: string, repo: string, path: string) => Promise<string>;
	getDirectory: (owner: string, repo: string, path: string) => Promise<{name: string}[]>;
};

type GithubApiProviderProps = {
	authToken: string | undefined;
} & PropsWithChildren<{}>;

const GithubContext = createContext<GithubApiContextType | undefined>(
	undefined
);


export const GithubApiService: React.FC<GithubApiProviderProps> = ({ children, authToken }) => {
	if (!authToken) {	
		throw new Error("No GitHub auth token provided");
	}
	const octokit = new Octokit({ auth: authToken });
	const getFile = async (owner: string, repo: string, path: string) => {
		try {
		const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
			owner,
			repo,
			path,
		});
		const text = await response.data.content;
			return text as string;
		} catch (error) {
			const requestError = error as RequestError;
			console.error(
				`Error! Status: ${requestError.status}. Message: ${requestError.message}`
			);
			throw error;
		}
	};

	const getDirectory = async (owner: string, repo: string, path: string) => {
		try {
			const response = await octokit.request(
				"GET /repos/{owner}/{repo}/contents/{path}",
				{
					owner,
					repo,
					path,
				}
			);
			const text = await response.data;
			return text;
		} catch (error) {
			const requestError = error as RequestError;
			console.error(
				`Error! Status: ${requestError.status}. Message: ${requestError.message}`
			);
			throw error;
		}
	};

	return (
		<GithubContext.Provider value={{ getFile, getDirectory }}>
			{children}
		</GithubContext.Provider>
	);
};

export const useGithubApi = () => {
	const context = useContext(GithubContext);
	if (!context) {
		throw new Error("useGithubApi must be used within a GithubApiProvider");
	}
	return context;
}