const dbUrl = (name) => {
  return `https://www.airasia.com/aa/mytravels/images/destinations/asia/${name}.jpg`;
};

export const countries = [
  {
    id: 1,
    name: "Azerbaijan",
    url: dbUrl("Azerbaijan"),
  },
  {
    id: 2,
    name: "Bahrain",
    url: dbUrl("Bahrain"),
  },
  {
    id: 3,
    name: "Cambodia",
    url: dbUrl("Cambodia"),
  },
  {
    id: 4,
    name: "Hong Kong",
    url: dbUrl("HongKong"),
  },
  {
    id: 5,
    name: "Indonesia",
    url: dbUrl("Indonesia"),
  },
  {
    id: 6,
    name: "Japan",
    url: dbUrl("Japan"),
  },
  {
    id: 7,
    name: "Malaysia",
    url: dbUrl("Malaysia"),
  },
  {
    id: 8,
    name: "Nepal",
    url: dbUrl("Nepal"),
  },
];

export const message = [
  "Choose at least one to continue",
  "Great!",
  "That's cool!😎",
  "Awesome!! 👌",
  "Keep going! 👍",
  "Good pick! 😍",
];
