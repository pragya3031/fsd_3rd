async function f(){
    let response= await fetch('http://xyzurl');


}
//f() becomes the rejected promise because the url is not correct and it will throw an error. To handle this error we can use try catch block.
f().catch(alert);
//this catch method will catcch the error and the alert here define or display the error message in the alert box.the alert box is a built in function in the browser that displays an alert dialog with the specified message and an OK button. In this case, it will display the error message that was caught by the catch method.