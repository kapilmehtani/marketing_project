import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketingWrapperComponent } from './marketing-wrapper/marketing-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarketingWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'marketing_project';
}
