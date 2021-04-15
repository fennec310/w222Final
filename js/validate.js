function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');

  var lat = document.getElementById("lat").value;
  var lng = document.getElementById("lng").value;
  var val1 = isLatitudeCorrect(lat);
  var val2 = isLongitudeCorrect(lng);

  return val1 && val2;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

function isLatitudeCorrect(latValue){
  var valid = false;
  var err = document.getElementById("latErr"); 
  var val1 = isAllNumber(latValue);
  
  if(val1){
    if(isInRange(latValue, -90, 90)){
      valid = true;
      if(err.innerText != "*"){err.innerText = "*";}
    }
  }

  if(!valid){  
  if(err.innerText = "*"){err.innerText += "must be a valid Latitude (-90 to 90)";}
  }
  return valid;
}

function isLongitudeCorrect(lngValue){
  var valid = false;
  var err = document.getElementById("lngErr");
  var val1 = isAllNumber(lngValue);
  if(val1){
    if(isInRange(lngValue, -180, 180)){
      valid = true;
      if(err.innerText != "*"){err.innerText = "*";}
    }
 
  if(!valid){
    if(err.innerText = "*"){err.innerText += " must be a valid Longitude (-180 to 180)";}
  } 
}
  return valid;
}

function isAllNumber(str){
  var valid = false;
  var regNum = /[-+]?([0-9]*\.[0-9]+|[0-9]+)/;
  if(regNum.test(str)) {valid = true;}
  return valid;
}

function isInRange(num, min, max){
  var valid = false;
  if(num >= min && num <= max){
    valid = true;
  }
  return valid;
}