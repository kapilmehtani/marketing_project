import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {


  data = [{icon: '', heading: 'Infinite Dwonload', description:"Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more"}, {icon: '', heading:'Purely Handcarfted', description: 'No AI, no generic images. Crafted from various chemicals, fabrics, clouds or evenparticles as small as dust'}, {icon: '', heading:'All are under licensed', description: 'the only limitation with these abstract images is that you are not able to sell them in any form, weather digital or hard copy.'}, {icon: '', heading:'Cancel Anytime', description: 'Subscribe at your own pace and cancel when you feel its enough'}, {icon: '', heading:'Empowering for Teams', description: 'We support multiple seats at once, requiring only a single payment'}, {icon: '', heading:'No Limitations', description: 'Use as many as you want, from Dribble presentations to Powerpoint presentations'}]

  featuresArray = [{icon: '', heading: '5K Resoltuion Support', description:'All iamges boast a minimum of 5K resolution ensuring crisp, crystal clear quality'}, {icon: '', heading: 'From water to glass', description:'We offer a wide range of abstractions'}, {icon: '', heading: 'Portrait or landscape', description:'Effortlessly adapt your images for any platform'}]

}
