<template>
  <div class="intro">
      <div class="intro-nav">
          <span>伊春五营国家森林公园</span><br>
          <img src="../../assets/you.png" alt="">
          
          <span>景点信息：</span>
      </div>
      <div class="open">
          <span>开放时间：</span><br>
          <span>全天</span>
          <span>7：00--18:00</span>
          <span>17:30停止入场</span>
      </div>
      <div class="scenic">
          <span>景点介绍:</span>
          <img src="../../assets/sci.jpg" alt="">
          <span>   五营是伊春各林区中红松原始森林保存最完好的地方，设有五营国家森林公园和丰林国家红松自然保护区。
              这里是亚洲规模最大、最完整、最有代表性的红松原始森林集散地。餐 饮/住 宿/购 物 天赐湖畔有木楼可供住宿。
              交 通 从哈尔滨直接乘火车到五营，转乘30分钟的中巴上山即到。（森林公园有专车接站）</span>
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
    .intro{
        margin-bottom:1rem;
    }
   .intro-nav span{
       font-size: 20px;
       font-weight: 520;
   }
   
   .scenic span{
       padding:0.2rem;;
       font-weight: 300;
   }
</style>
