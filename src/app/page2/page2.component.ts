import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IControlFieldMetadata } from '../dynamic-component-module/model/control-metadata';
import { ArgDropDownChange } from '../dynamic-component-module/model/arg-dropdown-change';
import { ArgRadioBoxChange } from '../dynamic-component-module/model/arg-rediobox-change';
import { DynamicControlService } from '../dynamic-component-module/service/dynamic-control.service';
import { Page2MetadataService } from '../service/page2-metadata.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  providers: [ DynamicControlService ]
})
export class Page2Component implements OnInit {
  form = new FormGroup({});
  controls: IControlFieldMetadata[] = [];
  group: any = [];
  title = 'Page 2';

  constructor(private build: DynamicControlService, private service: Page2MetadataService ) { }

  ngOnInit(): void {
    this.service.getFormMetadata().subscribe(response => {
      this.build.createFormControl(response);
      this.form = this.build.current.form;
      this.controls = this.build.current.controls;
      this.group = this.build.current.group; // ?
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
