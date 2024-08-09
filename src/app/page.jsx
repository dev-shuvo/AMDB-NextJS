import Movies from "@/components/Movies";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre;

  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "TopRated" ? "movie/top_rated" : "trending/all/week"
    }?language=en-US&page=1&api_key=${process.env.TMDB_API_KEY}`,

    { next: { revalidate: 10 } }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch!");
  }
  const results = data.results;
  return <Movies results={results} />;
}
