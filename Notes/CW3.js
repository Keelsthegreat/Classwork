//Assignment is to put 6 chores in parent functions. add 3 other things to smaller function. 

function choreOne() {
    Bed = ["Fluff Pillows", "Change Sheets", "Spray Disinfectant"];
    return Bed;
  }
  
  function choreTwo(Bathroom) {
    Bathroom = ["Scrub Toilet", "Scrub Tub", "Scrub Sink", "Mop Floor"];
    return Bathroom;
  }
  
  function choreThree(Kitchen) {
    Kitchen = ["Wash Dishes", "Clean Fridge", "Throw out Garbage"];
  
    return Kitchen;
  }
  
  function choreFour(LivingRoom) {
    LivingRoom = ["Vacuum Floor", "Vacuum couch", "Spray Disinfectant"];
  
    return LivingRoom;
  }
  
  function choreFive(Backyard) {
    Backyard = ["Mow Lawn", "Trim Hedges", "Wash Pavement"];
  
    return Backyard;
  }
  
  function choreSix(Garage) {
    Garage = ["Organize Clutter", "Clean Car", "Sweep and Mop"];
  
    return Garage;
  }
  
  function doAllChores() {
    choreOne();
    choreTwo();
    choreThree();
    choreFour();
    choreFive();
    choreSix();
    
  }
  
  doAllChores();

  console.log(choreOne());
  console.log(choreTwo());
  console.log(choreThree());
  console.log(choreFour());
  console.log(choreFive());
  console.log(choreSix());