export const base64ToAscii = (base64: string): string => {
	return Buffer.from(base64, "base64").toString("utf-8");
}