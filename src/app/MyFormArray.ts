import {FormArray} from '@angular/forms';
import {EmptyValueAware} from './BlankValueAware';
import {UserModificationAware} from './UserModificationAware';
export class MyFormArray extends FormArray implements EmptyValueAware, UserModificationAware {
  public get nonBlankValue() {
    const r = this.controls.map((c: any) => {
      const v = c['nonBlankValue'];
      return v == null ? null : v;
    }).filter((v: any) => v != null);
    return r.length > 0 ? r : null;
  };

  public get modified() {
    return this.controls.some((c: any) => c['modified']);
  }
}
