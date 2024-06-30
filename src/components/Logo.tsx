import { Fira_Sans } from "next/font/google";
import styles from "./Logo.module.scss";
import clsx from "clsx";

const fira = Fira_Sans({ weight: '300', subsets: ['latin']});
type LogoProps = {
	className?: string;
	size?: "small" | "medium" | "large";
};
const Logo = ({ className = "Logo", size = "small" }: LogoProps): React.JSX.Element => {
	return (
		<span
			className={clsx(className, fira.className, styles.logo, [styles[size]])}
			data-cy="Logo"
		>
			<span>&lt;</span>genii <span>/&gt;</span>
		</span>
	);
};

export default Logo;
