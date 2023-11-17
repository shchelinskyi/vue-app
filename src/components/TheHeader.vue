<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TheHeader"
})
</script>

<template>
  <div class="head-container">
    <div class="btn-block">
      <h2 class="title">{{ $t('header') }}</h2>
      <button class="btn">Contact us <img class="row-icon" src="../assets/images/icon/row.svg" alt="row"/></button>
    </div>
    <div class="mask"></div>
  </div>
  <div class="head-line">
  </div>
</template>

<style scoped>

.head-container {
  width: 1216px;
  height: 600px;
  display: flex;
  margin: 0 auto;
}

.btn-block {
  padding-top: 78px;
  width: 506px;
}
.title {
  position: relative;
  width: 720px;
  background-image: radial-gradient(rgba(218, 181, 164, 0.6), rgba(0, 0, 0, 0));
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  z-index: 2;
  font-family: Roboto, sans-serif;
  font-size: 64px;
  font-weight: 500;
}

.btn {
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 15px 12px 22px;
  border-radius: 20px;
  border: none;
  display: flex;
  align-items: center;
  gap:6px;
  cursor: pointer;
}

.row-icon {
  width: 6px;
  height: 13px;
}



.mask {
  margin-left: 30px;
  width: 650px;
  height: 490px;
  background-image: url("../assets/images/heading-mask.svg");
}

.head-line {
  position: absolute;
  top: 328px;
  left: 285px;
  width: 1480px;
  height: 740px;
  background-image: url("../assets/images/head-line.svg");
  z-index: -1;
}
</style>