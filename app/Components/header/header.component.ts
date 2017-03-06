import { Component, OnInit } from '@angular/core';

import { animateFactory } from 'ng2-animate';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [animateFactory(300, 200, 'linear')],
})
export class HeaderComponent {

  constructor() { }

}
