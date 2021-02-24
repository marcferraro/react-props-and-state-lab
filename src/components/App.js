import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (type) =>{
    this.setState({
      filters:{
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(resp => resp.json())
      .then(pets => console.log(pets))
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(resp => resp.json())
      .then(pets => console.log(pets))
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(resp => resp.json())
      .then(pets => console.log(pets))
    } else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(resp => resp.json())
      .then(pets => console.log(pets))
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleFiltersType={this.onChangeType} handleFindPets={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
