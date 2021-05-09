const updateLocalStorage = (newCity) => {
  if (localStorage.getItem("wordsList")) {
    const words = JSON.parse(localStorage.getItem("wordsList"));
    let isTheCityInTheList = false;
    for (let i = 0; i < words.length; i++) {
      if (words[i].text === newCity) {
        words[i].value++;
        console.log(words[i]);
        isTheCityInTheList = true;
        localStorage.setItem("wordsList", JSON.stringify(words));
      }
    }
    if (!isTheCityInTheList) {
      words.push({
        text: newCity,
        value: 1,
      });
      localStorage.setItem("wordsList", JSON.stringify(words));
    }
  } else {
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
