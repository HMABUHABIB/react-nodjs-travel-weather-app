/*
updateLocalStorage:This Function used to update and read the list of the cites as an array from the local storage of the user
*/

const updateLocalStorage = (newCity) => {
  /* 
    Check if the words list array is already there in the local user storage
   */
  if (localStorage.getItem("wordsList")) {
    /* 
    //if the array is there => if the array is there => Loop on the array to check if the city is there before
    */

    const words = JSON.parse(localStorage.getItem("wordsList"));
    let isTheCityInTheList = false;
    for (let i = 0; i < words.length; i++) {
      /*
       if the city is found add 1 to city object value
       */

      if (words[i].text === newCity) {
        words[i].value++;
        isTheCityInTheList = true;
        localStorage.setItem("wordsList", JSON.stringify(words));
      }
    }
    if (!isTheCityInTheList) {
      /*
      // if the city is not found add new city to the array
      */
      words.push({
        text: newCity,
        value: 1,
      });
      localStorage.setItem("wordsList", JSON.stringify(words));
    }
  } else {
    /*
    // if the array is not found on localStorage create a new array and save it to the local Storage
    */
    const words = [
      {
        text: newCity,
        value: 1,
      },
    ];
    localStorage.setItem("wordsList", JSON.stringify(words));
  }
};

export default updateLocalStorage;
