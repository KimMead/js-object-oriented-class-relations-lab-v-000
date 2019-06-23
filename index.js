// A driver has mayn trips and has many passengers through trips.
let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }
}
