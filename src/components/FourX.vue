<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FourX"
})
</script>

<template>
  <div class="wrapper">
    <h3 class="title">
      {{ $t("third_header")}}
    </h3>
    <div class="four-x"></div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 1370px;
  margin: 0 auto 829px;
}

.title {
  max-width: 605px;
  font-family: Roboto, sans-serif;
  font-size: 63px;
  font-weight: bold;
  text-align: center;
}

.four-x {
  width: 1370px;
  height: 866px;
  background-image: url("../assets/images/4x-bg.svg");
  position: absolute;
  top:216px;
  left: 0;
  z-index: -1;
}
</style>