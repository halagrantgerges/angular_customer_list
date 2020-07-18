import { Component } from "@angular/core";
@Component({
  selector: "customer-database",
  template: `
    <customer-table (pushSlug)="recieveSlug($event)"></customer-table>
    <info-table [customerSlug]="communicateSlug"></info-table>
  `,
})
export class AppComponent {
  communicateSlug: string = "";
  recieveSlug(slug: string) {
    this.communicateSlug = slug;
  }
}
