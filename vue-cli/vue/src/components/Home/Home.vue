<template>
  <div class="home">
    <common-header title="home"></common-header>
    <home-nav></home-nav>
    <div class="map">
      <home-map></home-map>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import HomeNav from "./HomeNav"
import HomeMap from "./HomeMap"


export default {
  data () {
    return {
      
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      HomeNav,
      HomeMap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .map{
      margin-top:1rem;
    }
</style>
