import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IControlFieldMetadata } from '../../model/control-metadata';
import { ArgDropDownChange } from '../../model/arg-dropdown-change';
import { ArgRadioBoxChange } from '../../model/arg-rediobox-change';

@Component({
  selector: 'app-dynamic-form2',
  templateUrl: './dynamic-form2.component.html'
})
export class DynamicForm2Component {
  @Input() form: FormGroup;
  @Input() controls: IControlFieldMetadata[] = [];
  @Input() group: any[] = [];
  @Output() dropdownchange = new EventEmitter<ArgDropDownChange>();
  @Output() radioboxchange = new EventEmitter<ArgRadioBoxChange>();

  constructor() {  }

  onDropdownChange(event: ArgDropDownChange) {
    this.dropdownchange.emit(event);
  }

  onRadioBoxChange(event: ArgRadioBoxChange) {
    this.radioboxchange.emit(event);
  }

}
