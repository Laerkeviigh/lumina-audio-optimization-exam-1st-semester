# **Lumina Audio – Optimeret Projekt**

### *1. semester eksamensprojekt - README.md*

Denne README giver et kort, fagligt overblik over de forbedringer og optimeringer, jeg har foretaget i den nye version af projektet. 

Den nye version kombinerer et fuldt redesign udviklet i Figma med en systematisk omskrivning af HTML-, CSS- og tilføjelse af JavaScript.

Fokus ligger både på struktur, semantik, visuel konsistens og ny funktionalitet med JavaScript.

---

## **Projektstruktur og Content**

- Mappestrukturen er optimeret.
- Alt er delt op i separate mapper (`assets/`, `css/`, `js/`), i forhold til den tidligere struktur, som var rodet med tilfældige billeder placeret  i CSS-mappen.
- Alt content er udskiftet så det nu passer bedre sammen og understøtter designets nordiske stil.


## **HTML optimeringer**

- Store dele af HTML-strukturen er omskrevet for at matche det nye redesign udviklet i Figma.
- De oprindelige sektioner er bevaret, men moderniseret:  
  **Hero, USP, Bestseller, Showcase/Storycase, Trustpilot, Hvem er vi?, FAQ, CTA og Footer**.
- Instagram-sektionen er fjernet og erstattet af en ny **App-sektion**, der præsenterer funktionaliteten omkring Lumina One appen.
- Hero-sektionen indeholder nu et egentligt `<h1>` fremfor kun et `<p>`.
- Overskriftshierarkiet er systematiseret med konsekvent brug af `<h2>`, `<h3>` og `<p>`.
- Navigationsbaren er redesignet med centreret logo, tydelige nav-elementer og implementerede **SVG-ikoner** og jeg har tilføjet et **favicon**.

## **CSS optimeringer**

- Igen er store dele omskrevet for at matche det nye redesign udviklet i Figma.
- Oprettet en ny og gennemgående `:root`, som indeholder:
  - farvevariabler  
  - skygger  
  - spacing  
  - font-variabler  
  - font-weights  
- Standardfonten fra den gamle version er erstattet med en defineret projektfont.
- Grafiske elementer fra Figma, herunder baggrunde og card-elementer er nu indarbejdet direkte i layoutet.
- Knapper og cards har fået nye subtile hover-effekter baseret på et gennemført farve- og skyggehierarki.
- Layoutet er generelt blevet mere responsivt og skalerbart.

## **JavaScript**

Der var tidligere *ingen* JavaScript i projektet.  
I den nye version er følgende funktionalitet tilføjet:

- Implementeret en **scroll-observer**, der tilføjer klassen `.show-animate` til sektioner, når de nærmer sig viewporten.
- Animationerne styres via CSS (fade + scale), hvilket giver en mere dynamisk og moderne brugeroplevelse.
- Funktionaliteten er inspireret af en tidligere undervisningsopgave og er projektets interaktive lag.
