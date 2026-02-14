# 🎨 Emma's Creatieve Wereld

**Een moderne, kleurijke en speelse website voor Emma (11 jaar)!**
**Thema's:** Knutselen 🧶, Tekenen 🎨, Haken 🧵

---

## 📂 Bestandsstructuur

```
/website-emma/
├── index.html          # Hoofdpagina
├── css/
│   └── style.css      # Alle styling met animaties
├── js/
│   └── main.js        # JavaScript functionaliteiten
└── README.md           # Dit bestand (handleiding)
```

---

## ✨ Functionaliteiten

### 🎯 Hoofdkenmerken
- ✅ **Moderne, speelse design** - Bright, cheerful kleuren!
- ✅ **Responsive layout** - Werkt op computer, tablet en telefoon
- ✅ **Licht/Donker thema** - Schakel met de 🌞 knop
- ✅ **Animaties** - Alles beweegt en is speels!

### 🎨 Design Elementen
- **Animatieerde achtergrond** - Kleurige gradiënten die pulseren
- **Drijvende emoji's** - 🧶🎨🧵 die rondzweven
- **Bouncende titels** - De naam en koppen schudden
- **Wiggelende avatar** - De emoji beweegt bij hover
- **Hover effecten** - Kaarten draaien en schalen

### 📊 Secties
1. **Hero** - Welkomstbericht met Emma's avatar
2. **Interesses** - Kaarten voor knutselen, tekenen en haken
3. **Galerij** - Portfolio met projecten
4. **Leuke Feitjes** - Fun facts die roteren
5. **Over Mij** - Over Emma
6. **Contact** - Berichtenformulier

### 🖼️ Interactieve Elementen
- **Modale vensters** - Klik op projecten voor details
- **Thema wisselaar** - Schakel tussen licht en donker
- **Geluids effecten** - Klik op emoji's voor "ping"-geluid
- **Sparkle cursor** - ✨'s verschijnen willekeurig bij muisbeweging
- **Scroll animaties** - Elementen verschijnen geleidelijk
- **Feitjes rotatie** - Auto-roterende feiten elke 5 seconden

---

## 🎨 Kleurenschema

