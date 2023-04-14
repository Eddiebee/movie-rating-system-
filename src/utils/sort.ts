const sort = (
  iteratee: string,
  sortOrder: string,
  iteratees: string[],
  sortOrders: string[]
) => {
  if (iteratees.includes(iteratee)) {
    const iterateeIndex = iteratees.indexOf(iteratee);
    if (sortOrders[iterateeIndex] === "asc") {
      sortOrders[iterateeIndex] = "desc";
    } else {
      sortOrders[iterateeIndex] = "asc";
    }
  } else {
    iteratees.push(iteratee);
    sortOrders.push(sortOrder);
  }

  return { sorted: iteratees, orders: sortOrders };
};

export default sort;
