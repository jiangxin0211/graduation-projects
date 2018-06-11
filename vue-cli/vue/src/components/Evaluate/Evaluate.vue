<template>
  <div class="evaluate">
    <common-header title="evaluate"></common-header>
    <div class="list">
      <evaluate-list v-for="(obj,index) in EvaluateList" :key="index" 
      :title="obj.title" :date="obj.date" :desc="obj.desc"
      ></evaluate-list>
    </div>
    <remark></remark>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "../Common/CommonHeader"
import CommonFooter from "../Common/CommonFooter"
import EvaluateList from "./EvaluateList"

export default {
  data () {
    return {
      EvaluateList:[
        {
          title:"吃好吃的",
          date:"20180329",
          desc:[
            "痛快或不爽就是要说出来"
          ]
        },
        {
          title:"玩好玩的",
          date:"20180329",
          desc:[
            "满意还是吐槽，写出来"
          ]
        },
        {
          title:"买好看的",
          date:"20180329",
          desc:[
            "痛快或不爽就是要说出来"
          ]
        },
        {
          title:"看好看的",
          date:"20180329",
          desc:[
            "痛快或不爽就是要说出来"
          ]
        },
        {
          title:"住最好的",
          date:"20180329",
          desc:[
            "有图有真相，大胆发出来"
          ]
        },
        {
          title:"玩好玩的",
          date:"20180329",
          desc:[
            "满意还是吐槽，写出来"
          ]
        },
        {
          title:"玩好玩的",
          date:"20180329",
          desc:[
            "满意还是吐槽，写出来"
          ]
        }
      ]
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      EvaluateList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
