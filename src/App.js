import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from './Components/SearchBar'
import Gallery from './Components/Gallery/Gallery'
import AlbumView from './Components/AlbumView'
import ArtistView from './Components/ArtistView'
import { DataContext } from './context/DataContext'

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music')
  const [data, setData] = useState([])

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const url = encodeURI(`https://itunes.apple.com/search?term=${search}`)
        const response = await fetch(url)
        const resData = await response.json()

        if (resData.results.length > 0) {
          setData(resData.results)
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
    <div>
      <Router>
        <DataContext.Provider value={data}>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <SearchBar handleSearch={handleSearch} />
                  {data.length > 0 ? <Gallery /> : <p>{message}</p>}
                </Fragment>
              }
            />
            <Route path="/album/:id" element={<AlbumView />} />
            <Route path="/artist/:id" element={<ArtistView />} />
          </Routes>
        </DataContext.Provider>
      </Router>
    </div>
  )
}

export default App
