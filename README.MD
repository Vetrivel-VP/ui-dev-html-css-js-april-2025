# UI Dev - April 2025

A simple UI development project using **HTML**, **CSS**, **Javascript**, and **TailwindCSS (CLI)**.

## 🌐 Tech Stack

- **HTML**
- **CSS**
- **JavaScript**
- **TailwindCSS**

## 📂 Project Structure

```
├── public/
│   └── assets/
│       └── css/
│           └── styles.css        # Compiled Tailwind CSS
│       └── img/
│       └── js/
│           └── main.js
├── src/
│   └── index.css                 # Tailwind input CSS file
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Vetrivel-VP/ui-dev-html-css-js-april-2025.git
cd ui-dev-april
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then install project dependencies:

```bash
npm install
```

### 3. Start Tailwind CLI in Watch Mode

This will compile the Tailwind CSS from `src/index.css` to `public/assets/css/styles.css` and watch for changes.

```bash
npm run watch
```

### 4. Open `index.html`

You can open the `index.html` file in a browser directly or use a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for live reload.

## ✅ Tailwind Setup Reference

Your `src/index.css` should look like this:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📌 Notes

- All custom styles are built using Tailwind’s utility classes.
- Use the CLI `watch` command during development to auto-compile your CSS.
- No frameworks or build tools like Webpack or Vite are used.

## 📝 License

This project is licensed under the ISC License.

---

Happy coding! 🎨
