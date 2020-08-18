import { Pipe, PipeTransform } from '@angular/core';

// https://stackoverflow.com/questions/49522542/how-to-use-pipes-in-angular-5-reactive-form-input

@Pipe({
  name: 'formatDecimal'
})
export class DecNumberPipe implements PipeTransform {
  transform(value: number): string {
    let str = '';
    if (value) {
      const fraction = ',';
      const separator = '';
      str = value.toLocaleString('en-US');
      str = str.replace(/,/g, separator);
      str = str.replace(/\./, fraction);
    }
    return str;
  }
}
