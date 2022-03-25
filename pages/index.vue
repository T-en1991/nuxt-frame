<template>
  <div>
    <Tutorial/>
    <nuxt></nuxt>
    <button @click="getTest">getTest</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{

    }
  },

   asyncData({$request}){
    //读取跨域数据
    $request.test.getTest().then(res=>{
      console.log(res.data)
      return {
      }
    })
  },
  methods:{
    getTest(){
      this.$request.test.getTest().then(res=>{
        console.log(res.data)
      })
    }
  }
}
</script>
