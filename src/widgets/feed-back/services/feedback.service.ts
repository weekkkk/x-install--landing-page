import { $feedback } from "../api/index";
import type { FeedbackDataDto } from "../api/types";

export class FeedbackService {
  static sendFeedbackForm = async (req: FeedbackDataDto) => {
    const formData = {
      name: req.name,
      telegram: req.telegram,
      message: req.message,
    };

    console.log(formData);

    return await $feedback("/api/telegram", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
}
