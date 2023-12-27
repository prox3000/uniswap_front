import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = require.context('./', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages: any = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = messages[locale] ? {...messages[locale] ,...locales(key)} : locales(key);
    }
  });
  return messages;
}

export const defaultLocale = 'ru';

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || defaultLocale,
  messages: loadLocaleMessages()
});