import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class AlbumService {
  
  
  constructor(private http: HttpClient) { }
  

  getAlbums(id: string): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?id=${encodeURI(id)}`);
  }

  allAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments/'); 
  }
}