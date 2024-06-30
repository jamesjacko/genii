import { PropsWithChildren } from "react";
import styles from "./layout.module.scss";

type InlineFlexProps = {
	justifyContent?: "center" | "flexStart" | "flexEnd" | "spaceBetween";
} & PropsWithChildren;

const InlineFlex = ({children, justifyContent = "flexStart"}: InlineFlexProps): React.JSX.Element => {
	return (
		<div className={[styles.inlineFlex, styles[justifyContent]].join(" ")} data-cy="InlineFlex">
			{children}
		</div>
	);
};

export default InlineFlex;
