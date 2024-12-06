import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../users/user';

@Injectable(
{
    providedIn:'root'
})
@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {
  transform(users: IUser[], sortBy: string): IUser[] {
    return users.sort((a, b) => {
      if (sortBy === 'score') {
        return b.score! - a.score!;
      } else if (sortBy === 'loginCounter') {
        return b.loginCounter! - a.loginCounter!;
      }
      return 0;
    });
  }
}
