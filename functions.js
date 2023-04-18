//You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to
// manipulate and analyze the data. 

//Create an array containing the names of all items in the 
//inventory maximum of 10.
let arry = ["apple","melon","berry","pawpaw","orange","pineapple","kiki",
                 "kales","tomatoes","cabbage"]

//Create a separate array with the corresponding stock quantities
// of each item maximum of 10.
let arry2 = [{stock:"apple",value:3},{stock:"melon",value:4},{stock:"berry",value:2},{stock:"pawpaw",value:8},{stock:"orange",value:9},{stock:"pineapple",value:6},{stock:"kiki",value:7},{stock:"kales",value:5},{stock:"tomato",value:1},{stock:"cabbage",value:10}]


//Write a function to add a new item to the inventory, updating both arrays
function updateInv(){
    arry.push["onions"]
    arry2.push[{stock:"carrot",value:4}]
    addItem();
}
console.log(arry);
console.log(arry2);

//Write a function to update the stock quantity of an existing item.
const updateInv2 = arry2.map(element =>{
    if (element.stock =="apple"){
        element.value = 8
    }
    return element


})
console.log(updateInv2);

//Write a function to calculate the total number of items in the inventory.
function total (item){
  return item.value
}
function sum (prev, next){
    return prev + next
}
console.log(arry2.map(total).reduce(sum));

//Write a function to find the item with the lowest stock quantity.
function lowQuantity(){
    let lowest = Math.min(...arry2.map(each=>each.value))
    console.log(lowest)
}
lowQuantity()