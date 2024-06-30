import InlineFlex from "@/components/InlineFlex";
import styles from "../page.module.css";
import ZenodoBadge from "@/components/zenodo/ZenodoBadge";
import GithubLink from "@/components/GithubLink";

export default function Home() {
	return (
		<main className={styles.main}>
			<InlineFlex justifyContent="spaceBetween">
				<h1>Genii Builder</h1>
				<InlineFlex>
					<ZenodoBadge
						href="https://zenodo.org/doi/10.5281/zenodo.12571943"
						imgSrc="https://zenodo.org/badge/174171838.svg"
					/>
					<GithubLink owner="JamesJacko" repo="genii-builder" showText />
				</InlineFlex>
			</InlineFlex>
			<p>
				This builder provides an interactive drag-and-drop interface which
				allows users to create Genii visualisations by constructing Genes and
				selecting data sets. As with the previous repositories, it requires node
				16 which is available using asdf.
			</p>
		</main>
	);
}
