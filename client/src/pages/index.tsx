import Head from 'next/head'

type HomeProps = {
  title: string
}

export default function Home({ title = 'React' }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
