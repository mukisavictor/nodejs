const EventEmitter=require("node:events");
const emitter=new EventEmitter();
class DrinkMachine {
    serveDrink(size){
        if (size==="large"){
            console.log("Serving complimentary drink")
        }
    }
}
module.exports=DrinkMachine;