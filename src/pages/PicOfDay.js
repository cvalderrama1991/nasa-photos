import SingleImage from "../components/SingleImage"
import Spinner from "../components/Spinner"
import useFetch from "../hooks/useFetch"

const PicOfDay = () => {
  const { data, error, isLoading } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key="
  )

  return (
    <section className="min-h-screen pt-12 px-2 pb-2">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center py-2">
        <span className="text-red-500">NASA:</span> Astronomy Picture of The Day
      </h2>
      {isLoading && <Spinner />}
      {error ? (
        <p className="text-white text-center">Something went wrong...</p>
      ) : (
        <SingleImage
          hdurl={data.hdurl}
          title={data.title}
          date={data.date}
          explanation={data.explanation}
          copyright={data.copyright}
        />
      )}
    </section>
  )
}

export default PicOfDay
