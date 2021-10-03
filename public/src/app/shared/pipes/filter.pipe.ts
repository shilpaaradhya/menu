// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string , searchType:string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    else;
    searchText = searchText.toLocaleLowerCase()
    if( searchText == "v" || searchText == "n"){
      return items.filter(it => {
        return it.type.toLowerCase().includes(searchText)
      });
    }
    else;
    return items.filter(it => {
      return it.dish.toLowerCase().includes(searchText)
    });
  }
  
}