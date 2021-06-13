import { Component, OnInit } from '@angular/core';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public faDiceD20 = faDiceD20;
  public faDiceD6 = faDiceD6;
  public faCube = faCube;
  constructor() { }

  ngOnInit(): void {
  }

}
