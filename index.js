// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver (name) {
  let newDrivers = drivers.slice()
  newDrivers.push(name);
  return newDrivers;
};
// Another Way:
// function appendDriver(name){
//   let newDriver = [...drivers, name]
//   return newDriver;
// }

function prependDriver (name) {
  let newDrivers = drivers.slice()
  newDrivers.unshift(name);
  return newDrivers;
};
// function prependDriver(name){
//   let newDriver = [name, ...drivers]
//   return newDriver;
// }

function removeLastDriver() {
  let removeDrivers = drivers.slice()
  removeDrivers.pop();
  return removeDrivers;
};
// return newDrivers.slice(0, newDrivers.length - 1);

function removeFirstDriver() {
    let removeFirst = drivers.slice(1);
    return removeFirst;
};