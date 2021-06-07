const lastPages = totalPages => {
  return [
    totalPages - 4,
    totalPages - 3,
    totalPages - 2,
    totalPages - 1,
    totalPages,
  ];
};

export const getPagesList = (totalPages, currentPage) => {
  const list = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (currentPage === totalPages) {
    list.splice(0, totalPages - 3);
  } else if (currentPage === 1 || currentPage === 2) {
    list.splice(3, totalPages - 6, null);
  } else if (currentPage >= 3 && !lastPages(totalPages).includes(currentPage)) {
    list.splice(0, currentPage - 2);
    list.splice(3, list.length - 6, null);
  } else if (lastPages(totalPages).includes(currentPage)) {
    list.splice(0, totalPages - (totalPages - currentPage + 2));
  }

  return list;
};
