<script>
import {defineComponent} from 'vue'
import { Crisp } from "crisp-sdk-web";

Crisp.configure("01bd3d04-b94d-469b-a969-70566bc2d501", {
  locale:'en'
});

Crisp.chat.show();


export default defineComponent({
  name: "CrispChatComponent",
})


</script>

<template>


</template>

<style scoped>

</style>