const ChildA = {
  props: ['value'],
  methods: {
    handleChange(event) {
      this.$emit('update:value', event.target.value);
    },
  },
  template: `
    <div>
      <label>Child A:</label>
      <input type="text" :value="value" @input="handleChange">
    </div>
  `,
};

export default ChildA;
