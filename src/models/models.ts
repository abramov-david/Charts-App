export interface Idata {
  id?: string;
  year: number;
  effectiveRent: number;
  startingRent: number;
}

export interface Imodal {
  isModal: boolean;
  isCreate: boolean;
}

export interface sendData {
  id: string;
}

export interface DataState {
  loading: boolean;
  sending: boolean;
  updating: boolean;
  error: string;
  isError: boolean;
  items: Idata[];
  updatedItem?: Idata;
}
