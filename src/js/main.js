import {it, expect} from "./test_lib";
import {Dog} from "./constructors/dog";
import {Human} from "./constructors/person";
// Uncomment the line below for Hard Mode and define
// Human and Coffee objects to complete the Hard mode.
// Only do this *after* Normal Mode is finished!
// import {coffee, human} from "./bonus";

// Do not ADD or MODIFY code below this line :)
// Dogs
let sadie = new Dog({
  color: 'black',
  hungry: false
});

let moonshine = new Dog({
  color: 'blue-red'
});

let atticus = new Dog();

// Humans
let mason = new Human();

let julia = new Human({
  cool: true
});

// Tests
it("should make Sadie happy when Mason pets her", function() {
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function() {
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function() {
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function() {
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function() {
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});
