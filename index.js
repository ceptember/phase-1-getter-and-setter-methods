class Circle {
    constructor (radius){
        this.radius = radius; 
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return this.diameter * Math.PI; 
    }

    get area(){
        return Math.PI * this.radius * this.radius; 
    }


    set diameter(diameter){
        this.radius = diameter/2; 
    }

    set circumference(circumference){
        this.radius = circumference/(2 * Math.PI);
    }

    set area(area){
        this.radius = Math.sqrt(area/Math.PI)
    }

}

let small = new Circle(5); 
console.log(small.diameter); 
console.log(small.circumference); 
console.log(small.area); 

