import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  concepts : string[];

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: ''
    };

    this.concepts = ['Components', 'Directives', 'Pipes', 'Routes', 'Observables', 'Bindings', 'Dependency injection',  'Services']
  }

  ngOnInit(): void {
  }

}
