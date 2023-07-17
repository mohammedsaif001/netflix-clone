import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Row from '../components/Row'
import requests from '../api/Requests'

const rows = [{
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true
},
{
    title: "Trending Now",
    fetchUrl: requests.fetchTrending,
}, {
    title: "Top Rated",
    fetchUrl: requests.fetchTopRated,
}, {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
}, {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
}, {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
}, {
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
},
{
    title: "Documentries Movies",
    fetchUrl: requests.fetchDocumentaries,
},


]

function HomePage() {
    return (
        <div>
            <Navbar />
            <Banner />
            {rows.map((row) => <Row key={row.title}{...row} />
            )}
        </div>
    )
}

export default HomePage