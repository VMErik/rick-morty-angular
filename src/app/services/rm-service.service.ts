import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RmService {

  private baseUrl: string = 'https://rickandmortyapi.com/api'
  
  constructor( private http: HttpClient) {
    console.log('Rick and Morty Service Start');
  }

  getCharacters(){
    const url = `${this.baseUrl}/character`; 
    return this.http.get(url).pipe(
        map( (data : any) => {
            return data.results;
        }
      )
    );
  }

  getCharactersByPage(page:number){
    const url = `${this.baseUrl}/character?page=${page}`; 
    return this.http.get(url).pipe(
        map( (data : any) => {
            return data.results;
        }
      )
    );
  }

  getCharacterById(id: number){
    const url = `${this.baseUrl}/character/${id}`;
    return this.http.get(url);
  }


  getEpisode(id:number){
    const url = `${this.baseUrl}/episode/${id}`;
    return this.http.get(url);
  }

}
