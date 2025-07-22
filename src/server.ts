import fastify from "fastify";


const server = fastify()

server.get("/teams", async (req, res) => {
    res.type("application/json");
    return[{id : 1, team : "Ferrari"}];
})

server.get("/drivers", async(req, res) => {
    res.type("applicatio/json");
    return [{id : 1, name : "Max Verstappen", team : "Red Bull Racing"}]
})

server.listen({port : 3333}, () => {
    console.log("app running in 3333");
})