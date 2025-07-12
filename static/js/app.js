window.onload = () => {
  const form = document.getElementById("employee-form");
  const search = document.getElementById("search");
  const toggle = document.getElementById("theme-toggle");

  // Restore dark mode from localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️ Light Mode";
  } else {
    toggle.textContent = "🌙 Dark Mode";
  }

  // Theme toggle button click
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    toggle.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  // Initial render
  UIController.renderList(EmployeeManager.list());

  // Save or Update
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("employeeId").value;
    const employee = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      department: form.department.value.trim(),
      role: form.role.value.trim()
    };

    if (id) {
      EmployeeManager.update(parseInt(id), { id: parseInt(id), ...employee });
      showToast("✏️ Employee updated");
    } else {
      EmployeeManager.add({ id: Date.now(), ...employee });
      showToast("✅ Employee added");
    }

    form.reset();
    form.style.display = "none";
    applySearchFilter();
  });

  // Search filtering
  search.addEventListener("input", applySearchFilter);
  search.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      applySearchFilter();
    }
  });
};

function applySearchFilter() {
  const query = document.getElementById("search").value.trim().toLowerCase();
  const filtered = EmployeeManager.list().filter(emp =>
    emp.firstName.toLowerCase().includes(query) ||
    emp.lastName.toLowerCase().includes(query) ||
    emp.email.toLowerCase().includes(query)
  );
  UIController.renderList(filtered);
}

function handleDelete(id) {
  EmployeeManager.remove(id);
  applySearchFilter();
  showToast("🗑️ Employee deleted");
}

function handleEdit(id) {
  const emp = EmployeeManager.get(id);
  const form = document.getElementById("employee-form");

  if (!emp || !form) return;

  form.employeeId.value = emp.id;
  form.firstName.value = emp.firstName;
  form.lastName.value = emp.lastName;
  form.email.value = emp.email;
  form.department.value = emp.department;
  form.role.value = emp.role;

  form.style.display = "block";
  form.scrollIntoView({ behavior: "smooth" });
}

function cancelEdit() {
  const form = document.getElementById("employee-form");
  form.reset();
  form.employeeId.value = "";
  form.style.display = "none";
}

function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#323232",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    zIndex: 9999,
    opacity: 0.96
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}
