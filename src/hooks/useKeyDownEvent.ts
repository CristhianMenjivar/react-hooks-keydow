import { useEffect } from 'react';
import { validateComandsAndKey, validateKeyInKeys } from '../helpers';
import { UseKeyDownEventParams, EventKeyDown } from '../Types';

const useKeyDownEvent = ({
  callback,
  keys = [],
  comand,
}: UseKeyDownEventParams) => {
  useEffect(() => {
    const validateKeys = (event: any) => {
      let resultValidation = null;

      if (comand !== undefined) {
        resultValidation = validateComandsAndKey(
          event as EventKeyDown,
          comand,
          keys
        );
      } else {
        resultValidation = validateKeyInKeys(event as EventKeyDown, keys);
      }

      if (resultValidation) {
        callback(resultValidation);
      }
    };

    window.addEventListener('keydown', validateKeys);

    return () => window.removeEventListener('keydown', validateKeys);
    // eslint-disable-next-line
  }, []);
};

export default useKeyDownEvent;
