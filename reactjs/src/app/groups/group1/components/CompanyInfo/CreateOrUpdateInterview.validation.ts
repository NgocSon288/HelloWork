import { L } from 'shared/lib/abpUtility';

const rules = {
  JSname: [{ required: false, message: L('ThisFieldIsRequired') }],
  RMname: [{ required: false, message: L('ThisFieldIsRequired') }],
  address: [{ required: true, message: L('ThisFieldIsRequired') }],
  description: [{required: false, message: L('ThisFieldIsRequired') }],
  date: [{ required: true, message: L('ThisFieldIsRequired') }],
};

export default rules;
