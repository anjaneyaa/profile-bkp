import { Component, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  //constructor(private router: Router, private route: ActivatedRoute, private elementRef: ElementRef) { }

  // ngOnInit(): void {
  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //       return;
  //     }
  //     const fragment = this.route.snapshot.fragment;
  //     if (fragment) {
  //       const element = document.getElementById(fragment);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //       }
  //     }
  //   });
  //   this.route.snapshot.fragment = "";
  // }

}

