"use client";

import { ChangeEvent, useState } from "react";
import ClientGithubReadme from "./github/ClientGithubReadme";
import ReactSelect, { SingleValue } from "react-select";
import styles from "./GithubReadmes.module.scss";
import Loader from "./Loader";

const readmes = {
	"genii-component": "genii-component",
	"genii-renderer": "genii-renderer",
	"genii-builder": "genii-builder",
} as const;

type ReadmeValue = (typeof readmes)[keyof typeof readmes];

const GithubReadmes = (): React.JSX.Element => {
	const [currentReadme, setCurrentReadme] = useState<ReadmeValue>(
		readmes["genii-component"]
	);

	const handleSelectChange = (
		value: SingleValue<{ value: string; label: string }>
	) => {
		setCurrentReadme(value?.value as ReadmeValue);
	};

	const options = Object.entries(readmes).map(([value]) => (
		{ value, label: value }
	));
	return (
		<div className={styles.container}>
			<ReactSelect onChange={handleSelectChange} options={options} className={styles.select} placeholder="select repository" />
			<ClientGithubReadme
				owner="jamesjacko"
				repo={currentReadme}
				path="README.md"
				loadingIndicator={<Loader />}
			/>
		</div>
	);
};

export default GithubReadmes;
