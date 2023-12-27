<template src="./main.page.html" lang="html"></template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "main-page",
  data: () => {
    return {langs: ['RU', 'EN']}
  }
});
</script>

<style src="./main.page.sass" lang="sass"></style>

<i18n src="./translations/ru.json" lang="json5" locale="ru"></i18n>
<i18n src="./translations/en.json" lang="json5" locale="en"></i18n>