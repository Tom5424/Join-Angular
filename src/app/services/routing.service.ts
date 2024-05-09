import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class RoutingService {
  url: string | null = '';


  savePreviousUrl(url: string) {
    localStorage.setItem('previousUrl', url);
  }


  loadPreviousUrl(url: string | null) {
    url = localStorage.getItem('previousUrl');
    this.url = url;
  }
}
