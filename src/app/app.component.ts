import {Component} from '@angular/core';
import {FormArray} from '@angular/forms';
import {MyFormControl} from './MyFormControl';
import {MyFormGroup} from './MyFormGroup';
import {MyFormArray} from './MyFormArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  group = new MyFormGroup({
    f1: new MyFormControl(),
    f2: new MyFormGroup({
      ff1: new MyFormControl(),
      ff2: new MyFormControl()
    }),
    f3: new MyFormArray([new MyFormControl()])
  });

  public add() {
    const a = this.group.get('f3') as FormArray;
    a.push(new MyFormControl());
  }

  public remove() {
    const a = this.group.get('f3') as FormArray;
    a.removeAt(a.length - 1);
  }
}
