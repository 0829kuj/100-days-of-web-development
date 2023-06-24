const path = require('path');
const fs = require('fs');

function getStoredRestaurants() {
  const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storedRestaurants(storedRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants, // 임의로 지정한 이름 : 다른 파일에 노출하려는 항목의 이름
  storedRestaurants: storedRestaurants,
};
