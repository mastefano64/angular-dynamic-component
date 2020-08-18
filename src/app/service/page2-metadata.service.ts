import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { IResponseFieldMetadata } from '../dynamic-component-module/model/response-metadata';

@Injectable({
  providedIn: 'root',
})
export class Page2MetadataService {

  constructor() { }

  getFormMetadata(id?: number) {
    return of(this.createFormMetadata());
  }

  private createFormMetadata() {
    const data: any = {};
    const list: IResponseFieldMetadata[] = [];
    data.hasBootstrap = true;
    data.fields = list;

    list.push({
      bootstrapRow: 1,
      bootstrapCol: 'col-md-4',
      key: 'campostr',
      label: 'CampoStr',
      value: 'prova stringa',
      controlType: 'textbox',
      type: 'string',
      required: true,
      order: 1
    });

    list.push({
      bootstrapRow: 1,
      bootstrapCol: 'col-md-4',
      key: 'campoint',
      label: 'CampoInt',
      value: 10,
      controlType: 'textbox',
      type: 'integer',
      required: true,
      order: 2
    });

    list.push({
      bootstrapRow: 1,
      bootstrapCol: 'col-md-4',
      key: 'campodec',
      label: 'CampoDec',
      value: 20.20,
      controlType: 'textbox',
      type: 'decimal',
      required: true,
      order: 3
    });

    list.push({
      bootstrapRow: 2,
      bootstrapCol: 'col-md-12',
      key: 'campobol',
      label: 'CampoBol',
      value: true,
      controlType: 'checkbox',
      type: 'boolean',
      order: 4
    });

    list.push({
      bootstrapRow: 3,
      bootstrapCol: 'col-md-12',
      key: 'radio1',
      label: 'Radio-1',
      value: '2',
      controlType: 'radiobox',
      type: 'string',
      order: 5,
      options: [
        {key: '1', value: 'Radio-1'},
        {key: '2', value: 'Radio-2'},
        {key: '3', value: 'Radio-3'},
        {key: '4', value: 'Radio-4'}
      ],
    });

    list.push({
      bootstrapRow: 4,
      bootstrapCol: 'col-md-12',
      key: 'select1',
      label: 'Select-1',
      value: '2',
      controlType: 'dropdown',
      type: 'string',
      order: 6,
      options: [
        {key: '1', value: 'Opzione-1'},
        {key: '2', value: 'Opzione-2'},
        {key: '3', value: 'Opzione-3'},
        {key: '4', value: 'Opzione-4'}
      ],
    });

    return data;
  }

}
