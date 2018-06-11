<template>
    <div class="my">
        <img src="../../assets/green.jpg" alt="">
        <div class="login">
            <a href="">点击登录</a>
            <a href="">注册</a>
        </div>
        <div class="dropdown">
            <span>我的评价</span>
            <div class="dropdown-content">
                <p><a href="">好评</a></p>
                <p><a href="">中评</a></p>
                <p><a href="">差评</a></p>
            </div>
        </div>
        <div class="wait">
            <span><a href="">待评价</a></span>
        </div>
        <div class="other">
            <ul>
                <li><a href="">会员中心</a></li>
                <li><a href="">手机充值</a></li>
                <li><a href="">客服中心</a></li>
                <li><a href="">发票助手</a></li>
                <li><a href="">好友去哪</a></li>
            </ul>
        </div>
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
    .my{
        padding: 0.2rem;
    }
    img{
        margin-left: 2rem;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }
    .login{
        position:relative;
        text-align: center;
    }
    .login a{
        color:rgb(0,205,102);
    }
    .dropdown span{
        color:rgb(0,205,102);
    }
    .dropdown {
        position: relative;
        display: inline-block;
        font-size:0.4rem;
        margin: 0.3rem;
        margin-left:0.5rem;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #0ceb83;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(5, 245, 173, 0.2);
        padding: 12px 16px;
        color:#fff;
    }
    .dropdown-content a{
        color:#fff;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .wait{
        position: relative;
        display: inline-block;
        font-size:0.4rem;
        margin-left: 1rem;
    }
    .wait span a{
        color:rgb(0,205,102);
    }
    .other{
        position: relative;
        display: inline-block;
        font-size:0.4rem;
        margin-left: 0.3rem;
        margin-top:0.2rem;
    }
    .other li{
        width:5rem;
    }
    .other li a{
        color:rgb(0,205,102);
    }
</style>
