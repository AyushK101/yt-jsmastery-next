import Image from "next/image";
import SearchForm from "@/components/SearchForm";

type searchParamsType = {
  searchParams: Promise<{query?: string}>
}

export default async function Home({searchParams}: searchParamsType) {
  const query = (await searchParams).query;
  const posts = [
    {_createdAt: "yesterday",
      views: 542,
      author: { _id: 1 },
      _id: 1,
      description: "description",
      image: "https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0"
    }
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Votes on Pitches, and Gets noticed in Virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search result for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {
            posts.map( (post, index) => {
              <StartUpCard/>
            })
          }
        </ul>
      </section>
    </>
  );
}
