import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IControlFieldMetadata } from '../dynamic-component-module/model/control-metadata';
import { ArgDropDownChange } from '../dynamic-component-module/model/arg-dropdown-change';
import { ArgRadioBoxChange } from '../dynamic-component-module/model/arg-rediobox-change';
import { DynamicControlService } from '../dynamic-component-module/service/dynamic-control.service';
import { Page1MetadataService } from '../service/page1-metadata.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  providers: [ DynamicControlService ]
})
export class Page1Component implements OnInit {
  form = new FormGroup({});
  controls: IControlFieldMetadata[] = [];
  title = 'Page 1';

  constructor(private build: DynamicControlService, private service: Page1MetadataService ) { }

  ngOnInit(): void {
    this.service.getFormMetadata().subscribe(response => {
      this.build.createFormControl(response);
      this.form = this.build.current.form;
      this.controls = this.build.current.controls;
    });
  }

  onDropdownChange(event: ArgDropDownChange) {

  }

  onRadioBoxChange(event: ArgRadioBoxChange) {

  }

  onSubmit() {
    const json = JSON.stringify(this.form.getRawValue());
    const values = this.build.getFormValues();
  }

}
