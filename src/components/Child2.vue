<template>
  <div class="main">
    <slot name="title"></slot>
    <div slot="display">
      <p>display field : {{textfield}}</p>
      <v-btn>click</v-btn>
    </div>
    <slot name="text"></slot>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Child2 extends Vue {
  @Prop() private textfield!: string;
}
</script>
<style lang="scss" scoped>
</style>