import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';

  private dataService = inject(DataService);
  public comments: any;

  public getComments(id: number): void {
    this.dataService.getComments(id).subscribe(comments => this.comments = comments);
  }
}
