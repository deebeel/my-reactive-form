export interface EmptyValueAware {
  nonBlankValue: any;
}

/* tslint:disable:curly */
export function isEmpty(v: any) {
  if (v === '' || v == null) return true;
  if (Array.isArray(v)) return v.every(isEmpty);
  if (Object.prototype.toString.call(v) === '[object Object]') return Object['values'](v).every(isEmpty);
  return false;
}
/* tslint:enable:curly */

