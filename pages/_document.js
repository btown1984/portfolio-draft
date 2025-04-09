import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Hide Next.js development mode UI elements */}
          <style dangerouslySetInnerHTML={{ __html: `
            /* Force disable pointer events globally for development overlays */
            html:root {
              --presentation-pointer-events-override: none !important;
            }
            
            /* Hide ALL Next.js/Webpack/DevServer/Turbopack tools and icons */
            #__next-build-watcher,
            #__next-prerender-indicator,
            [id^="__next-"],
            [id*="turbopack"],
            .turbopack,
            div[data-nextjs-turbopack],
            div[data-turbopack],
            div[title*="Turbopack"],
            div[title*="turbopack"],
            div[title="Turbo"],
            div[aria-label*="Turbopack"],
            div[aria-label*="turbopack"],
            #webpack-hmr-overlay,
            #webpack-dev-server-client-overlay,
            iframe[id*="webpack"],
            iframe[src*="webpack"],
            div[id*="webpack-dev-server"],
            div[class*="webpack-dev-server"],
            /* Target specific Next.js dev tools elements */
            nextjs-portal,
            div[data-nextjs-toast],
            button[data-nextjs-dev-tools-button],
            div[id="nextjs-dev-tools-menu"],
            /* More aggressive bottom-left corner targeting */
            body > div:last-of-type[style*="position: fixed"],
            body > div:last-of-type[style*="position:fixed"],
            body > iframe:last-of-type[style*="position: fixed"],
            body > iframe:last-of-type[style*="position:fixed"],
            /* General catch-all for fixed elements in bottom-left */
            div[style*="position: fixed"][style*="bottom:"][style*="left:"]:not([class*="slide"]):not([id*="root"]),
            div[style*="position:fixed"][style*="bottom:"][style*="left:"]:not([class*="slide"]):not([id*="root"]),
            iframe[style*="position: fixed"][style*="bottom:"][style*="left:"]:not([class*="slide"]),
            iframe[style*="position:fixed"][style*="bottom:"][style*="left:"]:not([class*="slide"])
            {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: var(--presentation-pointer-events-override, none) !important;
              width: 0 !important;
              height: 0 !important;
              position: absolute !important;
              z-index: -9999 !important;
              overflow: hidden !important;
              isolation: isolate !important;
              touch-action: none !important;
              user-select: none !important;
              -webkit-user-select: none !important;
            }
            
            /* Double isolation technique for shadow DOM elements */
            body::after {
              content: '';
              position: fixed;
              pointer-events: none;
              z-index: 999999;
              top: 0;
              left: 0;
              height: 0;
              width: 0;
              opacity: 0;
            }
            
            /* Disable interactivity for all nextjs and turbopack portals */
            body > *:not(#__next):not([data-reactroot]) {
              pointer-events: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              height: 0 !important;
              width: 0 !important;
              position: absolute !important;
              top: -9999px !important;
              left: -9999px !important;
            }
          `}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
} 