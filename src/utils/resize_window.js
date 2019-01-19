import { setCSS } from './render_md';

export function handleClickOnResize(options) {
  const resizeButton = options.event.target;
  const windowElement = document.querySelector(options.windowSelector);
  const textArea = windowElement.querySelector(options.textAreaSelector);
  if (resizeButton.innerHTML == '+') {
    resizeButton.innerHTML = '-';
    setCSS(windowElement, {
      width : '100%',
      marginTop : '0',
      position : 'fixed',
      left : '0',
      top : '0'
    });
    setCSS(textArea, {
      height : 'calc(100vh - 1.8rem)'
    });
  } else {
    resizeButton.innerHTML = '+';
    setCSS(windowElement, options.defaultWindowCSS)

    setCSS(textArea, options.defaultTextAreaCSS)
  }
}
