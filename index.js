const cats = ["Milo", "Otis", "Garfield"];

// Array functions
function destructivelyAppendCat(Bob){
    cats.push(Bob)
    return cats

}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
 
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
    return cats
}


beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
     // Array Functions 
     function destructivelyRemoveLastCat(){
        cats.splice(-1);
        return cats
     }


     beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
    

      function destructivelyRemoveFirstCat(){
        cats.shift();
        return cats
      }


      beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
    
       function appendCat(name){
        const catArr =[...cats, name]
        return catArr
       }

       beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
    
      function prependCat(name){
        const catArr =[name, ...cats]

        return catArr
      }

      beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
      function removeLastCat(){
        const catArr = cats.slice(0, -1)
        return catArr
      }

      beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
    
      function removeFirstCat(){
        const catArr = cats.slice(1)
        return catArr
      }



      


      

    





  
