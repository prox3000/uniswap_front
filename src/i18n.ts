import { createI18n } from 'vue-i18n'
// import en from './translations/en.json';
// import ru from './translations/ru.json';

function loadLocaleMessages() {
  const locales = require.context('./', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages: any = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      console.log(matched);
      console.log(locale);
      console.log(locales);
      console.log(key);
      console.log(locales(key));
      messages[locale] = locales(key);
    }
  });

  console.log(messages);
  return messages
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'ru',
  messages: loadLocaleMessages()
})
//
// export const i18n = createI18n({
//   legacy: false,
//   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
//   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
//   messages: loadLocaleMessages()
// })
