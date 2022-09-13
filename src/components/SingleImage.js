const SingleImage = ({ copyright, date, explanation, hdurl, title, url }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-md mx-auto">
        {hdurl && <img src={hdurl} alt={title} className="h-[80vh]" />}
        {url && <img src={url} alt={title} className="h-[80vh]" />}
      </div>
      <div className="flex flex-col gap-2 items-center container mx-auto">
        <h1 className="text-white font-bold">{title}</h1>
        <p className="text-white">{date}</p>
        <p className="text-neutral-500">{explanation}</p>
        <p className="text-neutral-500">
          {copyright && <span>&copy; </span>}
          {copyright}
        </p>
      </div>
    </div>
  )
}

export default SingleImage
