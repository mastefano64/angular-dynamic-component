
export type TypeValue = string | number | boolean | Date;

export class BaseControl {
  bootstrapRow: number;
  bootstrapCol: string;
  value: TypeValue;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];

  constructor(options: IControlBaseOptions = {}) {
    this.bootstrapRow = options.bootstrapRow;
    this.bootstrapCol = options.bootstrapCol;
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.required = !!options.required;
    this.order = (options.order === undefined) ? 1 : options.order;
    this.options = options.options || [];
  }
}

export interface IControlBaseOptions {
  bootstrapRow?: number;
  bootstrapCol?: string;
  value?: TypeValue;
  key?: string;
  label?: string;
  controlType?: string;
  type?: string;
  required?: boolean;
  order?: number;
  options?: {key: string, value: string}[];
}
