// import json server
const jsonServer =require('json-server')

// server creation
const mpServer = jsonServer.create()

//setup path for db.json file
const router =jsonServer.router('db.json')

// middlewares
const middleware = jsonServer.defaults()

// define a port for running json server
const PORT = 3000 || process.env.PORT

mpServer.use(middleware)
mpServer.use(router)

mpServer.listen(PORT,()=>{
   console.log(`mpserver successfully running in port:-${PORT}`)
})