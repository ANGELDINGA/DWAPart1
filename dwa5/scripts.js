// Select the HTML form element with the attribute [data-form]
const form = document.querySelector("[data-form]");

// Select the HTML element with the attribute [data-result]
const result = document.querySelector("[data-result]");


// This function handles form submission and performs division.

try {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    
      const divisionResult = dividend / divider;
      result.innerText = divisionResult;
  
    // check if either entries are empty
    if(dividend === '' || divider === ''){
     result.innerText = "Division not perfomed. Both values are required in inputs. Try again";
     console.error(new Error('Invalid input'));
     
    }else if(isNaN(dividend) || isNaN(divider)){ //when user enters characters other than numbers in the entries
      document.body.innerHTML = "Something critical went wrong. Please reload the page";
      console.error(new Error('Invalid dividend or divider entered'));
  
    }else if(divider <= 0){ // check if the divider is less than zero
      result.innerText = "Division not perfomed. Invalid number provided. Try again.";
      console.error(new Error("Invalid divider provided."))
     }else {
    // converts decimals to a single whole number
        result.innerText = Math.floor(divisionResult);
     }
  
  });
} catch (error) {
  result.innerText = error.message;
}

/* try test a block of code for errors
catch handle the errors
throw create custom errors
finally execute after try and catch regardless */