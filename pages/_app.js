import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withApollo from '../lib/withApollo'
import 'semantic-ui-css/semantic.min.css'
import Head from 'next/head'


class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return <Container>
        <Head>
            <link rel='stylesheet' href='/_next/static/style.css' />
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Encode+Sans" rel="stylesheet"/>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
    </Container>
  }
}

export default withApollo(MyApp)
