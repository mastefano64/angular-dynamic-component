export interface IResponseMetadata {
  hasBootstrap: boolean;
  fields: IResponseFieldMetadata[];
}

export interface IResponseFieldMetadata {
  bootstrapRow?: number;
  bootstrapCol?: string;
  value?: string | number | boolean | Date;
  key?: string;
  label?: string;
  controlType?: string;
  type?: string;
  required?: boolean;
  order?: number;
  options?: {key: string, value: string}[];
}
