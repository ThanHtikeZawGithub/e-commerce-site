import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-pzjw8h+MG9gke8dOZ3u/RS4rW8R+QzTIbceR7AAp4lWRfD2hq+nE+gkSOy0HwXu6"
            crossOrigin="anonymous"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
