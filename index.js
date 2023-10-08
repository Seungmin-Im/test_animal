const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

/* app.get('/user/:id', function (req, res) {
  const p = req.params
  console.log(p)
  res.json({'userid': p.id})
  // res.send('멍멍')
})

app.get('/cat', function (req, res) {
  const q = req.query
  console.log(q)
  res.json({'userid': q.id})
  // res.send('야옹')
}) */
let count = 0;
app.get('/sound/:animal', function (req, res) {
  const { animal } = req.params
  console.log(animal)
  console.log(count);
  switch (animal) {
    case 'dog':
      res.json({'sound': '멍멍', 'img': ''})
      break
    case 'cat':
      if (count % 2)
        res.json({'sound': '야옹', 'img': 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtEMUl%2FbtrDc6957nj%2FNwJoDw0EOapJNDSNRNZK8K%2Fimg.jpg'})
      else
        res.json({'sound': '야옹야옹', 'img': 'https://img.freepik.com/premium-photo/two-kittens-are-sitting-on-a-table-with-a-piece-of-cheese_777078-14167.jpg'})
      count++;
      break
    case 'cow':
      res.json({'sound': '음매', 'img': ''})
      break
    default:
      res.json({'sound': '알수없음', 'img': ''})
      console.log('....');
  }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})