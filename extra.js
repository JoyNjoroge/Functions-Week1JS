//1st
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  //2nd
  function steps(n) {
    for (let i = 1; i <= n; i++) {
      let step = "";
      for (let j = 1; j <= i; j++) {
        step += "#";
      }
      console.log(step);
    }
  }
  
//3rd
  function Cylinder(radius, height) {
    this.radius = radius;
    this.height = height;
  
    this.getVolume = function () {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(4); // returns string with 4 decimal places
    };
  }
  
   