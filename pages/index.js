import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Header end*/}
        
      {/* Hero */}
      <Hero />
      {/* Hero end */}
      {/* main */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from the server - API endpoints */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
      {/* main end */}
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('http://links.papareact.com/pyp')
    .then(
      (res) => res.json()
    );

    return {
      props:{
        exploreData
      }
    }
}