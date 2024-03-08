//variables
import { InputMessagesText, InputStatuses } from '../variables';
//types
import type { IInputValueValidate } from '../types';

const onEnterClickHandlerToElementBlur = (
  evt: any,
  htmlElement: HTMLElement | null = null,
): void | boolean => {
  if (evt.keyCode === 13 || evt.keyCode === 'enter') {
    evt.preventDefault();

    if (htmlElement && htmlElement !== null) {
      htmlElement.blur();
    } else {
      return true;
    }
  }
};

const extractNumbers = (inputString: string): string => {
  return inputString.replace(/[^0-9]+/g, '');
};

const inputValueValidate = (value: number | null): IInputValueValidate => {
  if (value === null) {
    return {
      status: InputStatuses.ERROR,
      message: InputMessagesText.EMPTY_FIELD,
    };
  } else if (value === 0) {
    return {
      status: InputStatuses.ERROR,
      message: InputMessagesText.DIVISION_BY_ZERO,
    };
  } else {
    return {
      status: InputStatuses.SUCCESS,
      message: InputMessagesText.DEFAULT,
    };
  }
};

export { onEnterClickHandlerToElementBlur, extractNumbers, inputValueValidate };
