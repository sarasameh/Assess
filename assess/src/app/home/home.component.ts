import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  toggle:boolean = false;
  term:string ;


  toggleTable(){
    this.toggle = !this.toggle
  }


repoContainer = []
  constructor( private _GitService:GitService) {

   //_GitService.getRepo(this.term).subscribe( repo => this.repoContainer = repo.items);
   }
   changeTerm(t)
   {
     this.term = t;
     console.log(this.term);

     if(this.term  != '' && this.term  != undefined)
     {

      this._GitService.getRepo(this.term).subscribe( repo => this.repoContainer = repo.items);


     }
   }
  ngOnInit() {
  }

}
