# Kattcaféet Morrhår – banta sidan

Ett övningsexempel i hållbar webb. Webbplatsen för det påhittade Kattcaféet Morrhår ser trevlig ut, men den är byggd som om en AI fått en brief och lagt till allt den kunde komma på: stora bilder, många typsnitt, bibliotek som knappt används och färger som är svåra att läsa.

Din uppgift är att göra det en designer gör: **mäta**, **ändra det du själv kan ändra** och **beställa resten** av en utvecklare eller ett AI-verktyg. 

## Det här får du ändra själv

- **Bildfiler** i mappen `bilder` – exportera i rätt storlek och behåll samma filnamn och format.
- **Värdena i blocket DESIGNINSTÄLLNINGAR** överst i `css/style.css` – färger och typsnitt.

Allt annat i koden beställer du. Ändra inte kod du inte förstår.

## Kom igång

1. Forka repot till ditt eget GitHub-konto.
2. Klona din kopia och öppna mappen i VS Code.
3. Öppna `index.html` i webbläsaren, till exempel med Live Server.


Inget behöver installeras. Biblioteken ligger redan i mapparna `js`, `css` och `webfonts`, så sidan fungerar som den är. `package.json` visar vilka paket sidan är beroende av.

## Filer

| Mapp eller fil | Innehåll |
|---|---|
| `index.html` | Kaféets webbplats |
| `css/` | Stilmallar, bland annat Bootstrap, Animate.css och Font Awesome |
| `js/` | jQuery, lodash, moment, Bootstrap och sidans eget skript `main.js` |
| `fonts/` | Typsnittsfiler |
| `webfonts/` | Ikontypsnitt från Font Awesome |
| `bilder/` | Bilder på kaféet och katterna |


## Publicera

Slå på GitHub Pages under **Settings → Pages → Deploy from a branch → main**. Då kan du testa sidan i Lighthouse eller Website Carbon och jämföra före och efter.

---

Kaféet, katterna och bilderna är påhittade och gjorda för övningen.
