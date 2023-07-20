import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from './Tasks';
@Pipe({
  name: 'dropdownList',
  pure:false
})
export class DropdownListPipe implements PipeTransform {
  transform(data: Tasks[], selectedOption: string): Tasks[] {
    if (selectedOption === 'Complete')
      return data.filter(task => task.isSelected);
        
    else
      return data.filter(task => task) ;

  }
 
}












