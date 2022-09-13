const RoverImage = ({ photo }) => {
  return (
    <li
      className="rounded-xl border-2 overflow-hidden"
      onClick={() => console.log(photo.id)}
    >
      <div>
        <img src={photo.img_src} alt="rover" className="aspect-square" />
      </div>
      <p className="text-red-500 text-center py-2 font-bold">
        Earth date: {photo.earth_date}
      </p>
    </li>
  )
}

export default RoverImage
