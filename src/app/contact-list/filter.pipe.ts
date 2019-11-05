import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log(items);
    console.log(searchText);
    
    if(!items) return [];
    if(!searchText) return items;
    return items.filter(contact => contact.name.includes(searchText.toLowerCase()));

searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.toLowerCase().includes(searchText);

    });
   }
}