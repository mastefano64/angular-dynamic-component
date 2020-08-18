import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { IResponseFieldMetadata } from '../dynamic-component-module/model/response-metadata';

@Injectable({
  providedIn: 'root',
})
export class Page3MetadataService {

  constructor() { }

  getFormMetadata(id?: number) {
    return of(this.createFormMetadata());
  }

  getDropDownOption(page: string, control: string, value: string) {
    return of(this.createDropDownOption(page, control, value));
  }

  private createFormMetadata() {
    const data: any = {};
    const list: IResponseFieldMetadata[] = [];
    data.hasBootstrap = false;
    data.fields = list;

    list.push({
      key: 'campostr',
      label: 'CampoStr',
      value: 'prova stringa',
      controlType: 'textbox',
      type: 'string',
      required: true,
      order: 1
    });

    list.push({
      key: 'campoint',
      label: 'CampoInt',
      value: 10,
      controlType: 'textbox',
      type: 'integer',
      required: true,
      order: 2
    });

    list.push({
      key: 'campodec',
      label: 'CampoDec',
      value: 20.20,
      controlType: 'textbox',
      type: 'decimal',
      required: true,
      order: 3
    });

    list.push({
      key: 'campobol',
      label: 'CampoBol',
      value: true,
      controlType: 'checkbox',
      type: 'boolean',
      order: 4
    });

    list.push({
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

    list.push({
      key: 'select2',
      label: 'Select-2',
      value: '3',
      controlType: 'dropdown',
      type: 'string',
      order: 7,
      options: [],
    });

    return data;
  }

  private createDropDownOption(page: string, control: string, value: string) {
    let options = [];

    if (value === '1') {
      options = [
        {key: '11', value: 'Opzione-11'},
        {key: '12', value: 'Opzione-12'},
        {key: '13', value: 'Opzione-13'},
        {key: '14', value: 'Opzione-14'}
      ];
    }
    if (value === '2') {
      options = [
        {key: '21', value: 'Opzione-21'},
        {key: '22', value: 'Opzione-22'},
        {key: '23', value: 'Opzione-23'},
        {key: '24', value: 'Opzione-24'}
      ];
    }
    if (value === '3') {
      options = [
        {key: '31', value: 'Opzione-31'},
        {key: '32', value: 'Opzione-32'},
        {key: '33', value: 'Opzione-33'},
        {key: '34', value: 'Opzione-34'}
      ];
    }
    if (value === '4') {
      options = [
        {key: '41', value: 'Opzione-41'},
        {key: '42', value: 'Opzione-42'},
        {key: '43', value: 'Opzione-43'},
        {key: '44', value: 'Opzione-44'}
      ];
    }

    const result = { page, control, options };

    return result;
  }

}
