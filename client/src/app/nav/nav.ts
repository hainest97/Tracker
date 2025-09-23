import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, NgClass],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  isCollapsed = true;
  isDropped = false;
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggleDropdown(){
    this.isDropped = !this.isDropped;
  }

}
