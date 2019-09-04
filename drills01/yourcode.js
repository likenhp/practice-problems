
function sumArray(array){
    var sum = 0;
	for (var i = 0; i < array.length; i++ ){
        sum += array[i];
    };
    return sum;
}

function fitWithinVal(inputs, testVals){
    var newArray = [];
    var sum2 = 0;
    for (i =0; i < inputs.length; i++){
        sum2 += inputs[i];
        if(sum2 < testVals){
            newArray.push(inputs[i]);
        } else {
            sum2 -= inputs[i];
        }
    }return newArray;
}

function getAllNamesShorterThan(inputs2, testVals2){
    var newArray2 = [];
    for (i = 0;  i < inputs2.length; i++){
        var length = inputs2[i].length;
        if(length < testVals2){
            newArray2.push(inputs2[i]);
        } 
    }return newArray2
}

function makeLabel(objectQ){
    var line1 = objectQ.greeting + " " + objectQ.givenName + " " + objectQ.familyName;
    var line2 = objectQ["home address"].streetNumber + " " + objectQ["home address"].streetName;
    var line3 = objectQ["home address"].city + ", " + objectQ["home address"].state + " " + objectQ["home address"].zip;
    return line1 + "\n" + line2 + "\n" + line3;
    
}
