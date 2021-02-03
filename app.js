//Hidding the Output div tag  initially, when user enter the page
document.getElementById('output').style.visibility = 'hidden';
//Get the input 
document.getElementById('lbsInput').addEventListener('input', weightConverter);

//weightConverter Function
function weightConverter(e) {
    //Make the output content visible only when the event is triggered
    document.getElementById('output').style.visibility = 'visible';
    //console.log(e.target.value);
    //Get the input value
    let lbs = e.target.value;

    //Get the weight conversion output in grams
    let gramsOutput = document.getElementById('gramsOutput');
    gramsOutput.innerHTML = lbs / 0.0022046;
    //console.log(gramsOutput);

    //Get the weight conversion output in kilograms
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;

    //Get the weight conversion output in ounces
    document.getElementById('ozOutput').innerHTML = lbs * 16;
}