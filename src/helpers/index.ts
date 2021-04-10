import { Comands, EventKeyDown } from '../Types';

const isEventKeyInclude = (keys: string[], key: string) => {
  return keys.includes(key);
};

const validateComandsAndKey = (
  event: EventKeyDown,
  comand: Comands,
  keys: string[]
): string | null => {
  if (event[comand]) {
    if (isEventKeyInclude(keys, event.key)) {
      return `${comand}+${event.key}`;
    }
  }
  return null;
};

const validateKeyInKeys = (
  event: EventKeyDown,
  keys: string[]
): string | null => {
  if (isEventKeyInclude(keys, event.key)) {
    return `${event.key}`;
  }
  return '';
};

export { validateComandsAndKey, validateKeyInKeys };
