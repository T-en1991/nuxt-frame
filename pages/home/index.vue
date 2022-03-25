<template>
<div>home</div>
</template>

<script>
export default {
  name: "index",
  head () {
    return {
      title: 'gute的home的title',
      meta: [
        { hid: 'description', name: 'description', content: '阿拉丁皮皮马特，gute的home的description' },
        { hid: 'keywords', name: 'keywords', content: '阿拉丁皮皮马特，gute的home的keyWords' }
      ]
    }
  },
  mounted() {
    console.log('这是home');
  }
}
</script>

<style scoped>

</style>
