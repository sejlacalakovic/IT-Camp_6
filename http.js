// HTTP



// osnovni pojmovi HTTP-a:

// HTTP (engl. HyperText Transfer Protocol) je
// mrežni protokol koji pripada sloju
// aplikacije
// HTTP omogućava komunikaciju između
// različitih host računara i klijenata
// • Ovaj protokol pretpostavlja vrlo malo o
// pojedinačnom sistemu.




// MALO ISTORIJATA

// • [1965.] hipertext Ted Nelson
//  [1989.] Tim Berns Lee i njegov tim na
// CERN kreirao HTTP protokol zajedno sa
// pratećim tehnologijama klijenta i servera kao
// deo projekta
// Worl Wide Web
// U početku samo GET a u odgovoru samo
// HTML stranica.





// MALO ISTORIJATA

// Prva verzija HTTP protokola je imala samo jednu vrstu
// zahteva, koja je nazvana GET, i kojom se zahtevala stranica sa
// server
//  [1991.] Prva dokumentovana verzija HTTP V0.9.
// Prva dokumentovana verzija HTTP protokola HTTP
// bila jeHTTPV0.9 (iz 1991. godine).
// Lider kompanije „HTTP Working Group― DejvRedžet
// želeo je da proširi protokol dodavanjem novih
// operacija, metoda zahteva i novih linija u zaglavlju.
//  Tako je, 1996. godine nastaoHTTP V1.0




// MALO ISTORIJATA

// -1997 HTTP/1.1 Podržani klijenti: Arena,
// Netscape 2.0, Netscap Navigator Gold,
// Mosaic, Lynx i Internet Explorer 2.0 40%
// svih korisnika je odmah prihvatilo novi
// standard
// Postoje podaci, u pojedinim radovima koji
// prikazuje da je čak 65% korisnika „prešlo―
// na novi standard.
// Zvanično, standard je objavljen u januaru
// 1997 godine.



// Ne pamti stanje komunikacije (stateless)
// Neki serveri sesiju održavaju pomo¢u sakrivenih varijabli ili preko
// HTTP cookies
// HTTP cookies - mala koli£ina podataka koja se £uva na klijentu i
// razmenjuje se u komunikaciji sa serverom.
// • Komunikacija se obično obavlja preko porta 80 ili 8080.
// • Komunikacija između klijenta i host-a obavlja se putem razmene
// poruka • request/ response, drugim rečima
// HTTP server sluša na tom portu i čeka request poruke.
// • Klijent šalje zahtev (request), host obrađuje zahtev i šalje odgovor
// (response)-
// Nakon što je obradio poruku HTTP server vra¢a status poruke i sadržaj
// poruke.



// HTTP autentikacija
//  Osnovni model - basic access
// authentication
//  Digest access authentication -
// kompleksniji oblik a ujedno i sigurniji,
// MD5 ili nešto slično.
// HTTP omogućuje okruženje za kontrolu
// pristupa i autentikaciju.



// Request metode:

//  GET - samo za preuzimanje podataka sa servera
//  HEAD - za preuzimanje zaglavlja poruke bez
// preuzimanja tela poruke
//  POST - poruke sadrže i podatke na osnovu kojih se
// formira novi URI resurs
//  PUT slično kao POST sa razlikom da se URI resurs
// ako je već postojao menja
//  DELETE metoda za brisanje nekog resursa



// Request metode:

//  PUT i DELETE se ponekad opisuju kao specijalni
// slučajevi POST-a
//  TRACE omogućava da se prate “skokovi” po mreži -
// putanja preko koje se obavlja komunikacija
//  OPTIONS omogućava da se dobije informacija o
// tome šta server može da obavi
//  CONNECT
//  PATCH - samo delimična izmena resursa



// Metode HEAD, OPTIONS i GET su označene kao sigurne metode jer
// ne vrše nikakve promene na serveru, tj dopuštaju samo pregled
// resursa.
// Za razliku od njih, metode POST, PUT i DELETE mogu dovesti do
// promena stanja servera te se zbog toga smatraju nesigurnim.
// U zaglavlju svakog odgovora u inicijalnoj liniji nalazi statusni kod
// odgovora. HTTP statusne kodove odgovora možemo podeliti u pet
// grupa Statusni kodovi :
//  1XX informacioni
//  2XX uspešna realizacija
//  3XX redirekcija
//  4XX klijentska greška 404
//  5XX serverska greška




