import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(value: string): unknown {
    debugger;

    const stringArray = value.split(' ');

    if (stringArray.length == 1) {
      const newChar = stringArray[0].charAt(0);
      return newChar;
    } else if (stringArray.length == 2) {
      const firstChar = stringArray[0].charAt(0);
      const lastChar = stringArray[1].charAt(0);
      const newChar = firstChar + lastChar;
      return newChar;
    } else if (stringArray.length == 3) {
      const firstChar = stringArray[0].charAt(0);
      const lastChar = stringArray[2].charAt(0);
      const newChar = firstChar + lastChar;
      return newChar;
    } else {
      return '--';
    }
  }
}
