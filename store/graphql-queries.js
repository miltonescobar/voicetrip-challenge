const LOCATIONS_QUERY = `query ($lat: Float!, $lng: Float!, $radius: Float!, $search: String, $price: Float) {
    locations(
      lat: $lat,
      lng: $lng,
      radius: $radius,
      search: $search,
      price: $price
    ) {
      id
      position {
        lat
        lng
      }
      name
      address {
        city
        street
        postCode
      }
      phone
      products {
        name
        price
      }
    }
  }`;
const PRODUCTS_QUERY = `{
  products
}`;

module.exports = {
  locations: LOCATIONS_QUERY,
  products: PRODUCTS_QUERY
}
