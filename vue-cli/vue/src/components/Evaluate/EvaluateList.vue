<template>
  <div class="list">
      <div class="list-img">
        <img src="../../assets/1.jpg" alt="">
      </div>
      <div class="list-title">
          <span>
              {{title}}
          </span>
          <button class="btn">评价</button>
          <p>
              <span v-for="(a,index) in date" :key="index">
                  {{a}}
              </span><br>
              {{desc}}
          </p>
      </div>

  </div>
</template>

<script>
export default {
    props:['title','date','desc'],
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list{
        padding:0.3rem;
    }
    .list-img{
        float:left;
        width:1rem;
        height:1rem;
    }
    .list-img img{
        width:100%;
        height:100%;
    }
    .list-title{
        float:left;
        width: 4rem;
        margin-left:0.4rem;
        border-bottom:1px solid #ccc;
    }
    .btn{
        color:rgb(0,205,102);
        background:#fff;
        border:1px solid rgb(0,205,102);
    }
</style>
