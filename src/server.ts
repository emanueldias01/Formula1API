import fastify from "fastify";

const server = fastify();

const teams = [
    {id : 1, name : "McLaren", base : "Woking, United Kingdom"},
    {id : 2, name : "Mercedes", base : "Brackley, United Kingdom"},
    {id : 3, name : "Red Bull Racing", base : "Milton Keynes, United Kingdom"}
];

const drivers = [
    {id : 1, name : "Max Verstappen", team : "Red Bull Racing"},
    {id : 2, name : "Lewis Hamilton", team : "Ferrari"},
    {id : 3, name : "Lando Norris", team : "McLaren"}
];

server.get("/teams", async (req, res) => {
    res.type("application/json");
    return { teams };
});

server.get("/drivers", async(req, res) => {
    res.type("applicatio/json");
    return { drivers };
});

server.listen({port : 3333}, () => {
    console.log("app running in 3333");
});