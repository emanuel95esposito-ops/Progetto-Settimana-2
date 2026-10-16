/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const prodotti = [
    {
        nome: "Cuffie nere over-ear",
        categoria: "Elettronica",
        prezzo: 69.90,
        rating: 4,
        immagine: "https://images.pexels.com/photos/8198068/pexels-photo-8198068.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Tablet nero con schermo touchscreen",
        categoria: "Elettronica",
        prezzo: 159.90,
        rating: 4,
        immagine: "https://images.pexels.com/photos/8533354/pexels-photo-8533354.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Libro rilegato da lettura",
        categoria: "Libri",
        prezzo: 16.90,
        rating: 2,
        immagine: "https://images.pexels.com/photos/4466261/pexels-photo-4466261.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Zaino casual blu e marrone",
        categoria: "Abbigliamento",
        prezzo: 44.90,
        rating: 4,
        immagine: "https://images.pexels.com/photos/2376993/pexels-photo-2376993.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Lampada da scrivania nera orientabile",
        categoria: "Casa",
        prezzo: 34.90,
        rating: 4,
        immagine: "https://images.pexels.com/photos/8263858/pexels-photo-8263858.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Smartwatch con cinturino nero",
        categoria: "Elettronica",
        prezzo: 79.90,
        rating: 5,
        immagine: "https://images.pexels.com/photos/7947642/pexels-photo-7947642.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: false
    },
    {
        nome: "Mouse ergonomico verticale wireless",
        categoria: "Elettronica",
        prezzo: 29.90,
        rating: 4,
        immagine: "https://images.pexels.com/photos/7172686/pexels-photo-7172686.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Caffettiera moka da fornello",
        categoria: "Casa",
        prezzo: 21.90,
        rating: 5,
        immagine: "https://images.pexels.com/photos/5749084/pexels-photo-5749084.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Felpa grigia con stampa frontale",
        categoria: "Abbigliamento",
        prezzo: 42.90,
        rating: 3,
        immagine: "https://images.pexels.com/photos/6186447/pexels-photo-6186447.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Libri illustrati di arte e design",
        categoria: "Libri",
        prezzo: 27.50,
        rating: 5,
        immagine: "https://images.pexels.com/photos/3747297/pexels-photo-3747297.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    },
    {
        nome: "Sneakers sportive bianche in tessuto",
        categoria: "Abbigliamento",
        prezzo: 64.90,
        rating: 4,
        immagine: "https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: false
    },
    {
        nome: "Tazza mug in ceramica bianca",
        categoria: "Casa",
        prezzo: 12.90,
        rating: 3,
        immagine: "https://images.pexels.com/photos/6312237/pexels-photo-6312237.jpeg?auto=compress&cs=tinysrgb&w=700",
        disponibile: true
    }
];


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function formattaPrezzo(prezzo) {
    return "€ " + prezzo.toFixed(2).replace(".", ",");
}
console.log("Monitor:", formattaPrezzo(150));


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function stelline(rating) {
    let risultato = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            risultato += "★";
        } else {
            risultato += "☆";
        }
    }

    return risultato;
}
console.log("Monitor: rating 3 →", stelline(3));

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraPerCategoria(categoria) {
    let risultati = [];

    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].categoria === categoria) {
            risultati.push(prodotti[i]);
        }
    }

    return risultati;
}

console.log("Filtro Elettronica:", filtraPerCategoria("Elettronica"));

//filtro per categoria --> clicca su "Scopri di più"

document.getElementById("categoria-elettronica").onclick = function () {
    renderProdotti(filtraPerCategoria("Elettronica"));
};

document.getElementById("categoria-libri").onclick = function () {
    renderProdotti(filtraPerCategoria("Libri"));
};

document.getElementById("categoria-abbigliamento").onclick = function () {
    renderProdotti(filtraPerCategoria("Abbigliamento"));
};

document.getElementById("categoria-casa").onclick = function () {
    renderProdotti(filtraPerCategoria("Casa"));
};

document.getElementById("azzera-filtri").onclick = function () {
    renderProdotti(prodotti);
};

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraDisponibiliConRating() {
    let risultati = [];

    for (let i = 0; i < prodotti.length; i++) {
        if (prodotti[i].disponibile === true && prodotti[i].rating >= 3) {
            risultati.push(prodotti[i]);
        }
    }

    return risultati;
}
console.log("Disponibili con rating >= 3:", filtraDisponibiliConRating());

