function multiBracketValidation(string) {
  const regex = /[[|{|(]{1}[\]|}|)]{1}/;

  if(string.match(regex)) {
    return true;
  } else {
    return false;
  }

}

module.exports = multiBracketValidation;