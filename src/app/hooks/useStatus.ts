import { useEffect, useState } from "react";
import { useError } from "./useError";
import { useLoading } from "./useLoading";

export const Status = {
	IDLE: "idle",
	LOADING: "loading",
	ERROR: "error",
	SUCCESS: "success",
} as const;

type Status = typeof Status[keyof typeof Status];

export const useStatus = () => {
	const loading = useLoading();
	const error = useError();

	useEffect(() => {
		console.log("rendering useStatus");
	}, []);

	const [status, setStatus] = useState<Status>("idle");

	const startLoading = () => {
		loading.startLoading();
		setStatus("loading");
	};

	const stopLoading = () => {
		loading.stopLoading();
		setStatus("idle");
	};

	const setError = (message: string) => {
		error.setErrorWithMessage(message);
		setStatus("error");
		loading.stopLoading();
	};

	const clearError = () => {
		error.clearError();
		setStatus("idle");
	};

	const setSuccess = () => {
		setStatus("success");
		loading.stopLoading();
	};

	return {
		status,
		startLoading,
		stopLoading,
		setError,
		clearError,
		setSuccess,
	};
};
