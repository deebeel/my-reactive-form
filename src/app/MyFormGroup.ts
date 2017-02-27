import {FormGroup} from '@angular/forms';
import {EmptyValueAware} from './BlankValueAware';
import {UserModificationAware} from './UserModificationAware';
export class MyFormGroup extends FormGroup implements EmptyValueAware, UserModificationAware {


  public get nonBlankValue(): any {
    return Object.keys(this.controls).reduce((acc: any, controlName: any) => {
      const control = this.controls[controlName];
      const v = control['nonBlankValue'];
      if (v != null) {
        acc = acc || {};
        acc[controlName] = v;
      }
      return acc;
    }, null);
  }

  public get modified() {
    return Object.keys(this.controls)
      .some((k: string) => this.controls[k]['modified']);
  }
}
