import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
 

@Component({
  selector: 'menu',
  host : {
    '[style.padding]' : "'0'",
    '[style.margin]' : "'0'"
  },
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  tabActive: string = "";

  constructor(private router: Router) { 
    this.listenChangeNavigation();
  }

  ngOnInit() {    
  }
  
  /**
   * Establece la pestaña activa 
   */
  private listenChangeNavigation(){
    this.router.events.subscribe((eventNav) => {
      console.log(eventNav);
      if(eventNav instanceof NavigationEnd){
        this.tabActive = eventNav.url;
      }
    });
  }

}
