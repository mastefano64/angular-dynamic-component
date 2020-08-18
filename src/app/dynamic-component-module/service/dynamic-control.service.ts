import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FromGroupDef } from '../model/form-group-def';
import { IResponseMetadata, IResponseFieldMetadata } from '../model/response-metadata';
import { IControlFieldMetadata } from '../model/control-metadata';
import { ControlTextBox } from '../component/control-textbox';
import { ControlCheckBox } from '../component/control-checkbox';
import { ControlRadioBox } from '../component/control-radiobox';
import { ControlDropDown } from '../component/control-dropdown';
import { validInteger } from '../validators/integer.validator';
import { validDecimal } from '../validators/decimal.validator';

import { groupBy } from 'lodash';

@Injectable()
export class DynamicControlService {
  current = new FromGroupDef();

  constructor() { }

  createFormControl(response: IResponseMetadata) {
    this.current.hasBootstrap = response.hasBootstrap;
    this.current.controls = this.createControlFromMetadata(response);

    if (this.current.hasBootstrap === true) {
      const grp = groupBy(this.current.controls, x => x.bootstrapRow);
      // tslint:disable-next-line:forin
      for (const item in grp) {
        this.current.group.push(grp[item]);
      }
    }

    const group: any = {};
    this.current.controls.forEach(control => {
      group[control.key] = this.createControl(control);
    });

    this.current.form = new FormGroup(group);
  }

  getFormValues() {
    const values: any = {};

    for (const control of this.current.controls) {
      let value = null;
      value = this.current.form.get(control.key).value;

      if (control.type === 'string') {
        value = this.toString(value);
      }
      if (control.type === 'integer') {
        value = this.toInteger(value);
      }
      if (control.type === 'decimal') {
        value = this.toDecimal(value);
      }
      if (control.type === 'date') {
        value = this.toDateString(value);
      }
      values[control.key] = value;
    }

    return values;
  }

  getFormValue(id: string) {
    return this.current.form.get(id).value;
  }

  setFormValue(id: string, value: any) {
    this.current.form.patchValue({ id: value });
  }

  getControlById(id: string) {
    return this.current.controls.find(x => x.key === id);
  }

  private createControlFromMetadata(response: IResponseMetadata) {
    const list: IControlFieldMetadata[] = [];
    let ctr: IControlFieldMetadata = null;

    for (const item of response.fields) {
      if (item.controlType === 'textbox') {
        ctr = new ControlTextBox({
          key: item.key,
          label: item.label,
          value: item.value,
          type: item.type,
          required: item.required,
          order: item.order
        });
      }
      if (item.controlType === 'checkbox') {
        ctr = new ControlCheckBox({
          key: item.key,
          label: item.label,
          value: item.value,
          type: item.type,
          order: item.order
        });
      }
      if (item.controlType === 'dropdown') {
        ctr = new ControlDropDown({
          key: item.key,
          label: item.label,
          value: item.value,
          type: item.type,
          order: item.order,
          options: [ ...item.options ]
        });
      }
      if (item.controlType === 'radiobox') {
        ctr = new ControlRadioBox({
          key: item.key,
          label: item.label,
          value: item.value,
          type: item.type,
          order: item.order,
          options: [ ...item.options ]
        });
      }

      ctr.bootstrapRow = item.bootstrapRow;
      ctr.bootstrapCol = item.bootstrapCol;

      list.push(ctr);
    }

    return list;
  }

  private createControl(control: IControlFieldMetadata) {
    const validators = [];

    if (control.controlType === 'textbox' && control.required === true) {
      validators.push(Validators.required);
    }
    if (control.controlType === 'textbox' && control.type === 'integer') {
      validators.push(validInteger());
    }
    if (control.controlType === 'textbox' && control.type === 'decimal') {
      validators.push(validDecimal());
    }

  // if (control.required || control.required === true) {
  //   validators.push(Validators.required);
  // }
  // if (control.required || control.required === true) {
  //   validators.push(Validators.required);
  // }

    let value = control.value;
    if (control.controlType === 'textbox' && control.type === 'decimal') {
      value = this.formatDecimal(control.value);
    }

    const ctr = new FormControl(value || '', validators);

    return ctr;
  }

  public toString(value: any): string {
    let valret = '';
    if (value === '' || value === null || value === undefined) {
      return valret;
    }
    valret = value.toString().trim();
    return valret;
  }

  public toInteger(value: any): number {
    let valret = 0;
    if (!value) {
      return valret;
    }
    const str = value.toString().trim();
    valret = parseInt(str, 10);
    return valret;
  }

  public toDecimal(value: any): number {
    let valret = 0;
    if (!value) {
      return valret;
    }
    const str = value.toString().trim();
    valret = parseFloat(str.replace(',', '.'));
    return valret;
  }

  public toDateString(value: any, sep: string = '/'): string {
    if (!value) {
      return '';
    }
    const amg = value;
    // if (isMoment(value)) {
    //   const d = value.date();
    //   const m = value.months() + 1;
    //   const y = value.year();
    //   amg = y + sep + m + sep + d;
    // }
    // else if (value instanceof Date) {
    //   const d = value.getDate();
    //   const m = value.getMonth() + 1;
    //   const y = value.getFullYear();
    //   amg = y + sep + m + sep + d;
    // }
    // else {
    //   const index = amg.indexOf('T');
    //   if (index !== -1) {
    //     amg = amg.substring(0, index);
    //   }
    // }
    return amg;
  }

  public formatDecimal(value: any) {
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
