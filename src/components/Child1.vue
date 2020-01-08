<template>
  <div>
    <slot name="display"></slot>
    <input type="text" placeholder="type here" v-on:keyup.enter="submit" v-model="textfield" />
    <slot name="title"></slot>
    <h1>content from Child1.vue | {{text}}</h1>
    <slot name="text"></slot>
    <child2 :textfield="textfield">
      <slot name="display"></slot>
      <h1 slot="title">Child2 slot</h1>
      <p slot="text">this is a text slot comming from Child1.vue</p>
    </child2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Child2 from "./Child2.vue";
@Component({
  components: {
    Child2
  }
})
export default class Child1 extends Vue {
  textfield = "";
  @Prop({ required: true }) private text!: string;

  submit(e: any) {
    alert("submitted");
    this.textfield = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
