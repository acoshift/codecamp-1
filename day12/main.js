require('./src/app')(
  require('./config/db')
).then(() => {}, (err) => console.log(err))
