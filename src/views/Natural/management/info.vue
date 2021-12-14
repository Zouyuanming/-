<template>
  <panel-widget :title="title" @close="closebox">
      <div class="contents">
           {{ content }}
      </div>
  </panel-widget>
</template>
<script>
export default {
  name: "info",
  computed:{
      content(){
          return this.$store.state.descriptions
      },
      title(){
          return this.$store.state.eventName
      }
  },
  data() {
    return {
      close: () => {},
    };
  },
  methods:{
      closebox(){
        this.$emit("closeinfo")
      }
  }
};
</script>
<style>
.contents{
  height: 200px;
    max-height: 400px;
    width: 300px !important;
    background-color: rgb(255, 255, 255)  !important;
    z-index: 110 !important;
}
</style>
