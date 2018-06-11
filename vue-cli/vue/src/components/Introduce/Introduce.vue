<template>
  <div class="introduce">
    <common-header title="Introduce"></common-header>
    <introduce-list></introduce-list>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import IntroduceList from "./IntroduceList"


export default {
  data () {
    return {
      
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      IntroduceList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
