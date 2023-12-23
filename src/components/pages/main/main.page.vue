<template src="./main.page.html" lang="html"></template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: "main-page",
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })

    // Something todo ..

    return { t }
  }
});
</script>

<i18n src="./i18n/ru.json" locale="ru"></i18n>