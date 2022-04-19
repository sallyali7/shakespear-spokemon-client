
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import { BrowserRouter  } from 'react-router-dom'
import axios from 'axios'
import PokeIndex from '../Poke/PokeIndex'

afterEach(cleanup)

const response = [
  {
    _id: '62582752f17363a44411d052',
    description: 'At which hour hunting, \'t skims the surface of water at high speed to pick off unwary prey such as magikarp.',
    name: 'Pidgeot',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
  }, {
    _id: '62582752f17363a44411d053',
    description: 'Shoots water at prey while in the water. Withdraws into its shell at which hour in danger.',
    name: 'Squirtle',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  }, {
    _id: '62582752f17363a44411d054',
    description: 'A strange seed wast planted on its back at birth. The plant sprouts and grows with this pokémon.',
    name: 'Bulbasaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  }, {
    _id: '62582752f17363a44411d055',
    description: 'Obviously prefers hot places. At which hour \'t rains, steam is did doth sayeth to spout from the tip of its tail. ',
    name: 'Charmander',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  }
]
test('Should render a list of pokemons', async () => {
  axios.get.mockResolvedValueOnce({ data: response })

  render(
    <BrowserRouter>
      <PokeIndex />
    </BrowserRouter>

  )
  await waitFor(() => expect(axios.get).toHaveBeenCalled())

  response.forEach(item => {
    const element = screen.getByText(item.name)
    expect(element).toBeInTheDocument()
  })
})

test('Should render error message on failed reponse',
  async () => {
    axios.get.mockRejectedValueOnce()

    render(
      <BrowserRouter>
        <PokeIndex />
      </BrowserRouter>
    )

    const loadingIndicator = screen.getByRole('loading')

    expect(loadingIndicator).toBeInTheDocument()

    await waitFor(() => expect(axios.get).toHaveBeenCalled())

    const errorMessage = screen.getByRole('error-message')

    expect(errorMessage).toBeInTheDocument()
  })
