<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FinancialServices"
})
</script>

<template>
  <div class="wrapper">
    <h3 class="title">{{ $t('second_header') }}</h3>
    <div class="stable-block"></div>
    <div class="lock-block">
      <div class="item1"></div>
      <div class="item2"></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 1008px;
  margin: 392px auto 0;
}

.title {
  font-family: Roboto, sans-serif;
  font-size: 46px;
  font-weight: 600;
}

.stable-block {
  width: 100%;
  height: 430px;
  background-image: url("../assets/images/stable-bg.svg");
  border-radius: 20px 20px 0px 0;
  margin-bottom: 32px;
}

.lock-block {
  display: flex;
  column-gap: 32px;
}

.item1 {
  width: 488px;
  height: 401px;
  background-image: url("../assets/images/lock-bg1.svg");
}

.item2 {
  width: 488px;
  height: 401px;
  background-image: url("../assets/images/lock-bg2.svg");
}
</style>