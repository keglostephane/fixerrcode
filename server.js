import app from './src/app.js'

const port = 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
  console.log(`AdminJS is available at http://localhost:${port}/admin`)
})
