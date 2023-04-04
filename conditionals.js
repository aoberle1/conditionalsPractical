// road trip planner
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;

// check if there's room for everyone
if( seatsInCar >= passengers && infantSeats >= infants ){
    console.log( 'Ready for road trip!' );
        if( fullTank === true ){
            console.log( 'ready to hit the highway' );
        }
            else{
            console.log( 'need to gas up before interstate' );
        }                
} // end enough seats
else {
    console.log( 'Not ready, check car, passengers, and equpment' );
} // not enough seats

