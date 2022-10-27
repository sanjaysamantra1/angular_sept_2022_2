import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
})
export class PrefixPipe implements PipeTransform {
  transform(name: any, gender: any) {
    if (gender == 'male') {
      return 'mr. ' + name;
    } else {
      return 'miss. ' + name;
    }
  }
}
