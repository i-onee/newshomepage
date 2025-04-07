import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    setMatch(media.matches);

    media.addEventListener("change", () => setMatch(media.matches));
    return () =>
      media.removeEventListener("change", () => setMatch(media.matches));
  }, [query]);

  return match;
};

export default useMediaQuery;
