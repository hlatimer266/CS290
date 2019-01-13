function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator,array ){
    
    /*your code here*/
    var len = array.length;
    var arr = array.slice(0);
    
   for (var i = len-1; i>=0; i--){
   
     for(var j = 1; j<=i; j++){
       if(comparator(arr[j-1],arr[j])){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    /* your code here*/
    if (auto1.year <= auto2.year){
            return true;
    }else {
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    /* your code here*/
   
    if(auto1.make.toLowerCase() >= auto2.make.toLowerCase()){
        return true;
    }else {
        return false;
    }
}

function typeComparator( auto1, auto2){
    /* your code here*/
    function ranking(auto) {
    switch (auto.toLowerCase()) {
    case auto = 'roadster':
        return 1;
    case auto = 'pickup':
        return 2;
    case auto = 'suv':
        return 3;
    case auto = 'wagon':
        return 4;
    default:
        return 5;
    }
}
    if(ranking(auto1.type) >= ranking(auto2.type)){
        return true;
    }else {
        return false;
    }
}

Automobile.prototype.logMe = function(printType){
    if(printType == true){
    console.log(this.year + ' ' + this.make + ' ' +this.model + ' '+ this.type);
  }else {
    console.log(this.year + ' ' + this.make + ' ' +this.model);
  }
}

function printAutos(array,printType) {
    array.forEach(function(element){
    element.logMe(printType)
  })
}


var yearArr = sortArr(yearComparator,automobiles);
var makeArr = sortArr(makeComparator,automobiles);
var typeArr = sortArr(typeComparator,automobiles);

console.log("*****");
console.log('Cars Sorted by Year:');
printAutos(yearArr,false);
console.log('');
console.log('Cars Sorted by Make:')
printAutos(makeArr,false);
console.log('');
console.log('Cars Sorted by Type:')
printAutos(typeArr,true);
console.log("*****");

