# Day 6 + 7 — React App (Vite + React + TypeScript)
## Wisflux ILP | Nikhil Jangid | 1st–2nd June 2026

---

## ⚙️ Setup (Run once before Day 6)

```bash
# Navigate to Wisflux Labs folder
cd "c:\Users\hp\Desktop\Wisflux Labs"

# Scaffold the React app
npm create vite@latest day6-react -- --template react-ts

# Install dependencies
cd day6-react
npm install

# Start dev server
npm run dev
```

Then replace the contents of `src/` with the files in this folder.

---

## 📁 File Structure

```
day6-react/
├── src/
│   ├── App.tsx                    ← Day 6: main app
│   ├── components/
│   │   ├── Counter.tsx            ← Day 6: useState
│   │   └── UserCard.tsx           ← Day 6: useEffect + fetch
│   ├── hooks/
│   │   └── useFetch.ts            ← Day 7: custom hook
│   ├── context/
│   │   └── ThemeContext.tsx       ← Day 7: useContext
│   └── forms/
│       └── LoginForm.tsx          ← Day 7: controlled form
└── package.json
```
