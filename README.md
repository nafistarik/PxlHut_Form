# 🚀 Multi-Step Form with Validation (Next.js + React Hook Form + Zod)
A fully responsive and animated multi-step form built with **Next.js (App Router)**, **React Hook Form**, **Zod**, **Redux Toolkit**, and **TailwindCSS**. This project demonstrates best practices in form handling, validation, state management, and user experience with dark/light mode and animations.

## 🧰 Tech Stack
- [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) for schema-based validation
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for API simulation
- [Sonner](https://sonner.emilkowal.ski/) for toast notifications



## 📝 Features
### 🧾 Form Steps
1. **Personal Information**
   - Full Name (required)
   - Email (valid format, required)
   - Phone Number (min 10 digits)
2. **Address Details**
   - Street Address (required)
   - City (required)
   - Zip Code (numbers only, min 5 digits)
3. **Account Setup**
   - Username (min 4 characters)
   - Password (min 6 characters)
   - Confirm Password (must match password)
4. **Summary & Submit**
   - Review all entered data before final submission

### ✅ Validations
- Built with **Zod** and integrated via **React Hook Form**
- Validation per step
- Real-time error feedback under each field

### 🌐 State Management
- Global state managed with **Redux Toolkit**
- Data persisted using **redux-persist**
- Simulated submission via **RTK Query**

### 💡 UI/UX
- Fully **responsive design**
- **Dark/Light mode toggle** with theme persistence
- **Progress indicators** and **step transitions**
- **Animated step transitions** with Framer Motion
- **Toast notifications** for success/error feedback

## 📦 Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/nafistarik/PxlHut_Form
cd multi-step-form
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
App should be running at http://localhost:3000

## 📂 Folder Structure
```
app/
 ┣ form/
 ┃ ┣ steps/
 ┃ ┣ components/
 ┃ ┗ context/
 ┣ store/
 ┣ styles/
 ┣ utils/
 ┗ layout.tsx
```
- `steps/` → Each step of the form
- `store/` → Redux Toolkit configuration
- `utils/` → Validation schemas, helpers
- `context/` → Theme/dark mode provider

## 🧪 Bonus Features
- 🔄 Simulated API delay using RTK Query
- 🌗 Dark/Light mode with TailwindCSS
- 💾 Form state persists on refresh
