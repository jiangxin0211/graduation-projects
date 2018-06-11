<template>
  <div class="header">
    <button>My</button>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:['title'],

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        height:1rem;
        background:rgb(0,205,102);
        display:flex;
        color:#fff;
    }
    .header button{
        width:1rem;
        height:1rem;
        background:rgb(0,205,102);
        color:#fff;
    }
    .header h2{
        flex:1;
        text-align: center;
        /* text-indent:-1rem; */
    }
</style>
