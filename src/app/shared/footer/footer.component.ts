import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  creator = 'Devanshu Goyal';
  today: number = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
