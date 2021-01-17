import { L } from 'shared/lib/abpUtility';

const rules = {
  name: [{ required: true, message: L('ThisFieldIsRequired') }],
  address: [{ required: true, message: L('ThisFieldIsRequired') }],
  email: [{ type: 'email', required: true, message: L('ThisFieldIsRequired') }],
  phoneNumber: [{ required: true, message: L('ThisFieldIsRequired') }],
  website: [{ required: true, message: L('ThisFieldIsRequired') }],
  expertise: [{ required: true, message: L('ThisFieldIsRequired') }],
  headcountLimit: [{required: true, message: L('ThisFieldIsRequired') }],

};

export default rules;
