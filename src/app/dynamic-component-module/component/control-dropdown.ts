import { BaseControl } from './base-control';
import { IControlFieldMetadata  } from '../model/control-metadata';

export class ControlDropDown extends BaseControl implements IControlFieldMetadata  {
  controlType = 'dropdown';
}
