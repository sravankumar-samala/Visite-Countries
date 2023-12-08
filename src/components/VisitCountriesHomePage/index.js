import {useState} from 'react'
import './index.css'

export default function Home({initialList}) {
  const [countriesList, setCountriesList] = useState(initialList)

  const visitedCountries = countriesList.filter(
    eachCountry => eachCountry.isVisited,
  )

  const onVisit = id => {
    const updatedList = countriesList.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isVisited: true,
        }
      }
      return each
    })

    setCountriesList(updatedList)
  }

  const onRemoveVisited = id => {
    const updatedList = countriesList.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isVisited: false,
        }
      }
      return each
    })

    setCountriesList(updatedList)
  }

  return (
    <div className="main-container">
      <div className="countries-list-container">
        <h2>Countries</h2>
        <ul className="countries-list">
          {countriesList.map(each => (
            <li key={each.id} className="country-item">
              <p>{each.name}</p>
              {each.isVisited ? (
                <p className="visited-text">Visited</p>
              ) : (
                <button
                  type="button"
                  className="visited-btn"
                  onClick={() => onVisit(each.id)}
                >
                  {each.isVisited ? 'Visited' : 'Visit'}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="visited-countries-container">
        <h2>Visited Countries</h2>
        {visitedCountries.length === 0 ? (
          <div className="no-visited-countries-view">
            <p>No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul className="visited-countries-list">
            {visitedCountries.map(each => (
              <li className="visited-country-item" key={each.id}>
                <img src={each.imageUrl} alt="thumbnail" />
                <div className="visited-country-item-footer">
                  <p>{each.name}</p>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => onRemoveVisited(each.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
