const EmployeeManager = (() => {
  let employees = [...mockEmployees];

  const add = (employee) => {
    employee.id = Date.now();
    employees.push(employee);
  };

  const update = (id, updatedEmployee) => {
    employees = employees.map(emp => emp.id === id ? { ...emp, ...updatedEmployee } : emp);
  };

  const remove = (id) => {
    employees = employees.filter(emp => emp.id !== id);
  };

  const get = (id) => employees.find(emp => emp.id === id);

  const list = () => employees;

  return { add, update, remove, get, list };
})();
