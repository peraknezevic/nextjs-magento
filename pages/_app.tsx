import "./styles/main.css"

import * as React from "react"

import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter"
import { AppProps } from "next/app"
import CssBaseline from "@mui/material/CssBaseline"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../src/theme"

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>
          New Tires for Sale Online | Priority Tire Shop - Find &amp; Buy
        </title>
        <meta
          name="title"
          content="New Tires for Sale Online | Priority Tire Shop - Find &amp; Buy"
        />
        <meta
          name="description"
          content="A tire store that meets your daily needs. Tires of all sizes, brands &amp; types in one place. Frequent discounts and 500.000 + satisfied customers! Check now!"
        />
        <meta
          name="keywords"
          content="buy tires, tires for sale, tires online, discount tires, quality tires, car tires, truck tires, top quality tires, new tires, commercial tires"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  )
}