// • 1xx: Informativni
// Zahtev primljen, obrada se nastavlja.
// • 2xx: Uspešno (Success)
// Zahtev primljen, razumljiv je i prihvaćen.
// • 3xx: Redirekcija
// Označava situaciju kada su potrebne dodatne akcije na
// serverskoj strani da bi zahtev bio obrađen (fajlovi premešteni na
// drugu putanju i postavljena redirekcija).
// • 4xx: klijentska greška
// Zahev sintaksno nekorektan ili ne može biti izvršen.
// Najpoznatiji je 404 - Not Found zahtevani resurs ne postoji na
// serveru
// • 5xx: Server Error
// Server zbog interne greške nije uspeo da obavi zahtev koji je
// inače validan




// 200 OK
// Standardan odgovor za svaki uspešan HTTP
// zahtev
// 301 Moved Permanently
// Ovaj i svi naredni zahtevi se redirektuju na datunovu
// URL adresu
// 400 Bad Request
// Zahtev ne može biti procesuiran zbog greške u sintaksi.
// 401 UnauthorizedSlično kao i kod"403 Forbidden"
// statusnog koda
// 403 Forbidden
// Zahtev je ispravan ali server odbija da
// odgovori na. Ovaj statusni kod se
// pojavljuje kada nisu dozvoljena prava
// pristupa resursima na serveru
// 404 Not Found
// Traženi resurs nije pronađen na datoj URL
// adresi
// 500 Internal Server Error
// Generiška poruka o grešci




// • Omogućava da jedinstveno odredimo resurs kojem
// pristupamo
// • Protokol je http ili https
// Svaki sajt, svaka stranica i svaki resurs na sajtu imaju
// jedinstvenu URL adresu
// URL obezbeđuje univerzalni i konzistentni način za
// pristupanje informacijama. Sam URL nosi
// informacije o protokolu, nazivu domena, lokaciji fajla
// na serveru i mnoge druge detalje.




// request linija (npr. GET /images/logo.jpg
// • header polja zahteva, (npr. Accept-Language: eng)
// • prazna linija
// • opciono telo poruke (message body)
// Request linija i header polja moraju da završe sa
// karakterima CR i LF.
// Prazna linija mora da sadrži samo CR i LF (bez
// praznih mesta).
// Host heder polje je jedino obavezno polje u HTTP 1.1




// Po specifikaciji sastoji se od
// • Start-line
// • 0 ili više polja u zaglavlju (header fields) iza
// kojih MORA biti CRLF (novi red)
// • Polja u headeru su u formatu
// Field-Name:Field-Value
// • Obavezna prazna linija (tj. samo CRLF za novi
// red) kojim se odvaja zaglavlje od tela poruke
// • Telo poruke - opciono




// status linija (HTTP/1.1 200 OK)
// heder polja odgovora (ContentType: text/html)
// Prazna linija
// Opciono telo poruke
// Web



// Po specifikaciji sastoji se od
// • Status-line
// • 0 ili više polja u zaglavlju (header fields) iza
// kojih MORA biti CRLF (novi red)
// • Polja u headeru su u formatu
// Field-Name:Field-Value
// • Obavezna prazna linija (tj. samo CRLF za novi
// red) kojim se odvaja zaglavlje od tela poruke
// • Telo poruke - opciono
// • general-header
// • mogu se pojaviti i u zahtevu i u odgovoru
// • request-header - specifični samo za zahteve
// • response-header - specifični samo za
// Odgovore
// • entity-header - definišu meta informacije o
// telu poruke ili ako telo ne postoji o resursu
// koji je zahtevan




// Primer
// GET /articles/http-basics HTTP/1.1
// Host: www.articles.com
// Connection: keep-alive
// Cache-Control: no-cache
// Pragma: no-cache
// Accept:
// text/html,application/xhtml+xml,application/x
// ml;q=0.9,*/*;




• Primer
HTTP/1.1 200 OK
Date: Mon, 27 may 2020 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 28 may 2020 19:15:56 GMT
Content-Length: 88
Content-Type: text/html
Connection: Closed
<html>
<body>
<h1>Hello, World!</h1>
</body>
</html>