//Visualizza solo i disponibili con rating >= 3

document.getElementById("solo-disponibili").onchange = function () {

    if (document.getElementById("solo-disponibili").checked) {
        renderProdotti(filtraDisponibiliConRating());
    } else {
        renderProdotti(prodotti);
    }

};

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let listaVisualizzata = prodotti;

function renderProdotti(lista) {
    listaVisualizzata = lista;

    let html = "";

    for (let i = 0; i < lista.length; i++) {
        let prodotto = lista[i];

        let bottone = `<button type="button" class="add-cart" onclick="aggiungiAlCarrello(${prodotti.indexOf(prodotto)})">Aggiungi al carrello</button>`;
        let etichetta = "";

        if (prodotto.disponibile === false) {
            bottone = '<button type="button" class="add-cart" disabled>Esaurito</button>';
            etichetta = '<span class="sold-out">Esaurito</span>';
        }

        html += `
            <article class="product-card">
                <div class="product-image-wrap">
                    <img class="product-image" src="${prodotto.immagine}" alt="${prodotto.nome}">
                    ${etichetta}
                </div>

                <h3 class="product-name">${prodotto.nome}</h3>

                <p class="rating-line">
                    ${stelline(prodotto.rating)}
                    <span class="rating-number">(${prodotto.rating})</span>
                </p>

                <p class="product-price">${formattaPrezzo(prodotto.prezzo)}</p>

                ${bottone}
            </article>
        `;
    }

    document.getElementById("prodotti").innerHTML = html;
}

renderProdotti(prodotti);


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let carrello = [];

function aggiungiAlCarrello(indice) {
    if (prodotti[indice] && prodotti[indice].disponibile) {
        carrello.push(indice);
        aggiornaCarrello();
        mostraRiepilogo();
        salvaCarrello();
    }
}

function aggiornaCarrello() {
    document.getElementById("contatore-carrello").textContent = carrello.length;
}

function rimuoviDalCarrello(posizione) {
    carrello.splice(posizione, 1);
    aggiornaCarrello();
    mostraRiepilogo();
    salvaCarrello();
}


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


document.getElementById("ordinamento").onchange = function () {

    let scelta = document.getElementById("ordinamento").value;

    let listaOrdinata = listaVisualizzata.slice();

    if (scelta === "prezzo-crescente") {

        listaOrdinata.sort(function (a, b) {
            return a.prezzo - b.prezzo;
        });

    } else if (scelta === "prezzo-decrescente") {

        listaOrdinata.sort(function (a, b) {
            return b.prezzo - a.prezzo;
        });

    } else if (scelta === "rating") {

        listaOrdinata.sort(function (a, b) {
            return b.rating - a.rating;
        });

    } else {

        listaOrdinata.sort(function (a, b) {
            return prodotti.indexOf(a) - prodotti.indexOf(b);
        });

    }

    renderProdotti(listaOrdinata);
};

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function mostraRiepilogo() {
    let html = "";
    let totale = 0;

    for (let i = 0; i < carrello.length; i++) {
        let prodotto = prodotti[carrello[i]];
        totale += prodotto.prezzo;

        html += `
            <div class="cart-item">
                <span class="cart-item-name">${prodotto.nome}</span>
                <strong>${formattaPrezzo(prodotto.prezzo)}</strong>
                <button onclick="rimuoviDalCarrello(${i})">Rimuovi</button>
            </div>
        `;
    }

    if (carrello.length === 0) {
        html = "Il carrello è vuoto";
    }

    document.getElementById("lista-carrello").innerHTML = html;
    document.getElementById("totale-carrello").textContent = formattaPrezzo(totale);
}

document.getElementById("apri-carrello").onclick = function () {
    mostraRiepilogo();
    document.getElementById("riepilogo-carrello").hidden = false;
    document.getElementById("riepilogo-carrello").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("chiudi-carrello").onclick = function () {
    document.getElementById("riepilogo-carrello").hidden = true;
};

document.getElementById("svuota-carrello").onclick = function () {
    carrello = [];
    aggiornaCarrello();
    mostraRiepilogo();
    salvaCarrello();
};



/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function salvaCarrello() {
    localStorage.setItem("carrelloAmazon", JSON.stringify(carrello));
}

let salvato = localStorage.getItem("carrelloAmazon");

if (salvato !== null) {
    carrello = JSON.parse(salvato);
}

aggiornaCarrello();
