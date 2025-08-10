import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ClienteleComponent } from '../clientele/clientele.component';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-marketing-wrapper',
  standalone: true,
  imports: [NavbarComponent, ClienteleComponent, FeaturesComponent],
  templateUrl: './marketing-wrapper.component.html',
  styleUrl: './marketing-wrapper.component.scss'
})
export class MarketingWrapperComponent {

}
