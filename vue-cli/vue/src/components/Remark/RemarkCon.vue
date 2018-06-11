<template>
  <div class="remark">
    <div class="remarknav">
        <div class="shopname">
            伊春森林旅游门票
            <button>发布</button>
        </div>
        <div class="img">
            <div class="img1">
                <img src="../../assets/minimg/1.png" alt="">
                <p>very bad</p>           
            </div>
            <div class="img2">
                <img src="../../assets/minimg/2.png" alt="">
                <p>bad</p>
            </div>
            <div class="img3">
                <img src="../../assets/minimg/3.png" alt="">
                <p>good</p>
            </div>
            <div class="img4">
                <img src="../../assets/minimg/4.png" alt="">
                <p>very good</p>
            </div>
            <div class="img5">
                <img src="../../assets/minimg/55.png" alt="">
                <p>wonderful</p>
            </div>
        </div>
        
    <div class="font">
        <p>fighting!写够15个字才可以发布!!!</p>
        <img src="../../assets/photo.png" alt="">
        <button>上传照片</button>
    </div>
   
    </div>
  </div>
</template>

<script>



export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .remark{
        padding:0.2rem;
    }
    .shopname{
        font-size:0.3rem;
        color:rgb(0,205,102);
        
    }
    .shopname button{
        margin-left:2.4rem;
        color:rgb(0,205,102);
        background:#fff;
        border:1px solid rgb(0,205,102);
    }
   img{
       margin-top:0.3rem;
       padding:2px;
       width:1rem;
       height:1rem;
   }
   .img1{
       float:left;
       text-align: center;
       color:#8a8a8a;
       padding:2px;
   }
   .img2{
       float:left;
       text-align: center;
       color:#8a8a8a;
       padding:2px;
   }
   .img3{
       float:left;
       text-align: center;
       color:#8a8a8a;
       padding:2px;
   }
   .img4{
       float:left;
       text-align: center;
       color:#8a8a8a;
       padding:2px;
   }
   .img5{
       float:left;
       text-align: center;
       color:#0f0;
       padding:2px;
   }
   .font{
       margin-top:2rem;
       width:5.8rem;
       height:6rem;
       border:1px solid #ccc;
   }
   .font p{
       color:#ccc;
        font-size:16px;
        padding:3px;
   }
   .font img{
       width:1.6rem;
       height:1.6rem;
       margin-top:3.6rem;
       padding:0.2rem;
   }
    .font button{
        margin-top:4.8rem;
        background:#fff;
        color:#ccc;
        border:1px solid #ccc;
    }
</style>