### Licht Thema (Standaard)
- **Achtergrond:** Zacht roze (#FFF5F7)
- **Tekst:** Donker roze (#6B4B5A)
- **Accent 1:** Hot Pink (#FF69B4)
- **Accent 2:** Licht Roze (#FFB6C1)
- **Accent 3:** Paars (#DDA0DD)
- **Accent 4:** Oranje (#FFA07A)
- **Accent 5:** Geel (#FFB347)
- **Accent 6:** Turquoise (#00CED1)
- **Accent 7:** Licht Groen (#98FB98)

### Donker Thema
- **Achtergrond:** Donker blauw (#1a1a2e)
- **Tekst:** Licht grijs (#e2e8f0)
- **Accenten:** Helder, felle kleuren

---

## 📱 Responsive Breakpoints

- **Desktop:** > 768px
- **Tablet:** 768px - 480px
- **Mobiel:** < 480px

---

## 🚀 Hoe te gebruiken

### Stap 1: Open de website
Dubbelklik op: `index.html`

De website opent automatisch in je standaard browser!

### Stap 2: Verken de website
- Klik op de navigatie links bovenaan
- Klik op de interesse-kaarten (ze draaien!)
- Bekijk de galerij met Emma's creaties
- Lees de "Leuke Feitjes" die automatisch roteren

### Stap 3: Interactie
- **Klik op emoji's** - Ze maken "ping" geluidjes!
- **Klik op projecten** - Opent een modal venster met details
- **Zweef met muis** - ✨ sparkles verschijnen!
- **Gebruik het formulier** - Leuke bevestigingsberichten

### Stap 4: Thema wisselen
- Klik op de **🌞 knop** (bovenin) om naar het donkere thema te gaan
- Klik op de **🌞 knop** (bovenin) om terug naar licht te gaan
- Het thema wordt opgeslagen (komt terug bij heropenen!)

---

## 🎨 Aanpassingen

### Eigen Foto's Toevoegen
Als je foto's hebt van Emma's creaties:

1. **Plaats foto's** in een nieuwe map: `website-emma/images/`
2. **Noem de foto's:**
   - `knutselen-1.jpg`, `knutselen-2.jpg`, etc.
   - `tekenen-1.jpg`, `tekenen-2.jpg`, etc.
   - `haken-1.jpg`, `haken-2.jpg`, etc.

3. **Update `js/main.js`:**
   Vind de `projects` variabele en vervang de emoji's met echte foto's:
   ```javascript
   images: [
       { src: 'images/knutselen-1.jpg', title: 'Papieren Bloemen' },
       { src: 'images/tekenen-1.jpg', title: 'Draken' },
       // etc.
   ]
   ```

### Tekst Aanpassen
Alle teksten staan in `index.html`. Je kunt:
- Emma's naam veranderen
- De hobby's aanpassen
- De beschrijvingen wijzigen
- De feitjes aanpassen

### Kleuren Aanpassen
Alle kleuren staan in `css/style.css` bij de `:root` regels.
- Verander `--accent` voor de hoofdkleur
- Verander `--bg-primary` voor de achtergrondkleur
- Verander `--text-primary` voor de tekstkleur

---

## 🎯 Leuke Functies

### Geluids Effecten
Wanneer je op emoji's klikt, hoor je een kort "ping" geluidje!
- Werkt in de meeste moderne browsers
- Gebruikt de Web Audio API

### Sparkle Cursor
Beweeg je muis over de pagina en zie willekeurig ✨'s verschijnen!
- Dit maakt de site extra speels en levendig

### Feitjes Rotatie
De "Leuke Feitjes" in het midden van de pagina draaien automatisch!
- Elke 5 seconden verschijnt een nieuwe feit
- Perfect om kinderen te vermaken

### Bouncende Elementen
- De titel schudt bij laden
- De avatar "wiggelt" constant
- Emoji's in de galerij schalen bij hover

---

## 📞 Contact Formulier

Het formulier is speels en kindvriendelijk:
- **"Hoe heet jij?"** - Naam invullen
- **"Je E-mail"** - E-mailadres invullen
- **"Wat vind je leuk?"** - Keuzemenu (Knutselen, Tekenen, Haken, Alles!)
- **"Bericht voor Emma"** - Tekstvakje

Bij verzenden:
- Leuke bevestigingsberichten verschijnen één voor één
- Het formulier wordt gereset
- Een feestelijke "TOT SIET!" boodschap verschijnt!

---

## 🎨 Inspiratie voor Content

Als je later eigen foto's wilt toevoegen, hier zijn ideeën:

### Knutselen 🧶
- Papieren bloemen
- Origami dieren
- Klei figuren
- Macramé knuffels
- Vlaggenlijnen

### Tekenen 🎨
- Kinderboek tekeningen
- Dieren (honden, katten, konijnen)
- Fantasy figuren (draken, eenhoorns, feeën)
- Landschappen
- Stripverhalen

### Haken 🧵
- Sjaals (voor poppen of poppen)
- Dekens (voor poppen)
- Knuffels (beer, kat, konijn)
- Sokken
- Capeauts

---

## 💡 Tips voor ouders

### 1. Veiligheid
- Controleer altijd welke foto's je upload
- Gebruik geen foto's met herkenbare locaties
- Gebruik geen foto's met persoonlijke informatie

### 2. Privacy
- Plaats NOOIT persoonlijke informatie (adres, school, etc.)
- Gebruik geen foto's met andere kinderen
- Vraag toestemming aan ouders van andere kinderen

### 3. Aanbodingslimieten
- Geen contactgegevens in openbare delen
- Geen lokatiegegevens
- Geen telefoonnummers
- Gebruik alleen een ouder e-mailadres in het formulier

### 4. Ouderschap Toezichting
- Controleer de website regelmatig
- Lees de inkomende berichten (als je later e-mail functie toevoegt)
- Wees geweest van ongewenste verzoeken

---

## 🚀 Publicatie

### Optie 1: Lokaal (Snelste)
- Dubbelklik op `index.html`
- De website is klaar voor gebruik!
- Deel de link met familie en vrienden (via lokaal netwerk)

### Optie 2: Gratis Hosting
Gebruik platforms zoals:
- **Netlify** (drag & drop hosting, gratis)
- **GitHub Pages** (gratis, met git)
- **Vercel** (gratis, modern)

### Optie 3: Domein
Als je een domein wilt:
- Koop een domein (bijv. `emmascreaties.nl`)
- Koppel aan hosting service
- Stel DNS records in

---

## 🎨 Extra Ideën

### A: Blog Sectie
- Emma kan haar eigen "dagboek" bijhouden
- Foto's van nieuwe creaties
- Tutorials over knutselen, tekenen en haken

### B: Portfolio Gallery
- Professionele galerij van al het werk
- Gedownloadbare versies (printbare PDF's)
- Categorieën per hobby

### C: Interactieve Quiz
- "Welk hout is dit?" (voor haken)
- "Welke kleur is dit?" (voor tekeningen)
- "Kan je dit benoemen?" (voor knutsels)

### D: Webshop
- Verkoop van Emma's creaties (als ouders toestemmen)
- Knutsel pakketten
- Tekenpakketten
- Haken pakketten

---

## 📞 Ouders Toezicht

### Checklist voor Ouders:
- [ ] Alle inhoud is kindvriendelijk en veilig
- [ ] Geen persoonlijke informatie op de site
- [ ] Alle foto's zijn gecontroleerd
- [ ] Het contactformulier werkt naar uw e-mail
- [ ] Kinderen weten om niet persoonlijke info te delen
- [ ] De website wordt regelmatig gecontroleerd

---

## 🎯 Toekomstige Updates

Ideas voor later toe te voegen:
- **Video galerij** - filmpjes van Emma's creaties
- **Interactieve kleuren pagina** - Emma kan online kleuren
- **Muziek speler** - Achtergrondmuziek op de site
- **Live chat widget** - (met ouder toezichting!)
- **Social media feeds** - Instagram/TikTok integratie

---

## 📚 Technologieën

- **HTML5** - Semantische opmaak
- **CSS3** - Moderne styling met animaties
- **JavaScript (ES6+)** - Interactieve functionaliteit
- **Responsive Design** - Werkt op alle schermformaten
- **Web Audio API** - Geluids effecten
- **Intersection Observer** - Scroll animaties

---

## 🌟 Credits

- **Gemaakt door:** Herman (AI Assistent)
- **Voor:** Emma (11 jaar)
- **Datum:** 13 februari 2025
- **Versie:** 1.0

---

## 💌 Bedankt

Dankjewel dat je Emma's creatieve wereld bekijkt!
Hopelijk vind ze het net zo leuk als ik dat ik heb gemaakt.

Veel plezier met de website! 🎨✨

---
**© 2025 Emma's Creatieve Wereld - Alle rechten voorbehouden**

## Favicon - Toegevoegd op 2026-02-14 (♥ HARTVORM ♥)

**Favicon in hartvorm voor Emma's creatieve website!**

### Ontwerp
Het favicon is in de vorm van een **lief hartje** ❤️ met daarin Emma's drie favoriete hobby's:
- 🧶 **Knutselen** - Garenbol in goud met roze strepen (links in hartje)
- 🎨 **Tekenen** - Verfpalet met kleuren (rechts in hartje)  
- 🧵 **Haken** - Haaknaald met garen (onderin hartje)
- ✨ **Sparkles** - Gouden glitters rondom het hartje

### Bestanden
- `favicon.svg` - Hoogwaardige SVG versie (aanbevolen)
- `favicon.ico` - ICO formaat met alle groottes (backwards compatible)
- `favicon-16x16.png` - PNG 16x16 pixels
- `favicon-32x32.png` - PNG 32x32 pixels  
- `favicon-64x64.png` - PNG 64x64 pixels

### Kleurenpalet
- **Hartje:** Roze gradiënt (#FF69B4 → #FF1493)
- **Achtergrond:** Gebruikt geen achtergrond (transparant)
- **Accenten:** Goud (#FFD700), Hot Pink (#FF1493)
- **Verfkleuren:** Rood (#FF6347), Geel (#FFD700), Groen (#32CD32), Blauw (#4169E1)
- **Hobby's:** 
  - Garen: Goud (#FFD700) met roze strepen
  - Palet: Wit met kleurige verf
  - Haaknaald: Zilver (#C0C0C0)

### Browser Ondersteuning
De favicon code in index.html ondersteunt:
- Moderne browsers (SVG)
- Oudere browsers (ICO fallback)
- Retina displays (64x64 PNG)
- Mobile devices (32x32 PNG)

