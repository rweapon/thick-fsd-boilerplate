import { styleObject } from "./styleObject.interface";

export const classLister =
  (styleObject: styleObject) =>
    (...classList: string[]) =>
      classList.reduce((list, myClass) => {
        let output = list;
        if (styleObject[myClass]) {
          if (list) output += " "; // appends a space if list is not empty
          output += styleObject[myClass];
        //Above: append 'myClass' from styleObject to the list if it is defined
        }
        return output;
      }, "");
