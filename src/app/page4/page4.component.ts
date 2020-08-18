import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IControlFieldMetadata } from '../dynamic-component-module/model/control-metadata';
import { ArgDropDownChange } from '../dynamic-component-module/model/arg-dropdown-change';
import { ArgRadioBoxChange } from '../dynamic-component-module/model/arg-rediobox-change';
import { DynamicControlService } from '../dynamic-component-module/service/dynamic-control.service';
import { Page4MetadataService } from '../service/page4-metadata.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
  providers: [ DynamicControlService ]
})
export class Page4Component implements OnInit {
  form = new FormGroup({});
  controls: IControlFieldMetadata[] = [];
  group: any = [];
  title = 'Page 4';
  jsonstr = '';

  constructor(private build: DynamicControlService, private service: Page4MetadataService ) { }

  ngOnInit(): void {
    this.service.getFormMetadata().subscribe(response => {
      this.build.createFormControl(response);
      this.form = this.build.current.form;
      this.controls = this.build.current.controls;
      this.group = this.build.current.group;
      const value1 = this.build.getFormValue('select1');
      this.updateDropDown('select2', value1);
    });
  }

  onDropdownChange(event: ArgDropDownChange) {
    const control = this.build.getControlById(event.id);
    if (event.id === 'select1') {
      this.updateDropDown('select2', event.value);
    }
  }

  onRadioBoxChange(event: ArgRadioBoxChange) {
    const control = this.build.getControlById(event.id);
    // this.updateRadioBox(event.id, event.value);
  }

  updateDropDown(control: string, value: string) {
    this.service.getDropDownOption('page3', control, value).subscribe(response => {
      const ref = this.build.getControlById(control);
      ref.options = response.options;
    });
  }

  onSubmit() {
    this.jsonstr = JSON.stringify(this.form.getRawValue());
    const values = this.build.getFormValues();
  }

}
