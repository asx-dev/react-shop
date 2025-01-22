const usePagination = (items, currentPage) => {
  const itemsPerPage = 12;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = items.slice(firstItem, lastItem);
  return { totalPages, currentItems };
};

export default usePagination;
