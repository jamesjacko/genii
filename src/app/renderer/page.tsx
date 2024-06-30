import InlineFlex from "@/components/InlineFlex";
import styles from "../page.module.css";
import ZenodoBadge from "@/components/zenodo/ZenodoBadge";
import GithubLink from "@/components/GithubLink";

export default function Home() {
	return (
		<main className={styles.main}>
			<InlineFlex justifyContent="spaceBetween">
				<h1>Genii Renderer</h1>
				<InlineFlex>
					<ZenodoBadge
						href="https://zenodo.org/doi/10.5281/zenodo.12571916"
						imgSrc="https://zenodo.org/badge/224046181.svg"
					/>
					<GithubLink owner="JamesJacko" repo="genii-renderer" showText />
				</InlineFlex>
			</InlineFlex>
			<p>
				This renderer is a simple react application whose sole intention is to
				render {"<Genii />"} components. It serves as an example implementation
				and can be forked and built upon if needed. This application is
				dependent on the Genii-Component so following the build and link steps
				for that are necessary to run this project. As with the previous
				project, Genii-Renderer requires node 16 which can be installed and used
				locally to the project using the tool asdf.
			</p>
		</main>
	);
}
