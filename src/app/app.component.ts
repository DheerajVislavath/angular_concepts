import { DataServiceService } from './services/data-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchName: string;

  constructor(private dataService: DataServiceService){}

  ngOnInit(){
      this.dataService.getGithubUsers('matt').subscribe((users) => {
        console.log(users);
      })
  }
}
