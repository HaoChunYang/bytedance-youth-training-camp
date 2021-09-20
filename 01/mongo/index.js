(async () => {
  const { MongoClient } = require('mongodb')

  const client = new MongoClient(
    'mongodb://localhost:27017',
    {
      useNewUrlParser: true
    }
  )

  let ret = await client.connect()
  const db = client.db('test')

  const fruits = db.collection('fruits')
  ret = await fruits.insertOne({
    name: 'orange',
    price: 20
  })
  console.log(ret)
})()