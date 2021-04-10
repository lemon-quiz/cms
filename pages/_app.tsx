import { CssBaseline, ThemeProvider } from '@material-ui/core';
import App from 'next/app';
import * as React from 'react';
import { IntlProvider } from 'react-intl';

import { AppProvider } from '../components/AppContext';
import { polyfill } from '../polyfills';
import initServices from '../services/initServices';
import theme from '../theme/public';

let globalServices = initServices();

function MyApp({
  Component, pageProps, locale, messages, _store,
}: any) {
  console.log(_store);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AppProvider value={{ ...globalServices }}>
        <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
          <Component {...pageProps} />
        </IntlProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

/**
 * Get the messages and also do locale negotiation. A multi-lingual user
 * can specify locale prefs like ['ja', 'en-GB', 'en'] which is interpreted as
 * Japanese, then British English, then English
 * @param locales list of requested locales
 * @returns {[string, Promise]} A tuple containing the negotiated locale
 * and the promise of fetching the translated messages
 */
function getMessages(locales: string | string[] = ['nl-NL']) {
  if (!Array.isArray(locales)) {
    locales = [locales];
  }
  let langBundle;
  let locale;
  for (let i = 0; i < locales.length && !locale; i++) {
    locale = locales[i];
    switch (locale) {
      case 'nl-NL':
        langBundle = import('../compiled-lang/nl-NL.json');
        break;
      default:
        break;
      // Add more languages
    }
  }

  if (!langBundle) {
    return ['nl-NL', import('../compiled-lang/nl-NL.json')];
  }
  return [locale, langBundle];
}

const getInitialProps: typeof App.getInitialProps = async (appContext) => {
  const {
    router: { locale },
    ctx: { req },
  } = appContext;

  const [supportedLocale, messagePromise] = getMessages(locale);

  const [, messages, appProps] = await Promise.all([
    polyfill(supportedLocale),
    messagePromise,
    App.getInitialProps(appContext),
  ]);

  let services;
  if (req) {
    const { storeService: closeService } = globalServices;
    closeService.clearAll();

    services = initServices();
    services.cookiesService.withReq(req);
    globalServices = services;
  } else {
    services = globalServices;
  }

  const { storeService } = services;

  // eslint-disable-next-line no-underscore-dangle
  let _store = {};
  await storeService.export().then((store: any) => {
    _store = store;
  });

  if (req) {
    storeService.completeAll();
  }

  return {
    ...(appProps as any),
    locale: supportedLocale,
    messages: messages.default,
    _store,
  };
};

MyApp.getInitialProps = getInitialProps;

export default MyApp;
