
# 🔎 User Card Search UI

A simple **JavaScript-based user card search interface** that dynamically displays profile cards and filters them in real-time based on user input.

This project demonstrates **DOM manipulation, filtering data, and responsive card UI design using HTML, CSS, and JavaScript.**

---

## 🚀 Features

* 🔍 **Live Search** – Filters users as you type
* 🪪 **Dynamic Card Generation** – Cards are created using JavaScript
* 🖼️ **Profile Image Background Effect** – Includes blur overlay styling
* 📱 **Responsive Layout** – Cards wrap automatically
* ⚡ **Fast Filtering** – Uses JavaScript `filter()` for instant results

---

## 📂 Project Structure

```
project-folder
│
├── index.html     # Main HTML structure
├── style.css      # Styling for cards and layout
└── script.js      # JavaScript logic and user data
```

---

## 🧠 How It Works

### 1️⃣ HTML Structure

The HTML file contains:

* A **search input**
* A **message area**
* A **container where cards are rendered**

```html
<div class="ready">
    <input type="text" placeholder="Search...">
    <h1></h1>
</div>

<div class="main"></div>
```

The cards themselves are **not written in HTML** — they are generated dynamically using JavaScript.

---

### 2️⃣ User Data

In `script.js`, user information is stored inside an array of objects:

```javascript
const users = [
{
  name: "Krishna",
  pic: "image-url",
  bio: "User description"
}
];
```

Each object contains:

* **name**
* **profile picture**
* **bio**

---

### 3️⃣ Dynamic Card Creation

Cards are generated using JavaScript DOM methods like:

```javascript
document.createElement()
appendChild()
classList.add()
```

Each card contains:

* Background image
* Blur overlay
* User name
* Bio

---

### 4️⃣ Live Search Function

The search box listens for input events:

```javascript
inp.addEventListener("input", function() {
```

It filters users using:

```javascript
users.filter()
```

If no user matches the search:

```
!!User Not Found
```

is displayed.

---

## 🎨 UI Styling

The interface uses:

* **Flexbox layout**
* **Card shadow effects**
* **Blur overlay**
* **Rounded cards**

Example card style:

```css
.card{
    width: 200px;
    height: 300px;
    border-radius: 28px;
    overflow: hidden;
}
```

---

## ▶️ How to Run

1. Download or clone the project

```
git clone https://github.com/yourusername/project-name.git
```

2. Open

```
index.html
```

in your browser.

No server or dependencies required.

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* DOM Manipulation

---

## 📸 Example

Users appear as **interactive profile cards** with:

* Image background
* Blur effect
* Name
* Bio

Typing in the search bar filters the cards instantly.

---

## 💡 Possible Improvements

* Add **animation when filtering**
* Fetch users from an **API**
* Add **clickable profile pages**
* Improve **mobile responsiveness**
* Add **debounce for search input**

---

## 📜 License

Free to use for learning and personal projects.

---

If you want, I can also show you how to make this README **look more professional on GitHub** with:

* badges
* preview screenshots
* demo GIF
* live demo link

It will make your repo look **10x more impressive for portfolio**.
