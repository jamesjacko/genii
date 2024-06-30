import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./GithubLink.module.scss";
import clsx from "clsx";

type GithubLinkProps = {
	owner?: string;
	repo?: string;
	showText?: boolean;
};

const GithubLink = ({
	owner,
	repo,
	showText = false,
}: GithubLinkProps): React.JSX.Element => {
	const href =
		owner && repo
			? `https://github.com/${owner}/${repo}`
			: "https://github.com/users/jamesjacko/projects/1";
	return (
			<a
				className={clsx(styles.link)}
				href={href}
				target="_blank"
			>
				<FontAwesomeIcon icon={faGithub} height={20} /> {showText && "View on Github"}
			</a>
	);
};

export default GithubLink;
