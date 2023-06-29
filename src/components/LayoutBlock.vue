<template>
    <div v-bind:style="flex_item"><p>{{ title }}</p></div>
</template>

<script>
export default {
  name: 'LayoutBlock',
  props: {
    title: String,
    width: String,
    height: String,
  },
  computed: {
    flex_item() {
      return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: this.width,
            height: this.height,
            backgroundColor: 'blue',
            textAlign: 'center'
          }
    }
  }
}
</script>

<style>

</style>