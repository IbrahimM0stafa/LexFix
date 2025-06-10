import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInUp', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate(600)
      ])
    ]),
    trigger('slideIn', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateX(-100px)', opacity: 0 }),
        animate(800)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Your Flutter App';
  
  downloadApk() {
    // This will trigger download of your APK file
    const link = document.createElement('a');
    link.href = 'assets/app-release.apk';
    link.download = 'your-app-name.apk';
    link.click();
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }
}