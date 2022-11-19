export const compilerFunction = (email) => {
  let error = false;
  let arroba = false;

  const emailArray = email.split("");
  console.log(emailArray);
  const lastIndex = emailArray.length - 1;

  if (emailArray[lastIndex - 2] !== ".") {
    error = true;
  }

  function isNumeric(num) {
    return !isNaN(num);
  }

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/);
  }

  if (!(isNumeric(emailArray[0]) || isLetter(emailArray[0]))) {
    error = true;
    console.log("El primer caracter es invalido");
  }

  emailArray.forEach((element, idx) => {
    if (isNumeric(element)) {
      console.log(element, "es numero");
    } else if (isLetter(element)) {
      console.log(element, "es letra");
    } else if (element === "_") {
      if (arroba) error = true;
      console.log(element, "es _");
      if (emailArray[idx + 1] === "_" && emailArray[idx + 2] !== "@") {
        error = true;
        console.log("No se pueden repetir _ a menos que sea el final");
      }
    } else if (element === "@") {
      console.log(element, "es @");
      if (arroba) {
        error = true;
      } else {
        arroba = true;
      }
    } else if (element === ".") {
      console.log(element, "es .");
      if (emailArray[idx + 1] === ".") {
        error = true;
      }

      if (arroba) {
        emailArray[idx - 1] === "." ||
        emailArray[idx - 2] === "." ||
        emailArray[idx - 1] === "@" ||
        emailArray[idx - 2] === "@"
          ? (error = true)
          : console.log('correcto');
      }
    } else {
      console.log(element, "esta mal");
      error = true;
    }
  });

  return error;
};
