const rules = {
  name: [
    {
      required: true,
      message: 'Không được để trống',
    },
    {
      min: 10,
      message: 'Vị trí công việc phải nhiều hơn 10 kí tự',
    }
  ],
  expertises: [
    {
      required: true
    }
  ],
  description: [
    {
      required: false
    }
  ]
};

export default rules;
