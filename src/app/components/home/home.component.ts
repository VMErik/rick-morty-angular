import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/Character';
import { RmService } from 'src/app/services/rm-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  characters: Character[] =  [];
  pageNumber :  number = 1;


  constructor(private rmService: RmService , private router: Router) {
    this.getCharacter();
  }

  ngOnInit(): void {
  }

  getCharacter(){
    this.rmService.getCharacters().subscribe( (data :  Character[]) =>  {
      this.characters = data;
    });
  }

  getNext(){
    this.pageNumber ++ ;
    this.rmService.getCharactersByPage(this.pageNumber).subscribe( (data :  Character[]) =>  {
      this.characters = data;
    });
  }

  getPrevious(){
    this.pageNumber -- ;
    this.rmService.getCharactersByPage(this.pageNumber).subscribe( (data :  Character[]) =>  {
      this.characters = data;
    });
  }

  viewCharacter(character :  Character){
    this.router.navigate(['/detail' , character.id]);
  }

}
