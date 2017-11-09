import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, minimal-ui, initial-scale=1' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <style>{`body { margin: 0; font-family: 'Roboto'; } `}</style>
        </Head>
        <body>
          <div className='root'>
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
