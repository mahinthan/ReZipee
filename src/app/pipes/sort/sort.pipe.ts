import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  compare(a, b) {
    if (a.last_nom < b.last_nom)
      return -1;
    if (a.last_nom > b.last_nom)
      return 1;
    return 0;
  }

  transform(value: any, args?: any): any {
    if (value.length === 0) return value;
    else {
      return value.sort(function (a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  }

}