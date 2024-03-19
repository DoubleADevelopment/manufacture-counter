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

const formatDateToShortFormat = (milliseconds: string): string => {
  const date = new Date(+milliseconds);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const transformedDate = new Intl.DateTimeFormat('pl-PL', options).format(date);

  return transformedDate;
};

export {
  onEnterClickHandlerToElementBlur,
  extractNumbers,
  inputValueValidate,
  formatDateToShortFormat,
};
