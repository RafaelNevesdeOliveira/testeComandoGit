import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagesExemplo'
})
export class PagesExemploPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
