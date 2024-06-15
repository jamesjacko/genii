import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./GithubLink.module.scss";
import clsx from "clsx";

const GithubLink = (): React.JSX.Element => {
	return (
			<a
				className={clsx(styles.link)}
				href="https://github.com/users/jamesjacko/projects/1"
				target="_blank"
			>
				<FontAwesomeIcon icon={faGithub} height={20} />
			</a>
	);
};

export default GithubLink;
