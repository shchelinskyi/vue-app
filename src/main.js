import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import {createI18n, useI18n} from "vue-i18n";
import {languages, defaultLocale} from "@/i18n";

const messages = Object.assign(languages);

const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
});

const app = createApp(App)

app.use(i18n)
app.mount('#app')
