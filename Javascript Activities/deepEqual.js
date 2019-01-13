
function deepEqual(obj_1,obj_2) {
          if(typeof(obj_1) != "object" & typeof(obj_2) != "object"){
                   if(obj_1 === obj_2){
                       return true;
                       }
          else{
                     return false;
                }
        }
    else if (typeof(obj_1) === "object" & typeof(obj_2) === "object"){

              for (var val in obj_1) {

               if(!deepEqual(obj_1[val],obj_2[val])){

              return false;
             }

          }
         return true;
    }
else{
      return false;
    }

}


let obj = {here:{is:"an"}, object:2};

console.log(deepEqual(obj,obj));

console.log(deepEqual(obj,{here:1, object:2}));

console.log(deepEqual(obj,{here:{is:"an"}, object:2}));