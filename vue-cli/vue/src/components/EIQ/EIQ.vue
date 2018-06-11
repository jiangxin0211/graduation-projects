<template>
  <div class="eiq">
    <common-header title="EIQ"></common-header>
     <question></question>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import Question from "./Question"

export default {
  data () {
    return {
      
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      Question
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
