<template>
    <div class="top">
  <!--<div>-->
    <wm-ct-header></wm-ct-header>
    <wm-ct-nav></wm-ct-nav>
  <!--</div>-->

    </div>
</template>

<script type="text/ecmascript-6">
    import WmCtHeader from "./WmCtHeader.vue";
    import WmCtNav from "./WmCtNav.vue";

    export default {
      components: {
      WmCtNav,
      WmCtHeader}}
</script>

<style scoped>
.top{
  /*display: flex;*/
  height: 0.8rem;

}
</style>
