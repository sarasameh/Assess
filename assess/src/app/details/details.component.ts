import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../git.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  owner:string ="";
  repName:string = '';
  detailsContainer:any='';


  constructor( private actRoute:ActivatedRoute,  _GitService:GitService) { 
   // this.actRoute.params.subscribe( params => this.detailsContainer.push(params));
   this.actRoute.params.subscribe( params => {
    _GitService.getDetails(params.owner , params.repname ).subscribe( res => this.detailsContainer = res);

   });





  }

  ngOnInit() {

  }

}

