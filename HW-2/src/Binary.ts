import IConverter from './IConverter';

export default class Binary implements IConverter {
  public num: number;
  public str: string;

  public ConvertTo(num:number):string {
    let str: string = '';
    let intNum: number = num;

    while (intNum > 0) {
      if (intNum % 2 === 0) {
        str = `0${str}`;
      } else {
        str = `1${str}`;
      }

      intNum = (intNum - (intNum % 2)) / 2;
    }

    return str;
  }

  public ConvertFrom(str:string):number {
    const binStr:any = str.split('').reverse().join('');
    let num: number = 0;
    let binStrLength: number = binStr.length;
    let counter: number = binStrLength - 1;

    for (let i:number = 0; i < binStrLength; i++) {
      num += binStr[i] * Math.pow(2, counter);
      counter -= 1;
    }

    return num;
  };
}