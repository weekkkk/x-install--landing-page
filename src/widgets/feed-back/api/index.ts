export type { FeedbackDataDto } from "./types";

const FEEDBACK_API_URL = "https://xinstallapi-production.up.railway.app";

export const $feedback = $fetch.create({
  baseURL: FEEDBACK_API_URL,
});
