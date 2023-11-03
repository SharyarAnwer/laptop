//This will take in the app from the server and run it on the specified port

const server = require("./server")

const port = process.env.PORT || 5000

const startServer = () => {

    server.listen(port , () => {

        console.log(`Server running on port ${port}`)

    })
}

startServer()