const country = "Ukraine";
const people = "3 milion";

const yourCity = {
  fakeCity: "Warsaw",
  fakeInfo: {
    fakeCounty: "Polska",
    fakePeople: "1.2 milion",
  },
};

const myCity = {
  city: "Kyiv",
  info: {
    way: true,
    country: yourCity.fakeInfo.fakeCounty,
    people: yourCity.fakeInfo.fakePeople,
  },
};
console.log(myCity.info.country, myCity.info.people);
