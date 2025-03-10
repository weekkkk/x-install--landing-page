import { $feedback } from "../api/index";
import type { FeedbackDataDto } from "../api/types";

export class FeedbackService {
  static sendFeedbackForm = (req: FeedbackDataDto) => {
    const formData = {
      name: req.name,
      telegram: req.telegram,
      message: req.message,
    };

    return $feedback("/api/telegram", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };
}
