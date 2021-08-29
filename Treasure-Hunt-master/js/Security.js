class Security {

    constructor(){

        // Add code to create the input and button elements
this.access1 = createInput("code1")
this.access1.position(100,90);
this.access1.style('background','white');

this.button1 = createButton('check');
this.button1.position(100,120)
this.button1.style('background','lightgrey')

    }
   

    display(){

        // Add code to make the buttons function as expected
    this.button1.mousePressed(() =>{
    if(system.authenticate(accessCode1,this.access1.value())){
     this.button1.hide();
     this.access1.hide();
     score ++; 
    }
 });
  }
}