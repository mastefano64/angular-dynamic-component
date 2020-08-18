import { AbstractControl, ValidatorFn } from '@angular/forms';

// https://www.digitalocean.com/community/tutorials/angular-reactive-forms-custom-validator

export function validDecimal(): ValidatorFn {
  return (c: AbstractControl): {[key: string]: any} | null => {
    // const regexp = '^[0-9]+$';
    const regexp = '^[0-9]+(\.[0-9]{1,2})?$';
    if (c.value) {
      const v = new String(c.value);
      if (!v.match(regexp)) {
        return { 'invalidDec': true };
      }
    }
    return null;
  };
}
