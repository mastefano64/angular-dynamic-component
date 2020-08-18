import { BaseControl } from './base-control';
import { IControlFieldMetadata } from '../model/control-metadata';

export class ControlRadioBox extends BaseControl implements IControlFieldMetadata  {
  controlType = 'radiobox';
}
