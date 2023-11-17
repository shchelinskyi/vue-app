<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FinancialInfo"
})
</script>

<template>

  <div class="content">
    <div class="title">
      {{ $t("last_header") }}
    </div>
    <div class="cards">
      <div v-for="text of $tm('last_text')" class="card">
        <div class="description-wrapper">
          <p class="description">{{ text }}</p>
        </div>
        <div class="cardIcon">
          <img class="rowIcon" src="../assets/images/icon/row.svg" alt=">"/>
        </div>
      </div>
    </div>
  </div>
  <div class="man"></div>

</template>

<style scoped>


.content {
  width: 1216px;
  margin: 0 auto;
}

.title {
  margin-bottom: 129px;
  max-width: 915px;
  font-family: Roboto, sans-serif;
  font-size: 64px;
  font-weight: 600;
}

.cards {
  display: flex;
  column-gap: 32px;
}

.card {
  position: relative;
  width: 280px;
  height: 270px;
  padding: 92px 40px 0 28px;
  background-image: url("../assets/images/link-bg.svg");
}

.description-wrapper {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.cardIcon {
  width: 34px;
  height: 34px;
  position: absolute;
  left: 28px;
  bottom: 28px;
  border-bottom: 27px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rowIcon {
  width: 6px;
  height: 12px;
}

.man {
  width: 1727px;
  height: 1120px;
  margin: 0 auto;
  background-image: url("../assets/images/man.svg");

}
</style>