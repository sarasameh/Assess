import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(repo:any, term:string){
    return repo.filter(function(repo){
      return repo.name.includes(term)
    });
  }

}
