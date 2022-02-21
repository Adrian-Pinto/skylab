const fetchAPI = (pkName, setData) => fetch(
  `https://pokeapi.co/api/v2/pokemon/${pkName}`)
  .then((response) => response.json())
  .then(({name, sprites: {front_default}}) => setData({
    name,
    sprite: front_default
  }))
  .catch(() => setData(null))

export default fetchAPI;
