<template>
  <ul class="ranklist">
    <li>综合排序</li>
    <li>销量最高</li>
    <li>距离最近</li>
    <li>筛选</li>
  </ul>

</template>

<script>
    export default {
        name: "WmCtRanktop"
    }
</script>

<style scoped>
  .ranklist{
    display: -webkit-flex;
    justify-content: space-around;
  }
  .ranklist li{
    line-height: 0.54rem;
    color:#333333;
    font-size:0.13rem;
  }

</style>
