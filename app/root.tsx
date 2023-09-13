import type {
  LinksFunction,
  MetaFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import styled from "styled-components";
import { MAX_WIDTH } from "@constants/breakpoints";
import { clamp } from "@utils/clamp";
import "@reach/dialog/styles.css";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "use-credentials",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/x-icon",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Scudler: A Time Saver Courses Scheduler"
        />
        <meta
          name="description"
          content="A courses scheduler integrated with Ellucian Power Campus"
        />
        <meta
          property="og:image"
          content="https://scudler.fly.dev/images/og.png"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-37QB5SY17S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-37QB5SY17S');
            `,
          }}
        ></script>
        <RootWrapper>
          <Outlet />
          <br />
          <br />
          <br />
        </RootWrapper>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <GlobalStyles />
      </body>
    </html>
  );
}

const RootWrapper = styled.div`
  position: relative;
  height: fit-content;
  min-height: 100vh;
  width: 80%;
  max-width: ${MAX_WIDTH / 16}rem;
  margin: ${clamp(4 * 16, 6 * 16)} auto 0 auto;
  isolation: isolate;
  z-index: 0;
  /* To avoid margin collapse */
  padding: 1px;
  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`;
