
const API_URL = 'http://localhost:3000'

fetch(`${API_URL}/news` )
    .then(response => response.json())
    .then(data => {
      console.log({
        data
      })
    })
    .catch(error => {
      console.error({
        error
      })
    })