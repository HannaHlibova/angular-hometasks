export default interface IConverter {
  num: number;
  str: string;

  ConvertTo(num:number):string;
  ConvertFrom(str:string):number;
}