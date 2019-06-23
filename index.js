// A driver has mayn trips and has many passengers through trips.
let store = { drivers: [], passengers: [], trips: [] };

class Driver{
  constructor(name){
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }
}
