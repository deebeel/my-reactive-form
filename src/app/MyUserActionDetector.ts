import {Directive, Inject, NgZone} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
@Directive({
  selector: '[formControlName]'
})
export class MyUserActionDetectorDirective {
  constructor(zone: NgZone, @Inject(NG_VALUE_ACCESSOR) cvas: ControlValueAccessor[], ctrl: NgControl) {
    const cva = cvas[0];
    if (cva === null) {
      throw Error('Value accessor has not been defined');
    }
    zone.runOutsideAngular(() => setTimeout(() => {
      const origOnChange = cva['onChange'];
      let initialValue = null;
      cva['onChange'] = function (newValue: any) {
        const v = newValue === '' ? null : newValue;
        if (!ctrl.control.dirty) {
          initialValue = ctrl.control.value;
        }
        ctrl.control['modified'] = v !== initialValue;
        origOnChange.call(cva, v);

      };
      const origReset = ctrl.control.reset;
      ctrl.control.reset = function () {
        initialValue = null;
        this['modified'] = false;
        origReset.apply(this, arguments);
      };
    }, 0));


  }

}
