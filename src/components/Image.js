const Image = ({ item }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-md mx-auto">
        <img src={item.url} alt={item.title} />
      </div>
      <div className="flex flex-col gap-2 items-center container mx-auto">
        <h1 className="text-white font-bold">{item.title}</h1>
        <p className="text-white">{item.date}</p>
        <p className="text-neutral-500">{item.explanation}</p>
        <p className="text-neutral-500">
          <span>&copy;{item.copyright}</span>
        </p>
      </div>
    </div>
  )
}

export default Image
