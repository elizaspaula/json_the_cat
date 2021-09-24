const breeder = process.argv[2];

const request = require("request");

const fetchBreederDescription = (breeder, callback) => {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=" + breeder,
    (error, response, body) => {
      if (error) {
        return callback(error);
      } else {
        const data = JSON.parse(body);
        if (data.lenght === 0) {
          return callback("It's a breeder name");
        } else {
          return data[0].description;
        }
      }
    }
  );
};
console.log(fetchBreedDescription("Maine Coon"));
