/* consider wrapping your code with "domcontentloaded" or "load" (load is old and waits for images), these make sure that the site is ready before the code can be executed

document.addEventListener('DOMContentLoaded',  ()=>{all the code goes here}) that's an arrow function btw, like a normal function with minor differences

this only applies if you intend to place your script anywhere above your html code, I prefer it */





//this gets the button with id 'btn' from firstweb.html and assigns it to 'button'
const button = document.getElementById('btn')

/*this listens for the btn from firstweb.html. 
When that button is clicked, it will output 'click', which will be picked up by this listener.
This will then trigger the function reveal() */
button.addEventListener("click", reveal); //good

/*this function will check whether the display property of the 'appraiser_table' div is set to none, and if it is set to none it will change it to block.
This will make the div visible, revealing the appraisers comments table. */
function reveal() {
    
    var x = document.getElementById("appraiser_table"); //use let, let is only block scoped and is simply a more efficient thing to use, google the difference there is not enough space on this row (i am actually just lazy)
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } //ye this is fine
}

// semicolons ; are optional btw, see your line 12. You'll have to use them for any "inline" code but ye