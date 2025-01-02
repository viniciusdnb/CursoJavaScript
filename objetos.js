const car = {
    type: "fiat",
    model: "500",
    color: "white",
    weight: "850kg",
    status: false,
    start: function(){
        if(!this.status){
            this.status = true;
            console.log("car starting");
            return;
        }
        console.log("car on!");
        return;
        
    },
    drive: function(direction){
        console.log( "drive " + direction);
        return;

    },

    brake: function(){
        console.log( "car braking!");
        return;
    }

};

const person = {
    firstName: "john",
    lastName: "doe",
    age: 50,
    eyeColor: "blue",
    id: 5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    myCars:{
        car1: "ford",
        car2: "BMW",
        car3: "fiat"
    }
};



console.log(car);
car.start();
console.log(car.status);