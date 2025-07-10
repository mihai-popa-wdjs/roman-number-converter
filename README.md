# 🏛️ Roman Number Converter

A simple and elegant web application that converts Arabic numbers (e.g., 1, 5, 2024) into Roman numbers (e.g., I, V, MMXXIV). Built using **HTML**, **CSS**, and **JavaScript**, it focuses on clean design, functional accuracy, and interactive UX.

🔗 **Live Demo:** 
[https://mihai-popa-wdjs.github.io/roman-number-converter/]



---

## 📌 Features

- ✅ Converts any number between **1 and 3999**
- 📥 **Input Validation** using regex and custom checks to ensure valid numbers only
- 🔢 **Instant Conversion** with support for button clicks and keyboard input (Enter key)
- ⏳ **Responsive UI** with dynamic DOM updates, loading spinner, and feedback messages
- 🧠 **Event handling** and optimized script loading for smooth user interaction
- 🪄 Initializes with `DOMContentLoaded` for optimal performance and intuitive UX

---

## 🧠 How It Works

### Roman Number Mapping
A dictionary (`romans`) maps specific Arabic values to their Roman number equivalents (e.g., `1 → I`, `1000 → M`).

### Conversion Function
The `convertToRoman(num)` function builds the Roman number by:
- Finding the largest Roman value (`aprNum`) that fits into the current number
- Subtracting it and appending its symbol repeatedly to construct the full result

### Input Handling & Validation
- Only accepts numbers between **1 and 3999**
- Uses a regular expression and the `isValidNumber()` function to reject invalid or out-of-range input

### Event Handling
- Supports both **button clicks** and **Enter key** to trigger conversion
- `setupEventListeners()` attaches all necessary listeners after the DOM is loaded

### UI Feedback & Loading State
- Displays a **loading spinner** while calculating the result
- Shows messages for both **errors** and successful conversions
- All UI elements update dynamically for a seamless experience

---

## 🛠️ Tech Stack

| Tech          | Role                             |
|---------------|----------------------------------|
| **HTML**      | Semantic structure of the app    |
| **CSS**       | Clean and responsive design      |
| **JavaScript**| Core logic and DOM manipulation  |

---

## 🚀 Future Improvements

- Add support for converting Roman numbers **back to Arabic**
- Improve mobile responsiveness with custom styles
- Include unit tests for conversion logic

---

## 👨‍💻 Author

Developed with care by **Mihai Popa**  
🌐 [https://github.com/mihai-popa-wdjs]

