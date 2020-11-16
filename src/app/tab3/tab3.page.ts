import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class AlbumsPage implements OnInit {
  
  results: Observable<any>;

  busqueda : string = '';
  constructor(private albumService: AlbumService) {
    this.results = this.albumService.allAlbums();
  }

  ngOnInit() {
  }
  
  cambio(){
    if(this.busqueda===""){
      this.results = this.albumService.allAlbums();
    }
    else{
      this.results = this.albumService.getAlbums(this.busqueda);
    }
    
  }
}