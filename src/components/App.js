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
      .then(pets => this.setState({pets: [...pets]}))
    } else if (this.state.filters.type === 'cat') {
      fetch('/api/pets?type=cat')
      .then(resp => resp.json())
      .then(pets => this.setState({pets: [...pets]}))
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(resp => resp.json())
      .then(pets => this.setState({pets: [...pets]}))
    } else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(resp => resp.json())
      .then(pets => this.setState({pets: [...pets]}))
    }
  }

  onAdoptPet = (id) => {
    // console.log(id)
    // const pet = this.state.pets.find(pet => pet.id === id)
    // pet.isAdopted = true
    // console.log(pet.isAdopted)

    const newPetsArray = this.state.pets.map(petObj => {
      if (petObj.id === id){
        return {
          ...petObj,
          isAdopted: true
        }
      } else {
        return petObj
      }
    })

    this.setState({
      pets: newPetsArray
    })

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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
