import fastify from "fastify";

const server = fastify();

interface DataParams{
    id : string
}


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

server.get("/drivers", async (req, res) => {
    res.type("application/json");
    return { drivers };
});

server.get<{Params: DataParams}>("/drivers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const driver = drivers.find(d => d.id === id);
    if(!driver){
        res.type("application/json").code(404).send({ error: "Driver not found" });;
    }else{
        res.type("application/json").code(200);
        return driver;
    }
});

server.get<{Params : DataParams}>("/teams/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const team = teams.find(t => t.id === id);
    if(!team){
       res.type("application/json").code(404).send({ error: "Team not found" });; 
    }else{
      res.type("application/json").code(200);
        return team; 
    }
})

server.listen({port : 3333}, () => {
    console.log("app running in 3333");
});