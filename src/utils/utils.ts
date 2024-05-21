//variables
import { InputMessagesText, InputStatuses } from '../variables';
//types
import type {
  IComponentOverviewOpenItems,
  IInputValueValidate,
  OperationBetweenBaseAndAdditionType,
} from '../types';

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

const calculateWithOperator = (
  value: number,
  additionalValue: number,
  operator: OperationBetweenBaseAndAdditionType,
  operation: '+' | '-',
) => {
  switch (operator) {
    case 'subtraction':
      return {
        valueToAdd: value - additionalValue,
        logText: `${operation}${value - additionalValue} (${value} - ${additionalValue})`,
      };
    case 'addition':
      return {
        valueToAdd: value + additionalValue,
        logText: `${operation}${value + additionalValue} (${value} + ${additionalValue})`,
      };
    case 'multiplication':
      return {
        valueToAdd: value * additionalValue,
        logText: `${operation}${value * additionalValue} (${value} * ${additionalValue})`,
      };
    case 'division':
      return {
        valueToAdd: value / additionalValue,
        logText: `${operation}${value / additionalValue} (${value} / ${additionalValue})`,
      };
    case 'none':
      return {
        valueToAdd: value,
        logText: `${operation}${value}`,
      };
  }
};

const componentOverviewItemsHasOpenStatus = (openItems: IComponentOverviewOpenItems) =>
  Object.values(openItems).some((status) => status === 'open');

export {
  onEnterClickHandlerToElementBlur,
  extractNumbers,
  inputValueValidate,
  formatDateToShortFormat,
  calculateWithOperator,
  componentOverviewItemsHasOpenStatus,
};
