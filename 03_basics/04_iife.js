//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log('DB Connected');
})();

( (name) => {
    console.log(`DB connected two ${name}`);
    
} )('vansh')

