import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  title = 'LexFix - Dyslexia Support App';
  
  // Screenshot carousel properties
  currentSlide = 0;
  totalScreenshots = 13; // Based on your file structure (1.jpg to 13.jpg)
  screenshotsPerSlide = 3;
  totalSlides = 0;
  screenshotSlides: any[][] = [];
  
  // Mobile menu state
  isMobileMenuOpen = false;

  // All screenshots data (removed caption property)
  allScreenshots = [
    { src: 'assets/images/29.jpg', alt: 'LexFix login' },
    { src: 'assets/images/1.jpg', alt: 'Learner Home Screen' },
    { src: 'assets/images/2.jpg', alt: 'LexFix Courses' },
    { src: 'assets/images/3.jpg', alt: 'LexFix Letters Exercise' },
    { src: 'assets/images/4.jpg', alt: 'LexFix Letters Game' },
    { src: 'assets/images/5.jpg', alt: 'LexFix Letters Exercise' },
    { src: 'assets/images/6.jpg', alt: 'LexFix Letters Game' },
    { src: 'assets/images/7.jpg', alt: 'LexFix Letters Game' },
    { src: 'assets/images/8.jpg', alt: 'LexFix Letters Game' },
    { src: 'assets/images/9.jpg', alt: 'LexFix Words Exercise' },
    { src: 'assets/images/10.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/11.jpg', alt: 'LexFix Level' },
    { src: 'assets/images/12.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/13.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/14.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/15.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/28.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/16.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/17.jpg', alt: 'LexFix Words Game' },
    { src: 'assets/images/18.jpg', alt: 'LexFix Story Stage' },
    { src: 'assets/images/19.jpg', alt: 'LexFix Story Stage' },
    { src: 'assets/images/20.jpg', alt: 'LexFix Story Stage' },
    { src: 'assets/images/21.jpg', alt: 'LexFix Gaurdian' },
    { src: 'assets/images/22.jpg', alt: 'LexFix Gaurdian' },
    { src: 'assets/images/23.jpg', alt: 'LexFix Gaurdian' },
    { src: 'assets/images/24.jpg', alt: 'LexFix Gaurdian' },
    { src: 'assets/images/25.jpg', alt: 'LexFix Gaurdian' },
    { src: 'assets/images/26.jpg', alt: 'LexFix Gaurdian' },
    { src: 'assets/images/27.jpg', alt: 'LexFix Intro' },
  ];

  ngOnInit() {
    this.calculateScreenshotsLayout();
    this.initializeScreenshots();
  }

  calculateScreenshotsLayout() {
    this.screenshotsPerSlide = window.innerWidth <= 768 ? 1 : 3;
    this.totalScreenshots = this.allScreenshots.length;
    this.totalSlides = Math.ceil(this.totalScreenshots / this.screenshotsPerSlide);
  }

  initializeScreenshots() {
    this.screenshotSlides = [];
    for (let i = 0; i < this.totalScreenshots; i += this.screenshotsPerSlide) {
      const slide = this.allScreenshots.slice(i, i + this.screenshotsPerSlide);
      this.screenshotSlides.push(slide);
    }
  }

  // Navigation methods
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Screenshot carousel methods
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.updateCarousel();
  }

  goToSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
    this.updateCarousel();
  }

  private updateCarousel() {
    const container = document.getElementById('screenshotsContainer');
    if (container) {
      const translateX = -this.currentSlide * 100;
      container.style.transform = `translateX(${translateX}%)`;
    }
  }

  // Download functionality
  downloadApk() {
    window.open(
      'https://github.com/IbrahimM0stafa/LexFix/releases/latest/download/LexFix.apk',
      '_self'
    );
  }

  // Feature data
  features = [
    {
      icon: '👶',
      title: 'Child-Only Sign-In',
      description: 'Kids can sign in independently using a simple, friendly interface with direct access to learning games in a safe environment.'
    },
    {
      icon: '👪',
      title: 'Guardian-Linked Sign-In',
      description: 'Parents can create linked accounts to monitor progress, set learning goals, and view detailed improvement reports.'
    },
    {
      icon: '📊',
      title: 'Progress Monitoring',
      description: 'Track reading and spelling improvements with comprehensive reports and analytics for guardians.'
    },
    {
      icon: '🎯',
      title: 'Customizable Goals',
      description: 'Set personalized learning objectives and adjust difficulty levels to match each child\'s unique needs.'
    },
    {
      icon: '🎮',
      title: 'Gamified Learning',
      description: 'Engaging games and challenges that make learning fun while building essential literacy skills.'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Support',
      description: 'Advanced error detection and personalized feedback to help children learn from their mistakes.'
    }
  ];

  // Mission features
  missionFeatures = [
    'Interactive reading games',
    'Spelling correction tools',
    'AI-powered error detection',
    'Fun challenges and rewards'
  ];

  // Installation steps
  installationSteps = [
    { number: 1, text: 'Download the APK file' },
    { number: 2, text: 'Enable "Unknown Sources" in Settings' },
    { number: 3, text: 'Open the downloaded file' },
    { number: 4, text: 'Follow installation prompts' }
  ];

  // App requirements
  requirements = [
    'Android 10.0 (API level 21) or higher',
    'Enable "Install from unknown sources"',
    'At least 110MB free storage'
  ];
}