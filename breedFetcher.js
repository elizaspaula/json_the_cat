const breeder = process.argv[2];

const request = require("request");

const fetchBreedDescription = (breeder, callback) => {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breeder,
    (error, response, body) => {
      if (error) {
        callback(error);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("It's not a breeder name");
        } else {
          callback(data[0].description);
        }
      }
    }
  );
};

const printOutCatBreeder = (breeder) => {
  console.log("Return value:", breeder);
};

fetchBreedDescription(breeder, printOutCatBreeder);
