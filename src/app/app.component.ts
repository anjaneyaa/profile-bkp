import { Component, HostListener } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anjaneyaa.github.io';
  showButton: boolean = false;
  present: number = 0;

  ngOnInit(): void {
    let today = new Date();
    this.present = (today.getFullYear() - 2019);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 300) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToHome() {
    const targetElement = document.getElementById('home');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  scrollToAbout() {
    const targetElement = document.getElementById('about');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  scrollToExperience() {
    const targetElement = document.getElementById('experience');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  scrollToProject() {
    const targetElement = document.getElementById('project');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
  scrollToContact() {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
