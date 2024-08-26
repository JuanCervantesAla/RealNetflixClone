import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import CardData from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTYyMjQ0NGRmMDM2MzE5ZDI0ZGUyNGJmZDVlZjZlMiIsIm5iZiI6MTcyNDYzNjU1OS4zMDEzOTEsInN1YiI6IjY2Y2JkY2M1MzFlYTE1MDhjNGQ4NTQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ad81Gzs31Znz41IoG48FHQdphA7Fe32T84g9tOvRqWU'
    }
  };
  

  /*
  const cardsRef = useRef();
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
*/
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='TitleCards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className='cardList' /*ref={cardsRef}*/>
        {apiData.map((card, index) => {
          return <div className='card' key={index}>
            <img src={'https://image.tmdb.org/t/p/w500/' + card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
