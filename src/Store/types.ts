// actions/types.ts
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';



export interface Item {
    id: number;
    text: string;
    Model:string;
    Color:string;
    YearOfManufacture:string;
    InsuranceVaildUpto:string;
    Kms:string;
    Location:string;
    NoOfOwners:string;
    Transmission:string;
    ExternalFitments:string;
    Photo:string
  
  }