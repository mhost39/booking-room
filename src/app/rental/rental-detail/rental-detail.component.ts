import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental :Rental;

  constructor(private rout : ActivatedRoute ,private rentalService : RentalService) { }

  ngOnInit() {
    this.rental = new Rental;
    this.rout.params.subscribe(
        (param)=>{
          this.getRental( param['rentalID']);
         
        }
    )
  }

  getRental (rentalID : string){
    this.rentalService.getRentalByID(rentalID).subscribe(
      (rental :Rental)=>{
        this.rental = rental;
      }
    )

  }

}
