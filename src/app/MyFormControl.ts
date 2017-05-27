import {FormControl} from '@angular/forms';
import {EmptyValueAware, isEmpty} from './BlankValueAware';
import {UserModificationAware} from './UserModificationAware';
export class MyFormControl extends FormControl implements EmptyValueAware, UserModificationAware {
  public modified = false;
  constructor(private blankCheck: (v: any) => boolean = isEmpty, s?: any, v?: any, b?: any) {
    super(s, v, b);
  }

  public get nonBlankValue(): any {
    return this.blankCheck(this.value) ? null : this.value;
  }

  public setValue(value: any, p: any): void {
    this.updatePristineValue(() => super.setValue(value, p));
  }

  public reset(formState?: any, options?: any): void {
    super.reset(formState, options);
  }



  private updatePristineValue(fn: any) {
    fn();
  }
}

MyFormControl.prototype['_applyFormState'] = function _applyFormState(value: any) {
  this.updatePristineValue(() => FormControl.prototype['_applyFormState'].call(this, value));
};
