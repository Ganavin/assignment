import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorttable'
})
export class SorttablePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(records :Array<Object>, args?: any): any {
    if(records != null){
      return records.sort(function(a, b){
            if (a[args.property] === '' || a[args.property] === null || typeof a[args.property] === 'undefined') {
            return 1 * args.direction;
            }
            if (b[args.property] === '' || b[args.property] === null || typeof b[args.property] === 'undefined') {
            return -1 * args.direction;
            }
          if(a[args.property] < b[args.property]){
            return -1 * args.direction;
          }
          else if( a[args.property] > b[args.property]){
            return 1 * args.direction;
          }
          else{
            return 0;
          }
        });
    }
    };

}
