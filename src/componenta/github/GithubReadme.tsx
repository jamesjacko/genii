import { Status } from "@/app/hooks/useStatus";
import { useFetchGithubFile } from "./useFetchGithubFile";
import { use, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MarkdownRenderer } from "../MarkdownRenderer";
import GithubLink from "../GithubLink";
import style from "./GithubReadme.module.scss";

export type GithubReadmeProps = {
	repo: string;
	owner: string;
	path: string;
	loadingIndicator?: React.ReactNode;
	className?: string;
};
const GithubReadme = ({
	className = "GithubReadme",
	repo,
	owner,
	path,
	loadingIndicator,
}: GithubReadmeProps): React.JSX.Element => {
	const extension = path.split(".").pop();
	const file = useFetchGithubFile(owner, repo, path);
	useEffect(() => {
		console.log("file", file);
	}, [file]);
	if (file.status === Status.LOADING) {
		if (!loadingIndicator) {
			return <div>Loading...</div>;
		}
		return <>{loadingIndicator}</>;
	}
	if (file.status === Status.ERROR) {
		return <div>Error: {file.data}</div>;
	}
	if (file.status === Status.IDLE && file.data) {
		return (
			<div className={[className].join(" ")} data-cy="GithubReadme">
				{extension === "md" ? (
					<div className={style.readme}>
						<div className={style.githubLink}>
							<GithubLink owner={owner} repo={repo} />
						</div>
						<MarkdownRenderer>{file.data}</MarkdownRenderer>
					</div>
				) : (
					<SyntaxHighlighter style={darcula}>{file.data}</SyntaxHighlighter>
				)}
			</div>
		);
	}
	return <>Blah</>;
};

export default GithubReadme;
