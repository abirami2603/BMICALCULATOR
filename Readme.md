
# 🌟 BMI Calculator 📱

A **cross-platform Body Mass Index (BMI) calculator** built using **React Native**. This app allows users to calculate their BMI interactively, supports both light and dark themes, and provides error handling for invalid inputs. 🚀



---

## 🔥 Features
- 🖩 **Calculate BMI:** Easily compute BMI using weight (kg) and height (cm).
- 🌟 **Interactive UI:** Clean and user-friendly interface with advanced styling.
- 🌗 **Themes:** Switch between light and dark modes.
- ⚠️ **Error Handling:** Displays warnings for invalid or incomplete inputs.
- ☁️ **BMI History (Optional):** Save BMI history using Firebase (add backend).

---

## 🚀 Getting Started

### Prerequisites
Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v16+)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/abirami2603/bmi-calculator.git
   cd bmi-calculator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   npm start
   ```
   - Press `i` to open the app in iOS Simulator.
   - Press `a` to open the app in Android Emulator.
   - Scan the QR code to run the app on your mobile device (Expo Go app required).

---


## 📂 Project Structure
```plaintext
BMI-Calculator/
├── assets/                  # Images and static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.js        # Header component
│   │   └── ResultCard.js    # BMI result card
│   ├── screens/             # App screens
│   │   └── HomeScreen.js    # Main screen
│   ├── context/             # Theme and state management
│   ├── utils/               # Utility functions
│   │   └── bmiCalculator.js # BMI calculation logic
│   └── App.js               # Main entry point
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

---

## ✨ How to Use
1. **Input your weight (kg)** and **height (cm)**.
2. Press **"Calculate BMI"** to view your BMI and its category.
3. Toggle between **Light** and **Dark** themes using the theme switcher.

---

## 🛠️ Advanced Features (Optional)
### Save BMI History with Firebase
1. Set up Firebase for your project (instructions [here](https://firebase.google.com/docs/web/setup)).
2. Add Firebase configuration to your project:
   ```javascript
   import { initializeApp } from "firebase/app";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   ```

3. Integrate Firebase with BMI history feature.

---

## 📜 Scripts
- **Run the app:** `npm start`
- **Run tests:** `npm test`
- **Build the app:** `npm run build`

---

## 🌟 Contributing
Contributions are welcome! To get started:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your descriptive message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---

## 🧑‍💻 Connect with Me
For any queries, feel free to reach out:
- **Email:** [your.email@example.com](mailto:abiramikayathiri@nscet.org)
- **GitHub:** [yourusername](https://github.com/abirami2603)



