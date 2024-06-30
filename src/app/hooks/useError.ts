import { useState } from "react";

export const useError = () => {
	const [error, setError] = useState<Error | null>(null);
	const setErrorWithMessage = (message: string) => setError(new Error(message));
	const clearError = () => setError(null);
	return { error, setErrorWithMessage, clearError };
}