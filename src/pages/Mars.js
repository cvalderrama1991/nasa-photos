import RoverImage from "../components/RoverImage"
import useFetch from "../hooks/useFetch"
import Spinner from "../components/Spinner"

const Mars = () => {
  const { data, error, isLoading } = useFetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
  )

  return (
    <section className="min-h-screen pt-12 px-2 pb-2 text-white">
      <h2 className="text-center font-bold py-2 text-xl sm:text-2xl md:text-3xl">
        Mars Rover Photos
      </h2>
      {isLoading && <Spinner />}
      {error && <p className="text-center">Something went wrong...</p>}
      <ul className="grid gap-4 max-w-8xl w-full mx-auto sm:grid-cols-2 md:grid-cols-3">
        {data.photos?.slice(240, 275).map((photo) => (
          <RoverImage key={photo.id} photo={photo} />
        ))}
      </ul>
    </section>
  )
}

export default Mars
