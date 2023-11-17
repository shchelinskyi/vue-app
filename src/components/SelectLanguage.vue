<script>
import {defineComponent} from 'vue';


export default defineComponent({
  name: "SelectLanguage",
  data() {
    return {
      languages: {
        en: 'English',
        ua: 'Українська',
      },
      selectedLanguage: 'en',
    };
  },
  methods: {
    async changeLanguage(lang) {

      this.$i18n.locale = lang;
      this.selectedLanguage = lang;

      await $crisp.push(["do", "chat:hide"]);
      await $crisp.push(["do", "session:reset"]);
      await $crisp.push(["do", "session:reset"]);
      window.CRISP_RUNTIME_CONFIG = {
        locale: lang
      };
      await $crisp.push(["do", "chat:show"]);

    }
  },
})
</script>

<template>
  <div class="selectWrapper">
    <div class="btn-block">
      <button :disabled="this.selectedLanguage === 'en'" class="btn" @click="changeLanguage('en')">En</button>
      <button :disabled="this.selectedLanguage === 'ua'" class="btn" @click="changeLanguage('ua')">Укр</button>
    </div>
  </div>
</template>

<style scoped>

.selectWrapper {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}

.btn-block {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 5px 10px;
  background-color: white;
  border: none;
  cursor: pointer;
}


</style>