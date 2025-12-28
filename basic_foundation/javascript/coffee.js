const boilmilk=(milk)=>{
    console.log("boiling milk");
    {
        return "boiled"+milk;}}

const boilwater=(water)=>{
    console.log("boiling water");
    {
       return "boiled "+water;}}

const grindcoffeebeans=(coffeebeans)=>{
    console.log("grinding coffeebeans");
    {
        return "ground"+coffeebeans;}}

const brewcoffee=(boiledwater,grindcoffeebeans,boiledmilk)=>{
    console.log("brewing coffee");
    return "brewed "+ grindcoffeebeans +" with "+ boiledwater +" and "+ boiledmilk;
}
const addhoney=(coffee)=>{
   console.log("adding honey to coffee");
    return "honey";
}
const makecoffee=(milk,water,coffeebeans,coffee)=>{
    let boiledmilk=boilmilk(milk);
    let boiledwater=boilwater(water);
    let groundcoffeebeans=grindcoffeebeans(coffeebeans);
    let honey=addhoney(coffee);
    let brewedcoffee=brewcoffee(boiledmilk,groundcoffeebeans,boiledwater);
    return brewedcoffee;
}
let coffee=makecoffee("milk","water","coffeebeans","coffee");
console.log(coffee);

function servecoffee(brewedcoffee){{
    console.log(brewedcoffee+" is served with honey");
}}
return servecoffee(coffee);

