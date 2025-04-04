import Results from "../../../components/Results";
export default async function Searchpage({params}) {
    const {searchTerm} =await  params;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
    const data = await res.json();
    const results = data.results;
  return (
    <div>
      {!results ||
      (results.length === 0 && (
        <h1 className='text-center pt-6'>No Result Found.</h1>
      )
      )}
      {results && results.length !==0 && <Results results={results} />}
    </div>
  )
}
