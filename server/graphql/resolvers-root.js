const originalLocations = require('../../data/locations')
const products = require('../../data/products')

const distance = (p1, p2) => {
    const toRad = (Value) => Value * Math.PI / 180;
    const R = 3958.7558657440545; 
    const dLat = toRad(p2.lat-p1.lat);
    const dLon = toRad(p2.lng-p1.lng); 
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(p1.lat)) * Math.cos(toRad(p2.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
  };
//****************************************************************
//****************************************************************  
  const locations = ({
    lat,
    lng,
    radius = 5,
    search = '',
    price = 10,
  }) => originalLocations.filter((loc) => {
    if (distance({
      lat,
      lng,
    }, loc.position) > radius) {
      return false;
    }
    if (search.length > 0) {
      const re = new RegExp(search, 'i');
      let found = false;
      loc.products.forEach(p => {
        if (re.test(p.name) && p.price < price) {
          found = true;
        }
      });
      if (!found) {
        return false;
      }
    }
    return true;
  });

  module.exports = {
    locations,
    products: ()=> products
  };