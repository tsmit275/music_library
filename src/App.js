import { useState, useEffect } from 'react'
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Gallery/Gallery'


function App() {
  const[search,setSearch] = useState('')
  const [message,setMessage] = useState('Search for Music')
  const [data,setData] = useState([])

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const data = await response.json()
  
        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setData([])
          setMessage('Not Found')
        }
      }
  
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch}/>
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;