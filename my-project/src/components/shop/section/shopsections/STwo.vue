<template>
  <div class="section_two">
    <div class="section_two_left">
      <p><i class="iconfont icon-rexiao"></i><span>满99减23，满199减43，满299减63，满499减120</span></p>
      <p><i class="iconfont icon-jianmian-"></i><span>1.制作+加配送55-80分钟，【距离10公里以上费用按每公里5块计算】</span></p>
    </div>
    <div class="section_two_right">
      <p><span>2种优惠</span><i class="iconfont icon-xiala"></i></p>

    </div>
  </div>
</template>

<script>
    export default {
        name: "STwo",

    }
</script>

<style scoped>
  .section_two {
    width: 100%;
    height: 0.8rem;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .section_two .section_two_left {
    width: 70%;
    height: 0.6rem;
    padding-left: 0.2rem; }
  .section_two .section_two_left p {
    width: 100%;
    height: 0.3rem;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .section_two .section_two_left p span {
    display: block;
    line-height: 0.3rem;
    font-weight: bolder;
    font-size: 0.14rem;
    color: #7d7d7d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
  .section_two .section_two_left :nth-child(1) .iconfont {
    font-size: 0.2rem;
    color: red;
    background: #fff; }
  .section_two .section_two_left :nth-child(2) .iconfont {
    font-size: 0.2rem;
    color: #fff;
    background: red; }
  .section_two .section_two_right {
    width: 30%;
    height: 0.6rem; }
  .section_two .section_two_right p {
    width: 100%;
    height: 0.3rem;
    display: -webkit-flex;
    -webkit-align-items: center; }
  .section_two .section_two_right p span {
    display: block;
    font-size: 0.14rem;
    padding-left: 0.2rem;
    color: #7d7d7d; }
  .section_two .section_two_right p .iconfont {
    color: black; }
</style>
