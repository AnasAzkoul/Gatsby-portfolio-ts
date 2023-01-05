import { useState, useEffect } from 'react';

function useMediaQuery(query: string) {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== isMatch) {
      setIsMatch(media.matches);
    }

    const listener = () => {
      setIsMatch(media.matches);
    };

    media.onchange = listener;

    return () => {
      window.removeEventListener(`resize`, listener);
    };
  }, [isMatch, query]);

  return isMatch;
}

export default useMediaQuery;
