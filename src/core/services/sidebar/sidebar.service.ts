import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { INavItem } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _onSelectedItem: Subject<INavItem | null>;

  private _sidebarIsOpenInMobile: Subject<boolean>;

  constructor() {
    this._onSelectedItem = new Subject<INavItem | null>();
    this._sidebarIsOpenInMobile = new Subject();
  }

  get sidebarIsOpenInMobile$(): Observable<boolean> {
    return this._sidebarIsOpenInMobile.asObservable();
  }

  public set sidebarIsOpenInMobile(isOpen: boolean) {
    this._sidebarIsOpenInMobile.next(isOpen);
  }

  get onSelectedItem$() {
    return this._onSelectedItem.asObservable();
  }

  setSelectedItem(item: INavItem): void {
    this._onSelectedItem.next(item);
  }
}
