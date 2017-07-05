import { Component, OnInit } from '@angular/core';
import * as Electron from 'electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    
  appVer = Electron.remote.app.getVersion();  
  
  constructor() { }

  ngOnInit() {
  }

}
