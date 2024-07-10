import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenizer',
  standalone: true
})
export class TokenizerPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {
    let newString = ''
    if(!value) return ''
      if (args.length>0) {
        // return delimited value if args
        for (let i = 0; i < value.length; i++) {
          newString += value[i] + args
        }
        //.slice to remove delimiter at end
        return newString.slice(0,-1) + ' (With Option)'

      } else {
        // default case
        for (let i = 0; i < value.length; i++) {
          newString += value[i] +','
        }
      }
      return newString.slice(0,-1) + ' (With Default)'
    }
    

  

}
