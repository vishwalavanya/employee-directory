# 👨‍💼 Employee Directory — AJACKUS Frontend Assignment

This is a **fully client-side employee directory** built using `HTML`, `CSS`, `JavaScript`, and inspired by `Freemarker` templates. It includes essential features like **add/edit/delete employees**, **search/filter**, and a built-in **🌙 Dark Mode** toggle. All data is handled in-browser using `localStorage`.

> ✅ Live Demo:  
> 🔗 [https://vishwalavanya.github.io/employee-directory/](https://vishwalavanya.github.io/employee-directory/)

---

## 🚀 Features

- ✅ Add new employees with validation
- ✅ Edit and delete existing employees
- ✅ Search employees by name or email
- ✅ Responsive UI using CSS Grid
- ✅ Dark Mode toggle with localStorage memory
- ✅ Local data persistence (no backend needed)
- ✅ Organized code with modular JS structure
- ✅ Freemarker `.ftlh` layout replicated in HTML

---

## 🗂️ Project Structure

employee-directory/
├── index.html # Main app page (converted from index.ftlh)
├── README.md # Project overview (this file)
├── static/
│ ├── css/
│ │ ├── base.css # Styling with dark mode
│ │ ├── layout.css
│ │ └── components.css
│ └── js/
│ ├── app.js # Main app logic
│ ├── EmployeeManager.js # Data management
│ ├── UIController.js # DOM rendering
│ ├── filters.js # Search & filter logic
│ └── data.js # Mock data




---

## 📦 Tech Stack

| Tech         | Purpose                            |
|--------------|-------------------------------------|
| HTML/CSS     | Layout and styling (Freemarker-like) |
| JavaScript   | Dynamic behavior (add/edit/delete) |
| localStorage | Data persistence without backend   |
| GitHub Pages | Live deployment                    |

---

## 🎨 Freemarker Note

The original assignment asked for usage of **Freemarker `.ftlh` templates**.  
Since this is a **fully static frontend** app (as allowed in the PDF), the `.ftlh` layout was **converted to plain HTML**.

> ⚠️ Attempted to set up `freemarker-cli`, but the tool was broken (404 errors).  
> ✅ Instead, recreated the logic in `index.html` using JavaScript to simulate Freemarker’s data binding (e.g., `${emp.firstName}` → `emp.firstName` via JS).

---

## 🧪 How to Run This Project

> ✅ This is a static app — no server needed.

### Option 1: Open in Browser (locally)
1. Download or clone this repo
2. Open `index.html` in any browser

### Option 2: Run with VS Code + Live Server
1. Open project in VS Code
2. Install “Live Server” extension
3. Right-click `index.html` → "Open with Live Server"

---

## 🌙 Dark Mode Support

- Click the 🌙 / ☀️ toggle button on the top right
- Your theme preference is remembered in localStorage
- Form, cards, and background all adjust dynamically

---

## ✅ Improvements with More Time

- 🔐 Add user authentication & role access
- ☁️ Connect to backend (Node.js or Firebase)
- 📈 Add analytics, pagination, and role filters
- 🔍 Improve accessibility and ARIA support
- 🧪 Add unit tests (Jest or QUnit)

---

## 📸 Preview

> You can optionally add a GIF/screenshot preview here!

![Preview](https://via.placeholder.com/800x400.png?text=Live+Preview+Coming+Soon)

---

## 🙋‍♂️ Author

**J. Vishwa**  
- Final Year Mechatronics Engineering Student  
- Full Stack Developer | CCBP 4.0 Fellow  
- GitHub: [@vishwalavanya](https://github.com/vishwalavanya)

---

## 📌 Submission Info

| Item             | Link                                      |
|------------------|-------------------------------------------|
| 💻 GitHub Repo   | [employee-directory](https://github.com/vishwalavanya/employee-directory) |
| 🌐 Live Site     | [employee-directory on GitHub Pages](https://vishwalavanya.github.io/employee-directory/) |
