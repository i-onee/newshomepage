import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatch(media.matches);

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return match;
};

export default useMediaQuery;
