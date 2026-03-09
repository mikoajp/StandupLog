# DevLog — AI Standup & Progress Tracker

![Status](https://img.shields.io/badge/status-phase%200-blue)
![Platform](https://img.shields.io/badge/platform-React%20Native-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6)

DevLog to aplikacja mobilna dla developerów pracujących w Agile/Scrum. Aplikacja automatycznie zaciąga commity z GitHub API, pozwala uzupełnić codzienne standupy i generuje tygodniowe podsumowania za pomocą Gemini AI.

## 🚀 Faza 0 — Setup (Aktualny status)

✅ Repozytorium GitHub z sensowną historią commitów  
✅ Projekt Expo + TypeScript  
✅ ESLint + Prettier konfiguracja  
✅ Struktura folderów projektu  
⏳ Test w Expo Go na telefonie (iOS)

## 📦 Stack Technologiczny

- **React Native + Expo** (TypeScript)
- **Expo Router** — nawigacja (tabs + stack + modal) *(planowane)*
- **Zustand** — zarządzanie stanem globalnym *(planowane)*
- **NativeWind** — stylowanie (Tailwind dla RN) *(planowane)*
- **GitHub REST API** — commity, PR-y, issues *(planowane)*
- **Gemini API** — AI podsumowania *(planowane)*
- **Firebase Auth + Firestore** *(planowane)*

## 🏗️ Struktura Projektu

```
devlog-mobile/
├── src/
│   ├── components/    # Reużywalne komponenty UI
│   ├── screens/       # Ekrany aplikacji
│   ├── services/      # API services (GitHub, Gemini, Firebase)
│   ├── store/         # Zustand store
│   ├── types/         # TypeScript types i interfaces
│   ├── utils/         # Utility functions
│   └── hooks/         # Custom React hooks
├── assets/            # Obrazy, fonty, ikony
├── App.tsx            # Root component
└── app.json           # Expo config
```

## 🛠️ Instalacja i Uruchomienie

### Wymagania
- Node.js (v18+)
- npm lub yarn
- Expo Go na telefonie (iOS/Android)

### Kroki

1. **Klonuj repozytorium**
   ```bash
   git clone https://github.com/yourusername/devlog-mobile.git
   cd devlog-mobile
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   ```

3. **Skopiuj plik .env**
   ```bash
   cp .env.example .env
   ```
   Uzupełnij wartości w pliku `.env` (GitHub token, Gemini API key)

4. **Uruchom aplikację**
   ```bash
   npm start
   ```
   Zeskanuj QR code w Expo Go na telefonie

## 📱 Funkcjonalności (Roadmap)

### MVP (Minimum Viable Product)
- [ ] Logowanie przez email lub GitHub OAuth
- [ ] Formularz standup (wczoraj / dziś / blokery)
- [ ] Auto-import commitów z GitHub API
- [ ] Historia wpisów z cache offline
- [ ] AI Weekly Summary (Gemini)

### Zaawansowane
- [ ] Powiadomienia lokalne (daily reminder)
- [ ] Tryb offline (AsyncStorage cache)
- [ ] Haptic feedback
- [ ] Animacje (Reanimated)
- [ ] Ciemny motyw

## 🧪 Testowanie

```bash
# Uruchom linter
npm run lint

# Autofix problemów ESLint
npm run lint:fix

# Format kodu z Prettier
npm run format
```

## 📄 Licencja

Projekt edukacyjny dla przedmiotów:
- JP Urządzeń Mobilnych (Kisielewski)
- Wprowadzenie do Systemów Mobilnych (Lysykh)
- Projektowanie UI (Kaznodziej)

**Autor:** Mikołaj Micht  
**Rok:** 2026
