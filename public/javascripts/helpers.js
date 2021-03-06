// Close flash message automatically after displayed 4 seocnds
$("#flash-box").alert();
window.setTimeout(function() { 
  $("#flash-box").alert('close'); 
}, 4000);

$(function () {
  $('#datetimepicker1').datetimepicker();
});

$(function () {
  $('#datetimepicker2').datetimepicker();
});


function getDayTilEnd(endDate) {
  var timeDiff = new Date(endDate).getTime() - new Date().getTime();
  if (timeDiff <= 0) {
    return '0 seconds';
  }
  var day = timeDiff / (1000 * 3600 * 24);
  if (day >= 2) {
    return parseInt(day) + ' days';
  }

  if (day < 1) { // in hours
    var hours = timeDiff / (60 * 60 * 1000);
    if (hours < 1) {
      return parseInt(timeDiff / (60 * 1000)) + ' minutes';
    }
    if (hours >= 2) {
      return parseInt(hours) + ' hours';
    }
    return '1 hour';
  }
  return '1 day';
}

// ===== Prettify the estimated delivery date
// $('.project-end-date').each(function(i, el){ 
//   console.log(el.innerHTML) 
//   el.innerHTML = getDayTilEnd(el.innerHTML) + '<br /> left';
// });

var dateList = $('.date-item'); 
(function(){
  $('.date-item').each(function(index, elem) {
    elem.innerHTML = moment(new Date(elem.innerHTML)).format("MMM Do, YYYY");
  });
})();

// Reset innerHTML value of an element
function resetInnerHTML(elementID){
  return document.getElementById(elementID).innerHTML = "";
}

// Check the string length
function checkStrLength(e, subject, limit, element_id, required) {
  var errorMsg = "";

  if (required === true) {
    if (!document.getElementById(element_id).value) {
      return subject + ' required';
    }  
    if(document.getElementById(element_id).value.trim().length < 1) {
      errorMsg += subject + ' required';
    }
  }

  var data = document.getElementById(element_id).value.trim();

  if(data.length > limit){
    errorMsg += subject + ' should be shorter than ' + limit;
  }

  if(errorMsg.length > 0){
    if(e){
      e.preventDefault();
    }

    return errorMsg;
  }

  return null;
}

//////////// Signup and Profile Update Form Check ////////////////////////

// Validate Email
function checkEmail(e, element_id){
  var email = document.getElementById(element_id).value.trim();
  var errorMsg = "";

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    errorMsg += "Email must be in valid format";
  }

  if (errorMsg.length > 0) {
    if(e){
      e.preventDefault();
    }
    return errorMsg;
  }
  return null;
}

// validate email confirmation
function checkEmailAgain(e, element_id_1, element_id_2) {
  var errorMsg = "";
  var email = document.getElementById(element_id_1).value.trim();
  var emailAgain = document.getElementById(element_id_2).value.trim();

  if (email !== emailAgain) {
    errorMsg = "Email confirmation doesn't match Email";
  }
  
  if (errorMsg.length > 0) {
    if(e){
      e.preventDefault();
    }
    return errorMsg;
  }
  return null;
}

// Check Password
function checkPassword(e, element_id) {
  var password = document.getElementById(element_id).value.trim();

  var errors = [];

  if (password.length > 30) {
    errors.push("Password must be less than 31 chars");
  }

  if (password.length < 8) {
    errors.push("Password must be longer than 7 chars");
  }

  if (!password.match(/\d/g)) {
    errors.push("Password needs a number");
  }

  if (!password.match(/[a-z]/g)) {
    errors.push("Password needs a lowercase letter");
  }

  if (!password.match(/[A-Z]/g)) {
    errors.push("Password needs an uppercase letter");
  }

  if (errors.length > 0) {
    if(e){
      e.preventDefault();
    }
    return errors;
  }
  return null;
}

function checkPasswordAgain(e, element_id_1, element_id_2) {
  var errorMsg = "";
  var password = document.getElementById(element_id_1).value.trim();
  var passwordAgain = document.getElementById(element_id_2).value.trim();

  if (password !== passwordAgain) {
    errorMsg = "Password confirmation doesn't match Password";
  }
  
  if (errorMsg.length > 0) {
    if(e){
      e.preventDefault();
    }
    return errorMsg;
  }
  return null;
}