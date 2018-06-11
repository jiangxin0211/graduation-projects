<template>
  <div class="nav">
    <ul>
      <li><router-link to="./Home/HomeMap">HomeMap</router-link></li>
      <li><router-link to="./Home/HomeMessage">HomeMessage</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .nav{
        height:1rem;
        background:rgb(0,205,102);
        position:fixed;
        top: 1rem;
        width:100%;
    }
    .nav ul{
        display:flex;
    }
    .nav li{
        flex:1;
        color:#fff;
        line-height: 1rem;
        text-align: center;
    }
    .nav li a{
      color: #ccc;
    }
    .nav li a.router-link-active{
      color:#fff;
    }
</style>
