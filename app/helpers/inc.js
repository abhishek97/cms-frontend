import { helper } from '@ember/component/helper';

export function inc(params/*, hash*/) {
  return params.reduce((acc, val) => acc + val);
}

export default helper(inc);
