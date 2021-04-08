import { useEffect } from 'react';
interface useKeyDownEventParams {
  callback: (key: string) => void;
  keys: string[];
}

const useKeyDownEvent = ({ callback, keys }: useKeyDownEventParams) => {
  useEffect(() => {
    const validateKeys = (key: string) => {
      if (keys?.length > 0) {
        callback(key);
      }
    };

    window.addEventListener('keydown', event => validateKeys(event.key));

    return () =>
      window.removeEventListener('keydown', event => validateKeys(event.key));
    // eslint-disable-next-line
  }, []);
};

export default useKeyDownEvent;
