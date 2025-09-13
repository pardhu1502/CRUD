# CRUD Application

## 📌 Project Overview

This is a simple **CRUD (Create, Read, Update, Delete)** web application built using **Node.js**, **Express.js**, and **EJS**. It allows users to manage a list of data records — you can add new items, view existing ones, edit them, and delete them.

This app is ideal for learning how CRUD operations work in a server-side rendered application.

---

## 🚀 Features

- 📝 Create new entries using an HTML form
- 📋 Display all records on the home page
- ✏️ Edit existing records using an edit form
- 🗑️ Delete any record from the list
- 🎨 Simple UI using EJS templates
- 🧩 Modular code with routes, models, and views

---

## 🛠️ Tech Stack

| Layer        | Technology          |
|--------------|---------------------|
| Server       | Node.js + Express.js |
| Templating   | EJS                 |
| Language     | JavaScript (ES6)    |
| Styling      | CSS (vanilla)       |
| Database     | MongoDB             |

---

## 📁 Folder Structure

CRUD/
├── views/ # EJS templates for pages
│ ├── add.ejs
│ ├── edit.ejs
│ └── index.ejs
├── routes/ # Route definitions
│ └── index.js
├── public/ # Static files (CSS, images, etc.)
│ └── style.css
├── models/ # Data logic (could be a JS object, DB model etc.)
│ └── record.js
├── app.js # Main application entry point
├── package.json # Project metadata & dependencies
└── README.md # This file


---

## 🧰 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node)

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/pardhu1502/CRUD.git
cd CRUD
npm install
node app.js
http://localhost:3000
```



✨ Usage

Home page lists all items (Read).

Click “Add” to create a new entry (Create).

Use the “Edit” button next to each record to update it (Update).

Use the “Delete” button to remove a record (Delete).

🔮 Future Enhancements

Add user authentication (login/logout)

Add flash messages for user feedback

Improve UI/UX with Bootstrap or Tailwind CSS

Add pagination for large datasets

Create REST API endpoints

🤝 Contributing

Contributions are welcome! Here's how you can help:

Fork this repository

Create a new branch: git checkout -b feature/feature-name

Make your changes and commit them

Push to your fork: git push origin feature/feature-name

Submit a pull request


👤 Author

Maintained by Palli Pardha Saradhi Charan
GitHub: @pardhu1502
