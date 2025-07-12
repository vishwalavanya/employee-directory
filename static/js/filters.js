const Filters = (() => {
  const search = (employees, query) => {
    return employees.filter(emp =>
      emp.firstName.toLowerCase().includes(query.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(query.toLowerCase()) ||
      emp.email.toLowerCase().includes(query.toLowerCase())
    );
  };

  return { search };
})();
