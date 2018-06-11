<template>
  <div class="content">

 <div class="vote" >

  <div class="votechoice">

   <ul class="vote1">

    <p>1.您的性别是？</p>

    <li>

     <input type="checkbox" value="男" />

     <span class="votechoicename">男</span></li>

    <li>

     <input type="checkbox" value="女" />

     <span class="votechoicename">女</span></li>

    <li>

     <button type="button" class="button blue" onClick="submitvote(this)">投票</button>

    </li>

   </ul>

  </div>

  <div class="votechoice">

   <ul class="vote2">

    <p>2.您对景区内服务的满意情况？</p>

    <li>

     <input type="radio" name="taidu" value="非常满意" />

     <span class="votechoicename">非常满意</span></li>

    <li>

     <input type="radio" name="taidu" value="满意" />

     <span class="votechoicename">满意</span></li>

    <li>

     <input type="radio" name="taidu" value="不满意" />

     <span class="votechoicename">不满意</span></li>


    <li>

     <button type="button" class="button blue" onClick="submitvote(this)">投票</button>

    </li>

   </ul>

  </div>

  <div class="votechoice">

   <ul class="vote3">

    <p>3.您对景区内环境的满意度？</p>

    <li>

     <input type="radio" name="taidu" value="非常满意" />

     <span class="votechoicename">非常满意</span></li>

    <li>

     <input type="radio" name="taidu" value="满意" />

     <span class="votechoicename">满意</span></li>

    <li>

     <input type="radio" name="taidu" value="不满意" />

     <span class="votechoicename">不满意</span></li>

    <li>

     <button type="button" class="button blue" onClick="submitvote(this)">投票</button>

    </li>

   </ul>

  </div>

  <div class="votechoice">

   <ul class="vote4">

    <p>4.您还会再来我们景区么？</p>

    <li>

     <input type="radio" name="liucheng" value="会" />

     <span class="votechoicename">会</span></li>

    <li>

     <input type="radio" name="liucheng" value="不会" />

     <span class="votechoicename">不会</span></li>


    <li>

     <button type="button" class="button blue" onClick="submitvote(this)">投票</button>

    </li>

   </ul>

  </div>

  <div class="votechoice">

   <ul class="vote5">

    <p>5.您对改景区有哪些建议？请留言</p>

    <li>

     <input type="text" name="nengli" value="留言" />



    <li>

     <button type="button" class="button blue" onClick="submitvote(this)">提交</button>

    </li>

   </ul>

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
   
</style>
