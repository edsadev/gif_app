import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
function Grid({gifs = []}) {
  const [columns, setColumns] = useState(1)
  useEffect(() => {
    if (window.innerWidth < 480){
      setColumns(1)
    } else if (window.innerWidth < 720){
      setColumns(2)
    } else {
      setColumns(3)
    }

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 480){
        setColumns(1)
      } else if (windowWidth < 720){
        setColumns(2)
      } else {
        setColumns(3)
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  return (
    <div className="" style={{columnCount: columns, gap: "1rem"}}>
      {gifs.map(gif => (
        <figure className="mb-4" key={gif.id}>
          <a href={gif.url} target="_blank" rel="noreferrer">
            <img src={gif.images.original.url} alt={gif.title} className="hover:scale-105 hover:opacity-80 transition h-auto w-full max-w-full rounded-lg" />
          </a>
        </figure>
      ))}
    </div>
  )
}

export default Grid