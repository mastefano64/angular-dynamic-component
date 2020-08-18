import { BaseControl } from './base-control';
import { IControlFieldMetadata  } from '../model/control-metadata';

export class ControlCheckBox extends BaseControl implements IControlFieldMetadata  {
  controlType = 'checkbox';
}
