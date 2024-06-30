import InlineFlex from "@/components/InlineFlex";
import styles from "../page.module.css";
import ZenodoBadge from "@/components/zenodo/ZenodoBadge";
import GithubLink from "@/components/GithubLink";

export default function Home() {
  return (
		<main className={styles.main}>
			<InlineFlex justifyContent="spaceBetween">
				<h1>Genii Component</h1>
				<InlineFlex>
				<ZenodoBadge
					href="https://zenodo.org/doi/10.5281/zenodo.12571855"
					imgSrc="https://zenodo.org/badge/155877027.svg"
				/>
					<GithubLink owner="JamesJacko" repo="genii-component" showText />
					</InlineFlex>
			</InlineFlex>
			<p>
				The Genii-Component library enables developers to create visualisations,
				it is a react library that gives react developers a {"<Genii />"}{" "}
				component which takes a Genii gene and other properties to visualise a
				supplied set of data. Each Genii-Component will create and maintain a
				single visualisation. The code is reactive so the component will react
				to changes in its properties. To use the library in a given project it
				must be built `npm run build` and linked to local npm using `npm link`.
				The library requires node version 16 which can be easily installed and
				used for this project using asdf (a `.tool-versions` file is in the
				repository). More in-depth details of installation can be found in the
				repository README.
			</p>
		</main>
	);
}
