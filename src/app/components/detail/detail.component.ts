import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Character } from 'src/app/models/Character';
import { Episode } from 'src/app/models/Episode';
import { RmService } from 'src/app/services/rm-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  character: number = 0;
  infoCharacter?: Character;

  episodeSelected?: Episode;

  constructor(private routerActive: ActivatedRoute , private router: Router , private rmService: RmService) {
    this.routerActive.params.subscribe(params => {
      this.character =  params['id'];
      this.getCharacterInfo();
    });
   }

  ngOnInit(): void {
  }
  getCharacterInfo(){
    this.rmService.getCharacterById(this.character).subscribe(
      data=> {
         this.infoCharacter = data;
      }
    )
  }

  moreInformation(item: String){
    console.log(item);
    if (item.includes('rickandmortyapi.com/api/episode/')){
      console.log(item.replace('rickandmortyapi.com/api/episode/',''))
      let episode: number = parseInt( item.replace('https://rickandmortyapi.com/api/episode/',''));
      this.rmService.getEpisode(episode).subscribe(
        data =>{
          this.episodeSelected = data;
          console.log(this.episodeSelected);
        }
      );
    }
   
  }
}
