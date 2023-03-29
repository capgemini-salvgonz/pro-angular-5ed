

export class Codes {
  sourceCodes: string[] = [
`
import { Directive, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[inactivity]'
})
export class InactivityDirective {

  @Input('alertAt')
  timeout: number = 60000;

  @Input('inactivity')
  lastTimeStamp: number;

  @Input('manageTimeout')
  manageTimeout: any;

  constructor(private element: ElementRef) {
    this.lastTimeStamp = new Date().getTime();
  }

  checkInactivity() {
    setInterval(() => {
      const time = new Date().getTime() - this.lastTimeStamp;
      if (time > this.timeout) {
        console.log(this.timeout, "Millisegundos de inactividad, detectado con una Directiva");
        this.lastTimeStamp = new Date().getTime();
        this.manageTimeout();
      }
    }, 1000);
  }

  ngOnInit() {
    console.log("ngOnInit timestamp", this.lastTimeStamp);
    console.log("ngOnInit timeout", this.timeout);
    this.checkInactivity();
  }
}
`,
`
<div 
  [inactivity]="timeStamp" 
  [alertAt]="timeout"
  [manageTimeout]="controlTimeout"
  (mousemove)="onMouseMove()" >
  <navigator></navigator>
</div>
`,
  ];
}