//Filter the restraurants data according to input type
export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter(
    (restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    // optional chaining
  );
  return filterData;
}
