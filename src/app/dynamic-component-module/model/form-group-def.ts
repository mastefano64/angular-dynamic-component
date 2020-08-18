import { FormGroup } from '@angular/forms';
import { IControlFieldMetadata } from './control-metadata';

export class FromGroupDef {
  form = new FormGroup({});
  hasBootstrap = false;
  controls: IControlFieldMetadata[] = [];
  group: any = [];
}
