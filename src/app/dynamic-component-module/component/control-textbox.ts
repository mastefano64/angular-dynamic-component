import { BaseControl } from './base-control';
import { IControlFieldMetadata  } from '../model/control-metadata';

export class ControlTextBox extends BaseControl implements IControlFieldMetadata  {
  controlType = 'textbox';
}
