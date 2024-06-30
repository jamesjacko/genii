import Image from "next/image";
import Styles from "../layout.module.scss"

type ZenodoBadgeProps = {
	href: string;
	imgSrc: string;
};
const ZenodoBadge = ({
	href,
	imgSrc,
}: ZenodoBadgeProps): React.JSX.Element => {
	return (
		<a className={Styles.lh1} href={href} target="_blank">
			<Image src={imgSrc} alt="DOI" width={190} height={20} />
		</a>
	);
};

export default ZenodoBadge;
