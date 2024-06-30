import License from "@/components/License";
import styles from "./page.module.css";
import Logo from "@/components/Logo";
import ComponentPage from './component/page';
import RendererPage from './renderer/page';
import BuilderPage from './builder/page';
import IosBuilderPage from './ios-builder/page';

export default function Home() {
  return (
		<main className={styles.main}>
			<Logo size="large" className={styles.logo} />
			<p>
				The Genii system enables developers to create visualisation designs
				using a path-based, gene-defined model. Genii and its constituent parts
				are free and open source under the <License />.
			</p>
			<p>
				All Zenodo DOI links provide a fixed snapshot of the projects at the
				time of publication. The code in the repositories is likely to change
				and evolve so please refer to those for fully up-to-date work.
				Contribution to this work is welcomed through fork and pull-request and
				we welcome issue submissions for bugs and feature suggestions.
			</p>
			<ComponentPage />
			<RendererPage />
			<BuilderPage />
			<IosBuilderPage />

			
		</main>
	);
}
