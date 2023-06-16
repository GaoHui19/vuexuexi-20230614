<template>
    <div>
      <child-a v-model="message"></child-a>
      <child-b :value="count" @update:value="count = $event"></child-b>
      <p>Message from Child A: {{ message }}</p>
      <p>Value from Child B: {{ count }}</p>
      <ChildA></ChildA>
      <ChildB></ChildB>
    </div>
  </template>
  
  <script>
  import ChildA from '../components/childs/ChildA.js';
  import ChildB from '../components/childs/ChildB.js';
  
  export default {
    components: {
      ChildA,
      ChildB,
    },
    data() {
      return {
        message: '',
        count: 0,
      };
    },
  };
  </script>
  