<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "WhyCustomers",
})
</script>

<template>
  <div class="wrapper">
    <div class="customers">
      <h2 class="title">{{$t('financial__title')}}</h2>
      <p v-for="item of  $tm('financial_text')" class="text">{{ item }}</p>
    </div>
    <div class="img-block"></div>
  </div>
</template>

<style scoped>

.wrapper {
  position: relative;
  width: 100vw;
  border: 5px solid transparent;
}

.customers {
  width: 1216px;
  margin: 400px auto;
}

.title {
  max-width: 700px;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 96px;
}

.text {
  font-family: Inter, sans-serif;
  font-size: 24px;
  line-height: 48px;
}

.img-block {
  width: 1024px;
  height: 1656px;
  position: absolute;
  top: 68px;
  left: 740px;
  background-image: url("../assets/images/light-bg.svg");
  z-index: -1;
}
</style>