# StandupLog — AI Standup & Progress Tracker

![Status](https://img.shields.io/badge/status-phase%202-green)
![Platform](https://img.shields.io/badge/platform-React%20Native-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6)

DevLog to aplikacja mobilna dla developerów pracujących w Agile/Scrum. Aplikacja automatycznie zaciąga commity z GitHub API, pozwala uzupełnić codzienne standupy i generuje tygodniowe podsumowania za pomocą Gemini AI.

## 🚀 Faza 1 — Foundation Setup ✅

✅ Projekt Expo + TypeScript  
✅ ESLint + Prettier konfiguracja  
✅ Struktura folderów projektu  
✅ Zustand + AsyncStorage Setup
✅ NativeWind Configuration (Tailwind CSS)
✅ Expo Router (Tabs)

## 🏗️ Faza 2 — Core MVP — GitHub & Daily (Aktualny status)

✅ Komponenty UI (Button, Input)
✅ Integracja z GitHub REST API (fetching commits)
✅ Formularz Daily (Wczoraj / Dziś / Blokery)
✅ Historia wpisów z cache offline (Zustand)
⏳ AI Weekly Summary (Gemini) — *W trakcie*

## 📦 Stack Technologiczny

- **React Native + Expo** (TypeScript)
- **Expo Router** — nawigacja
- **Zustand** — zarządzanie stanem (z persistencją)
- **NativeWind** — stylowanie (v4)
- **GitHub REST API** — auto-import pracy
- **Gemini API** — AI podsumowania *(planowane)*

## 🛠️ Instalacja i Uruchomienie

### Wymagania
- Node.js (v18+)
- npm lub yarn
- Expo Go na telefonie (iOS/Android)

### Kroki

1. **Zainstaluj zależności**
   ```bash
   npm install
   ```

2. **Skopiuj plik .env**
   ```bash
   cp .env.example .env
   ```
   Uzupełnij wartości w pliku `.env` (GitHub token, Gemini API key)

3. **Uruchom aplikację**
   ```bash
   npm start
   ```

## 📱 Funkcjonalności (Roadmap)

### MVP (Minimum Viable Product)
- [x] Formularz standup (wczoraj / dziś / blokery)
- [x] Auto-import commitów z GitHub API
- [x] Historia wpisów z cache offline
- [ ] AI Weekly Summary (Gemini)
- [ ] Logowanie przez email lub GitHub OAuth *(planowane)*

### Zaawansowane
- [ ] Powiadomienia lokalne (daily reminder)
- [ ] Tryb offline (AsyncStorage cache)
- [ ] Haptic feedback
- [ ] Animacje (Reanimated)
- [ ] Ciemny motyw
