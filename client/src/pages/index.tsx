type HomeProps = {
  title: string
}

export default function Home({ title = 'React' }: HomeProps) {
  return (
    <div>
      <main>
        <h1>{title}</h1>
      </main>
    </div>
  )
}
