import InlineFlex from "@/components/InlineFlex";
import styles from "../page.module.css";
import ZenodoBadge from "@/components/zenodo/ZenodoBadge";
import GithubLink from "@/components/GithubLink";

export default function Home() {
  return (
		<main className={styles.main}>
			<InlineFlex justifyContent="spaceBetween">
			<h1>Genii iOS Builder</h1>
			<InlineFlex><ZenodoBadge
				href="https://zenodo.org/doi/10.5281/zenodo.12598498"
				imgSrc="https://zenodo.org/badge/221009862.svg"
				/>
					<GithubLink owner="JamesJacko" repo="genii-builder-ios" showText />
				</InlineFlex>
				</InlineFlex>
			<p>
				This project was created to facilitate a user study as part of the work.
				It is included here for completeness however, it was not intended to
				serve as anything more than an application for study. It can provide an
				insight into a single possible method for rendering {"<Genii />"} components
				on an Apple Watch.{" "}
			</p>
		</main>
	);
}
