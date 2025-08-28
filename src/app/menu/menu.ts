
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenavContent } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule,MatIconButton, CommonModule,MatButtonModule, MatSidenavContent, MatSidenav, MatIconModule, RouterLink, MatSidenavContainer, MatListModule, RouterOutlet],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {

  @ViewChild(MatSidenav, {static: true})
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.observer.observe(["(max-width: 800px)"])
    .subscribe((res) => {
      if(res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    })
  }
}
