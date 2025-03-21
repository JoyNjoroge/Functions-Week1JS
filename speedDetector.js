function checkSpeed() {
    const input = prompt("Enter the speed of the car (in km/h):");
    const speed = Number(input);

  
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed <= speedLimit) {
      alert("Ok");
    } else {
      const overSpeed = speed - speedLimit;
      const points = Math.floor(overSpeed / kmPerPoint);
  
      alert(`Points: ${points}`);
  
      if (points >= 12) {
        alert("License suspended 🚫");
      }
    }
  }