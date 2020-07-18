# Overlay Controller
OBS non ha un controller per le grafiche in sovraimpressione, ecco risolto il problema con Overlay controller!

## Come usarlo
* Aggiungete la pagina `lower-thirds\control-panel.html` a obs attraverso
Visualizza >> Pannelli Personalizzati >> Aggiungi pannello

* Aggiungete la pagina `lower-thirds\browser-source.html` come fonte browser per visualizzare le animazioni inviate.

## Impostazioni
Dalla pagina `lower-thirds\settings.js` è possibile impostare:
* colori dell'animazione
* preimpostazioni (set di nome/funzione che vengono visualizzati nel pannello preimpostati)

## Animazioni disponibili
Sono disponibili le sequenti animazioni:
  | # |  Tipo |    Animazione |     File     |                      Richiede                      |
  |---|-------|---------------|--------------|----------------------------------------------------|
  | 1 |  LT   | Lower Third1  | `lower1.js`  | <ul><li>Nome e cognome</li><li>Ruolo</li></ul>     |
  | 2 |  LTs  | Social promo  | `social1.js` | <ul><li>x2 Titoli</li><li>x6 Descrizioni</li></ul> |
  | 3 |  LTp  | News promo    | `promo1.js`  | <ul><li>Titolo</li><li>Descrizione</li></ul>       |
  
 *I file indicati si trovano in `lower-thirds\overlays\`*
### Significato tipo:

| Tipo | Significato |
|:----:|:-----------:|
|  LT  | Lower third |
|   s  |    social   |
|   p  |    promo    |
 
  
## Disclamer
*Il file `settings.js` è formato da una serie di array javascript, un errore di sintassi può creare problemi in tutto il programma.*
