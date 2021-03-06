import Head from 'next/head';
import * as React from 'react';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';

import Layout from '../components/Layout';

export default function Home() {
  const intl = useIntl();

  return (
    <Layout
      title={intl.formatMessage({
        defaultMessage: 'Home',
      })}
    >
      <Head>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage:
              'An example app integrating React Intl with Next.js',
          })}
        />
      </Head>
      <p>
        <FormattedMessage defaultMessage="Hello, World!" />
      </p>
      <p>
        <FormattedNumber value={10000000.34} />
      </p>
    </Layout>
  );
}
