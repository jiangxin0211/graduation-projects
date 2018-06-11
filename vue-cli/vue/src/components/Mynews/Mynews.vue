<template>
  <div class="mynews">
    <common-header title="mynews"></common-header>
    <mynews-login></mynews-login>
    <common-footer></common-footer>
  </div>
  
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import MynewsLogin from "./MynewsLogin"

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      MynewsLogin
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    

</style>
