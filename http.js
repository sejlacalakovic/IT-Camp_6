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



Request metode:

 GET - samo za preuzimanje podataka sa servera
 HEAD - za preuzimanje zaglavlja poruke bez
preuzimanja tela poruke
 POST - poruke sadrže i podatke na osnovu kojih se
formira novi URI resurs
 PUT slično kao POST sa razlikom da se URI resurs
ako je već postojao menja
 DELETE metoda za brisanje nekog resursa