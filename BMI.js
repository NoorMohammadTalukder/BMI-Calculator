const form = document.querySelector("#myForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      const weightInput = document.querySelector("#weightInput");
      const heightInput = document.querySelector("#heightInput");
      const output = document.querySelector("#output");
      const error = document.querySelector("#error");
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);
      let BMI = weight / (height * height);
     
      if(isNaN(BMI) || height==0 || weight==0){
        error.innerHTML = "Kindly Enter A Valid Input ";
        output.innerHTML = "";
      }else{
        output.innerHTML = "Your BMI: " + BMI;
        error.innerHTML = "";
      }
     
      
    });