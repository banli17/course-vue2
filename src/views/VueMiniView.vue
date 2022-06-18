<template>
  <div id="vue-mini-view"></div>
</template>
<script>
import VueMini from "../plugins/vue-mini/index";

export default {
  methods: {
    insertHtml() {
      document.querySelector("#vue-mini-view").innerHTML = `
		<h1>差值表达式</h1>
		<h3>{{ msg }}</h3>
		<h3>{{ count }}</h3>
		<h1>v-text</h1>
		<div v-text="msg"></div>
		<h1>v-model</h1>
		<input type="text" v-model="msg" />
		<div>{{ count }}</div>
		<div>age: {{ person.age }}</div>
			`;
    },
    initVueMini() {
      let vm = new VueMini({
        el: "#vue-mini-view",
        data: {
          msg: "hello world",
          count: 100,
          person: { name: "zs" },
        },
        mounted() {
          this.person.age = 1; // Object.defineProperty 新增属性无效
          // this.$set(this.person, 'age', 12)
        },
      });

      vm.text = "hello";
      // vm.count = 2
      // vm.person.age = 12
      // vm.$set(vm.person, 'age', '12')
    },
  },
  mounted() {
    this.insertHtml();
    this.initVueMini();
  },
};
</script>
