import Document, { Html, Head, Main, NextScript } from '../../node_modules/next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html >
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
