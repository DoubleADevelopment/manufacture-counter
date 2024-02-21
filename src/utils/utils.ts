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

export { onEnterClickHandlerToElementBlur, extractNumbers };
