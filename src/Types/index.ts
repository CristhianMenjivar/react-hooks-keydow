enum Comands {
  ctrlKey = 'ctrlKey',
  shiftKey = 'shiftKey',
}

interface UseKeyDownEventParams {
  callback: (key: string) => void;
  comand?: Comands;
  keys: string[];
}

interface EventKeyDown {
  key: string;
  ctrlKey: Comands.ctrlKey;
  shiftKey: Comands.shiftKey;
}

export { UseKeyDownEventParams, Comands, EventKeyDown };
