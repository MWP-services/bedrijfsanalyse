# Integrale Bedrijfsanalyse

Professionele React + Vite website voor het vak Bedrijfsanalyse. De site is geschikt voor Azure Static Web Apps en gebruikt data-bestanden voor opdrachten, nieuws en bronnen.

## Lokaal starten

```bash
npm install
npm run dev
```

## Build maken

```bash
npm run build
```

De build-output staat in `dist/`. Voor Azure Static Web Apps gebruik je normaal:

- App location: `/`
- Output location: `dist`

## Opdrachten aanpassen

Pas opdrachten aan in `src/data/assignments.js`.

Per opdracht kun je invullen:

- `opdrachtNummer`
- `titel`
- `korteIntro`
- `volledigeTekst`
- `afbeeldingen`
- `tabellen`
- `bronnen`
- `conclusie`

## Nieuws toevoegen

Voeg nieuwsitems toe in `src/data/news.js`. Gebruik categorieën zoals `financieel`, `duurzaamheid`, `strategie`, `risico` of `marktontwikkelingen`.

## Bronnen toevoegen

Beheer de bronnenlijst in `src/data/sources.js`. Bronnen worden automatisch gegroepeerd per categorie.

## Afbeeldingen toevoegen

Plaats afbeeldingen in `public/images/`. Verwijs daarna in data-bestanden naar het pad:

```js
src: '/images/naam-van-afbeelding.png'
```

Laat `src` leeg als je alleen een placeholder wilt tonen.
