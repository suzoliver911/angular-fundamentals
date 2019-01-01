import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      <h1 [innerHTML]="title"></h1>
      <img class="logo" [src]="logo" />
    </div>
    <div class="button-in">
      <pre>One-way Binding w/Event Flow</pre>
      <button (click)="handleClick()">Change name</button>
      <input
        type="text"
        [value]="name"
        placeholder="name"
        (blur)="handleBlur($event)"
        (input)="handleInput($event)"
      />
      <div class="input-text">{{ name }}</div>
    </div>
    <div class="button-in">
      <pre>One-way Databinding w/ngModelChange</pre>
      <button (click)="handleClick2()">Change name</button>
      <input
        type="text"
        [ngModel]="name2"
        (ngModelChange)="handleChange2($event)"
      />
      <div class="input-text">{{ name2 }}</div>
    </div>
    <div class="button-in">
      <pre>Two-way Databinding</pre>
      <button (click)="handleClick3()">Change name</button>
      <input type="text" [(ngModel)]="name3" />
      <div class="input-text">{{ name3 }}</div>
    </div>
    <div class="button-in">
      <pre>Template #ref Variables</pre>
      <button (click)="handleRefClick(username.value)">Get Value</button>
      <input type="text" #username />
      <div class="input-text">{{ refName }}</div>
    </div>
    <div>
      <pre>Interpolation Fun</pre>
      <div>{{ numberOne + numberTwo }}</div>
      <div>{{ isHappy ? ':)' : ':(' }}</div>
      <h2>{{ title }}</h2>
    </div>
  `,
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  logo: string = 'img/logo.svg';
  name: string = 'Suz';
  name2: string = 'Thor';
  name3: string = 'Arlo';
  refName: string = '<username>';

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Oliver';
  }

  handleRefClick(value: string) {
    this.refName = value;
  }

  handleClick2() {
    this.name2 = 'Odinson';
  }
  handleClick3() {
    this.name3 = 'The Good Dinosaur';
  }

  handleChange(value: string) {
    this.name = value;
  }

  handleChange2(value: string) {
    this.name2 = value;
  }
}
