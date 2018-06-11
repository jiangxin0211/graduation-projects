<template>
  <div class="footer">
    <ul>
        <li><router-link to='/home'>home</router-link></li>
        <li><router-link to='/evaluate'>evaluate</router-link></li>
        <li><router-link to='/mynews'>my news</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
        height:1rem;
        background:rgb(0,205,102);
        position:fixed;
        bottom:0;
        width:100%;
    }
    .footer ul{
        display:flex;
    }
    .footer li{
        flex:1;
        line-height: 1rem;
        text-align: center;
    }
    .footer li a{
      color: #ccc;
    }
    .footer li a.router-link-active{
      color:#fff;
    }
</style>
