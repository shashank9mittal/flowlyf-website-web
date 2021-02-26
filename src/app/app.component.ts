import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { MetaTagService } from './shared/services/meta-tag/meta-tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flowlyf | Furniture and Lifestyle, reimagined!';

  constructor(private router: Router, private metaTagService: MetaTagService) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.metaTagService.updateMetaTags(event.url);
        this.refreshAllScripts();
        window.scroll(0, 0);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  private refreshAllScripts() {
    var evt = new CustomEvent('load');
    setTimeout(() => {
      window.dispatchEvent(evt);
    }, 100);
  }
}