import { useEffect } from "react";

export const useScrollTrigger = (ref, onTrigger) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !sessionStorage.getItem("lead_modal_shown")
        ) {
          sessionStorage.setItem("lead_modal_shown", "true");
          onTrigger();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, onTrigger]);
};
