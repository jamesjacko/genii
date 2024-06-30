import { useStatus } from "../../app/hooks/useStatus";
import { useGithubApi } from "./GithubContext";
import { useCallback, useEffect, useState } from "react";
import { base64ToAscii } from "../../app/utils/base64ToAscii";

export const useFetchGithubDirectory = (
	owner: string,
	repo: string,
	path: string
) => {
	const { status, setError, setSuccess, startLoading, stopLoading } =
		useStatus();
	const githubApiService = useGithubApi();
	const [data, setData] = useState<string[] | null>(null);

	const fetchFile = useCallback(async () => {
		startLoading();
		try {
			const responseData = await githubApiService.getDirectory(owner, repo, path);
			setData(responseData.map((dir: {name: string}) => dir.name));
			setSuccess();
		} catch (error) {
			setError((error as Error).message);
		} finally {
			stopLoading();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [owner, repo, path, githubApiService]);

	useEffect(() => {
		fetchFile();
	}, [fetchFile]);

	return { fetchFile, status, data };
};
