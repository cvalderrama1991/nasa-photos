const Spinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/10">
      <div className="h-16 w-16 border-8 border-t-green-500 border-b-green-500 border-r-transparent border-l-transparent rounded-full animate-spin" />
    </div>
  )
}

export default Spinner
