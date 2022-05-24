import type { NextPage } from 'next'
import Head from 'next/head'
import { Component } from 'react'
import { FadeMenu } from '../src/Menu'
import styles from '../styles/Home.module.css'

type GreetingMessageProps = {
   children?: React.ReactNode,
   message?: string,
   number?: number
}

class GreetingMessageClass extends Component<GreetingMessageProps>{
  render() {
    return (
      <h3 className={styles.title}>
        <span>{this.props.message}</span>
        <span>{this.props.number + 'st'}</span>
      </h3>
    ) 
  }
}

const GreetingMessageFunction = (props: GreetingMessageProps) => {
  return (
    <h1 className={styles.title}>
      <span>{props.children}</span>
   </h1>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoice App</title>
        <meta name="description" content="My first React app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GreetingMessageClass message={'Welcome to my '} number={1}>
        </GreetingMessageClass>
        
        <GreetingMessageFunction>
          React App
        </GreetingMessageFunction>

        <div className={styles.marginTop200}></div>

       <FadeMenu/>
      </main>
    </div>
  )
}

export default Home
