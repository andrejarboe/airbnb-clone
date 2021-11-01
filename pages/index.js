import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
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
          {exploreData?.map(({ img, location, distance }) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            </div>
          ))}
        </section>

        {/* Medium card */}
        <div className="section">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </div>
        {/* Medium card end */}
        {/* large card */}
        <LargeCard 
          img="http://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
        {/* Large card end */}
      </main>
      {/* main end */}
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('http://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  const cardsData = await fetch('http://links.papareact.com/zp1').then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
