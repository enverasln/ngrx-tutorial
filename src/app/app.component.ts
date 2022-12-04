import { Component, OnInit } from '@angular/core';
import { bindCallback, defer, EMPTY, empty, from, fromEvent, of, timer } from 'rxjs';
import { ajax } from "rxjs/ajax";

declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }


}
