const roads = [ // Const array sem heldur utan um allar götur á milli staðsetninga
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) { // buildGraph býr til graph af öllum road tengingum
  let graph = Object.create(null); // býr til tómt object sem heitir graph
  function addEdge(from, to) { // býr til array af edges
    if (graph[from] == null) { // ef að from er tómt
      graph[from] = [to]; // breyttu from í to
    } else {
      graph[from].push(to); // annars setja to í from arrayið
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) { //for of loop sem setur saman to-from og from-to edges
    addEdge(from, to); // setur from-to í graph
    addEdge(to, from); // setur to-from í graph
  }
  return graph; //skilar graph
}

const roadGraph = buildGraph(roads); // býr til map sem er const

class VillageState { // heldur utan um staðsetningar á vélmenni og delivery parcels
  constructor(place, parcels) { // constructor fyrir klasann
    this.place = place; 
    this.parcels = parcels;
  }

  move(destination) { // move function inni í klasanum
    if (!roadGraph[this.place].includes(destination)) { // ef að áfangastaður er ekki einu move frá þér
      return this; // skila gömlu staðsetningu
    } else { // annars
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p; // skilar parcels ef vélmennið er ekki á parcels
        return {place: destination, address: p.address}; // skilar destination og parcel destination
      }).filter(p => p.place != p.address); // hunsar allt sem er ekki parcel address
      return new VillageState(destination, parcels); // Uppfærir VillageState
    }
  }
}

function runRobot(state, robot, memory) { // function sem byrjar að hreyfa vélmennið
  for (let turn = 0;; turn++) { // endalaust for loop sem heldur utan um hversu oft vélmennið hefur hreyft sig
    if (state.parcels.length == 0) { // ef að öll parcels eru komin á réttann stað
      console.log(`Done in ${turn} turns`); // prentar út hversu mörg turn það tók að klára allt
      break; // stoppar for loopið
    }
    let action = robot(state, memory); // action er það sem vélmennið gerir núverandi turn
    state = state.move(action.direction); // uppfærir state
    memory = action.memory; // uppfærir memory
    console.log(`Moved to ${action.direction}`); // prentar út hvert vélmennið hreyfði sig
  }
}

function randomPick(array) { // velur random index úr array
  let choice = Math.floor(Math.random() * array.length); // notar random functionið til að velja random index úr array
  return array[choice]; // skilar handahófsvalda gildinu
}

function randomRobot(state) { // vélmenni sem hreyfir sig randomly
  return {direction: randomPick(roadGraph[state.place])}; // skilar random átt til að fara í
}

VillageState.random = function(parcelCount = 5) { // býr til random village
  let parcels = []; // býr til tómt array fyrir parcels
  for (let i = 0; i < parcelCount; i++) { // for loop sem býr tl parcels
    let address = randomPick(Object.keys(roadGraph)); // setur random parcel addressu
    let place; // staðsetning
    do { // do while loop
      place = randomPick(Object.keys(roadGraph)); // velur random staðsetningu sem place
    } while (place == address); // á meðan place == address
    parcels.push({place, address}); // pushar place og address í parcels arrayið
  }
  return new VillageState("Post Office", parcels); //skilar VillageState með öllum parcel staðsetningum
};

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]; // Route fyrir routeRobot

function routeRobot(state, memory) { // vélmenni sem notar mailRoute til að færa sig á milli staða
  if (memory.length == 0) { // ef memory er tómt
    memory = mailRoute; // breyta memory í mailroute
  }
  return {direction: memory[0], memory: memory.slice(1)}; // skilar áttinni sem hann á að fara í
}

function findRoute(graph, from, to) { // finnur stystu leið að næsta parcel
  let work = [{at: from, route: []}]; // array sem heldur utan um at og route
  for (let i = 0; i < work.length; i++) { // for loop sem keyrir jafn oft og lengdin á work arrayinu
    let {at, route} = work[i]; // 
    for (let place of graph[at]) {
      if (place == to) return route.concat(place); // ef place == to 
      if (!work.some(w => w.at == place)) { // 
        work.push({at: place, route: route.concat(place)}); // 
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}
runRobot(VillageState.random(), randomRobot);
