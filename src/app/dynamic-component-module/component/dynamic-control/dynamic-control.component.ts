import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';

import { IControlFieldMetadata } from '../../model/control-metadata';
import { ArgDropDownChange } from '../../model/arg-dropdown-change';
import { ArgRadioBoxChange } from '../../model/arg-rediobox-change';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html'
})
export class DynamicControlComponent {
  @Input() form: FormGroup;
  @Input() control: IControlFieldMetadata;
  @Output() dropdownchange = new EventEmitter<ArgDropDownChange>();
  @Output() radioboxchange = new EventEmitter<ArgRadioBoxChange>();

  constructor() {  }

  onSelectionChange(change: MatSelectChange) {
    const arg = new ArgDropDownChange();
    arg.id = change.source.id;
    arg.value = change.value;
    this.dropdownchange.emit(arg);
  }

  onRedioBoxChange(change: MatRadioChange) {
    const arg = new ArgRadioBoxChange();
    arg.id = change.source.id;
    arg.value = change.value;
    this.radioboxchange.emit(arg);
  }

}
