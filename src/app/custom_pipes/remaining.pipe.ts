import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(input: string, maxlength: number) {
    return maxlength - input.length;
  }
}
