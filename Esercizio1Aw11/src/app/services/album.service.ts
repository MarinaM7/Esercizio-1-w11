import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/album.interface';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  get(){
    let u = this.http.get<Album[]>('http://localhost:3000/album');
    return u
  }

  delete(id:number){
    return this.http.delete(`http://localhost:3000/album/${id}`);
  }

  // funzione like

  likesubj = new Subject;

  like(){
    this.likesubj.next(null)
  }

}
