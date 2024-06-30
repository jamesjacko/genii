import { useStatus } from "@/app/hooks/useStatus";
import { useGithubApi } from "./GithubContext";
import { useCallback, useEffect, useState } from "react";
import { base64ToAscii } from "@/app/utils/base64ToAscii";

export const useFetchGithubFile = (
	owner: string,
	repo: string,
	path: string
) => {
	const { status, setError, setSuccess, startLoading, stopLoading } =
		useStatus();
	const githubApiService = useGithubApi();
	const [data, setData] = useState<string | null>(null);

	const fetchFile = useCallback(async () => {
		startLoading();
		try {
			const fileContent = await githubApiService.getFile(owner, repo, path);
			setData(base64ToAscii(fileContent));
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
