const ChildB = {
  props: ['value'],
  methods: {
    handleClick() {
      this.$emit('update:value', this.value + 1);
    },
  },
  template: `
    <div>
      <label>Child B:</label>
      <button @click="handleClick">Add</button>
      <span>{{ value }}</span>
    </div>
  `,
};

export default ChildB;
