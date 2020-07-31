import { Component, OnInit, Input, AfterViewInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, DoCheck {
  @Input('drawer') drawer;
  public titulo = false
  constructor() { 
  }

  ngAfterViewInit(){
    
  }

  ngDoCheck(){
    if(this.drawer._opened){
      this.titulo = false
    }else{
      this.titulo = true
    }
  }

  ngOnInit(): void {
    
  }

}
