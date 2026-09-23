/* ============================================================
   filter.js
   Dieses Script müsst ihr nicht verändern.

   Was es macht:
   1. Beim Klick auf einen Button mit data-filter="xyz"
      bekommen alle Bilder mit der Klasse "xyz" die Klasse
      "ausgewaehlt".
   2. Die Wand bekommt die Klasse "gefiltert".
   3. Bei data-filter="alle" wird beides wieder entfernt.

   Wie die gefilterte Ansicht AUSSIEHT, bestimmt ihr im CSS.
   ============================================================ */

const wand = document.querySelector('.wand');
const buttons = document.querySelectorAll('.filter button');
const bilder = wand.querySelectorAll('.bild');

// Jedes Bild bekommt einen eigenen Namen für die Animation.
// So weiss der Browser, welches Bild wohin wandert.
bilder.forEach((bild, i) => {
  bild.style.viewTransitionName = 'bild-' + i;
});

function filtern(kategorie) {
  const alle = kategorie === 'alle';

  bilder.forEach((bild) => {
    const passt = !alle && bild.classList.contains(kategorie);
    bild.classList.toggle('ausgewaehlt', passt);
  });

  wand.classList.toggle('gefiltert', !alle);

  // aktiven Button markieren
  buttons.forEach((button) => {
    button.setAttribute('aria-pressed', button.dataset.filter === kategorie);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const kategorie = button.dataset.filter;

    // Mit Animation, wenn der Browser View Transitions kann
    /*if (document.startViewTransition) {
      document.startViewTransition(() => filtern(kategorie));
    } else {*/
      filtern(kategorie);
    /*} */
  });
});
