import Head from 'next/head'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PopularIssues from '../components/PopularIssues'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Support Directory</title>
        <meta name="description" content="Support directory for Next.js development issues" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <SearchBar />
        <PopularIssues />
      </main>
    </div>
  );
}