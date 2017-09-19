import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h2>Content from App Component</h2>
    <feature-comp></feature-comp>
    <section-comp></section-comp>
  `
})
export class AppComponent { }
