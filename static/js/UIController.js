const UIController = (() => {
  const listContainer = document.getElementById("employee-list");

  const renderList = (data) => {
    listContainer.innerHTML = "";
    data.forEach(emp => {
      const card = document.createElement("div");
      card.className = "employee-card";
      card.innerHTML = `
        <h3>${emp.firstName} ${emp.lastName}</h3>
        <p>Email: ${emp.email}</p>
        <p>Department: ${emp.department}</p>
        <p>Role: ${emp.role}</p>
        <div class="button-group">
          <button onclick="handleEdit(${emp.id})">Edit</button>
          <button onclick="handleDelete(${emp.id})">Delete</button>
        </div>
      `;
      listContainer.appendChild(card);
    });
  };

  return { renderList };
})();
