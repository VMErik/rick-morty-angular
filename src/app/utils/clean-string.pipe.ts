import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanString'
})
export class CleanStringPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('https://rickandmortyapi.com/api/episode/' , '');
  }

}
