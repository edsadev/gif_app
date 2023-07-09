import { useEffect, useRef, useState } from "react"
import SearchBar from "@/components/SearchBar"
import Grid from "@/components/Grid"
import endPoints from "@/services/endpoints"
import axios from "axios"

function Home() {
  const [gifs, setGifs] = useState([])
  const [limit, setLimit] = useState(20)
  const formRef = useRef(null)

  useEffect(() => {
    const getFeaturedGifs = async () => {
      try {
        const res = await axios.get(endPoints.gifs.trending.getTrending(20))
        setGifs(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFeaturedGifs()
  }, [])



  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)

    try {
      const res = await axios.get(endPoints.gifs.search.getQuery(formData.get("query", limit)))
      setGifs(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-12 text-center flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Gif searcher</h1>
      <SearchBar formRef={formRef} onSubmit={onSubmit}/>
      <Grid gifs={gifs} limit={limit}/>
    </div>
  )
}

export default Home