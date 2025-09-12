import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, CommonModule,MatButtonModule, MatIconModule, RouterLink, MatListModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu{


  constructor( public s: SharedService) {

  }

}
