import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import {FeedbackSuccessStep} from "./Steps/FeedbackSuccessStep"

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImageUrl,
      alt: "bug image",
    },
  },

  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "lamp image",
    },
  },

  OTHER: {
    title: "Other",
    image: {
      source: thoughtImageUrl,
      alt: "thought ballon image",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function Index() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
        setFeedbackSent(false)
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep  onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ❤️ by {" "}
        <a
          className="underline underline-offset-1"
          href="https://www.linkedin.com/in/gabrielguinterherter"
        >
          Gabriel Guinter Herter
        </a>
      </footer>
    </div>
  );
}
