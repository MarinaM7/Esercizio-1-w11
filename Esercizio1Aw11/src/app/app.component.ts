import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from './models/album.interface';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Esercizio1Aw11';
  sub!: Subscription;
  albums: Album[] | undefined;
  count = 0;

  constructor(private albumSrv: AlbumService){}

  ngOnInit():void{
    this.getAlbums();
  }

  getAlbums(){
    this.sub = this.albumSrv.get().subscribe((res)=> {
      console.log(res);
      this.albums = res;
      console.log(this.albums)
    })
  }

  cancellaUtente(id:number){
    this.sub = this.albumSrv.delete(id).subscribe(()=>{
      this.albums = this.albums?.filter((album)=> album.id != id)
    });
    console.log(`🚨Utente eliminato numero: ${id}`)
  }

  like(){
    this.albumSrv.like()
    this.count++
  }

}
