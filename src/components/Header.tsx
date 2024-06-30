import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import GithubLink from "./GithubLink";
type HeaderProps = {
	className?: string;
};
const Header = ({ className = "Header" }: HeaderProps): React.JSX.Element => {
	return (
		<div className={clsx(styles.header)} data-cy="Header">
			<Logo />
			<GithubLink />
		</div>
	);
};

export default Header;
