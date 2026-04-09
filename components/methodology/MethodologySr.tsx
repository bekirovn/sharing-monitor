import MethodologyIntro from "./MethodologyIntro";

export default function MethodologySr() {
  return (
    <div className="my-12 flex flex-col gap-4 leading-8 text-base">
      <h1 className="text-3xl font-[FoundryBold] my-6">METODOLOGIJA</h1>
      <MethodologyIntro />
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Kriterijumi za unos slučajeva
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Za početak, redefinisali smo merila selekcije slučajeva, .&nbsp;
          <span className="font-[FoundryBold]">Prvi kriterijum je uvek obavezan.</span>
        </p>
        <ol className="list-decimal pl-6 list-inside">
          <li>
            <span className="font-[FoundryBold] uppercase">Priroda povrede.</span> Incident se desio u digitalnom
            prostoru, šteta je nastala na digitalnim dobrima i/ili su povređena
            digitalna prava.
          </li>
        </ol>
        <p className="px-4 py-2">
          Dodatno, potrebno je da slučaj ispunjava još najmanje jedan od tri
          kvalifikovana kriterijuma:
        </p>

        <ol className="list-decimal pl-6 list-inside">
          <li>
            <span className="font-[FoundryBold] uppercase">Razmere povrede.</span> Incident je široko rasprostranjen,
            pogađa veliki broj građana ili drugih aktera u zajednici.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">Društveni značaj.</span> Kontekst i potencijalne posledice
            povrede utiču na temeljne vrednosti ili odnose u društvu.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">Inovativnost. </span> Tehnička sredstva, metode, ciljevi
            ili drugi elementi incidenta bitno su napredniji u odnosu na
            postojeće.
          </li>
        </ol>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Kategorije
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Preciznija definicija kriterijuma dovela je do promena i u samoj
          klasifikaciji slučajeva, pa se oni sada svrstavaju u jednu od tri
          osnovne grupe:
        </p>
        <ol className="list-[upper-roman] list-inside pl-6">
          <li>
            <span className="font-[FoundryBold] uppercase">Sajber napadi.</span> Tehnički incidenti kojima je
            primarni cilj namerno ugrožavanje računarske infrastrukture.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">Privatnost i zaštita ličnih podataka.</span> Ova grupa
            obuhvata slučajeve kršenja, odnosno neispunjavanja zakonom
            propisanih mera koje za posledicu ima povredu ovih ličnih prava u
            digitalnoj sferi.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">Prevare, pretnje i manipulacije. </span> U ovu kategoriju
            svrstani su različiti informacioni poremećaji i manipulacije
            digitalnim sadržajima u cilju obmane, odmazde, napada na ličnost,
            sprečavanja ostvarivanja ličnih prava.
          </li>
        </ol>
        <p className="px-4 py-2">
          Svaka od ovih kategorija dodatno je segmentirana po specifičnim
          vrstama incidenata. Takođe, za svaku kategoriju su popisana moguća
          sredstva, odnosno načini izvršenja i, mada detaljan, usled brzog
          razvoja novih tehnologija ovaj spisak nije konačan. Sve tri
          kategorije, kao i njihove potkategorije, koncipirane su i imenovane u
          skladu sa posledicama konkretnih povreda u digitalnom prostoru.
        </p>

        <p className="px-4 py-2">
          Iako na prvi pogled ove tri kategorije mogu delovati odvojeno, važno
          je voditi računa da zbog veličine i uvezanosti digitalnog prostora
          slučajevi često mogu da se nađu u više različitih potkategorija
          odnosno kategorija. Kako je već navedeno, svaka kategorija ima svoje
          potkategorije u okviru kojih su slučajevi bliže određeni kao i spisak
          sredstava pomoću kojih su napadi izvršeni. Ipak, razlike postoje i
          zbog toga je odlučeno da svaka kategorija na svojstven način
          procesuira svoje slučajeve, jer se sredstva mogu razlikovati u ove tri
          sfere digitalnog prostora. Takođe se razlikuju i činioci (akteri) u
          ovim sferama, tako da ako su u kategoriji II kršioci prava uglavnom
          država ili kompanije, u kategoriji III bi to pre bili građani ili
          političari.
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Izvori informacija o incidentima
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Primarni izvor monitoringa jeste javna sfera, odnosno tradicionalni i
          društveni mediji. Relevantne vesti i objave o svim potencijalnim
          slučajevima istraživači prikupljaju automatizovanim procesom putem
          definisanog skupa ključnih reči za svaku kategoriju.
        </p>

        <p className="px-4 py-2">
          Sekundarne izvore čine baze povreda i srodni sadržaji organizacija,
          udruženja i drugih aktera koji samostalno prate incidente iz svog
          domena (baza napada na novinare, nacionalni CERT, poverenici i
          slično).
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Obrada individualnog slučaja
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Poseban metodološki segment čine smernice za istraživače, izrađene
          radi uniformnosti odabira i obrade incidenata prilikom njihovog
          mapiranja i unosa u bazu.
        </p>
        <p className="px-4 py-2">
          Nakon što je identifikovana i verifikovana konkretna povreda prava,
          slučaj se unosi u bazu sa kratkim opisom, dok se dokaz o povredi
          arhivira, bilo da je u pitanju slika tvita, komentara ili vesti u
          kojoj je objavljen. Ako postoji, beleži se i vremenski period trajanja
          povrede i navode se činioci, odnosno izvršioci povreda i oštećene
          strane, kao i sredstva odnosno načini izvršenja povrede.
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] font-medium my-6 uppercase">
          Principi rada
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>

        <p className="px-4 py-2">
          Revizija metodologije potvrdila je <span className="font-[FoundryBold]">temeljne principe</span>{" "}
          monitoringa prava i sloboda, koji važe za sve aktivnosti SHARE
          Fondacije od osnivanja:
        </p>

        <p className="px-4 py-2">
          <span className="font-[FoundryBold] uppercase">Transparentnost.</span> Periodični izveštaji su narativni i
          dopuštaju subjektivne utiske istraživača, kao i ukazivanje na određene
          pojave u skladu sa zajedničkim vrednostima i uverenjima. Međutim,
          podaci iz monitoringa u sirovom, mašinski čitljivom formatu, slobodno
          su dostupni za dalje korišćenje i drugačija tumačenja.
        </p>

        <p className="px-4 py-2">
          <span className="font-[FoundryBold] uppercase">Tačnost. </span> U okviru monitoringa, istraživači sprovode
          osnovnu verifikaciju pojedinačnih slučajeva oslonjeni na primarne
          izvore informacija, za čije podatke SHARE Fondacija ne odgovara. Zbog
          ograničenog dometa provere, uspostavljen je mehanizam za spoljnu
          korekciju kroz lako dostupan, direktan kanal komunikacije sa
          istraživačima, preko kog građani i organizacije mogu demantovati,
          ispraviti ili dopuniti raspoložive informacije o slučaju.
        </p>
        <p className="px-4 py-2">
          <span className="font-[FoundryBold] uppercase">Etičnost.</span> Istraživači poštuju autonomiju oštećenih u
          incidentima koje obrađuju za potrebe monitoringa, primenjujući mere
          posebne zaštite kada je u incidentima ugroženo dostojanstvo ličnosti.
          Integritet baze monitoringa podleže unutrašnjoj i spoljašnoj kontroli,
          dok se slučajevi selektuju prema utvrđenim kriterijumima, bez obzira
          na lična uverenja istraživača, naklonost ili odbojnost prema akterima
          incidenta.
        </p>
      </details>
      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase  border-t-2 pt-4 border-[#92d8f4]">
        I Sajber incidenti
      </h2>
      <p className="py-2">
        Svaki uticaj na integritet ili dostupnost informacionog sistema, mreže
        ili uređaja s namerom da se nad njima preuzme kontrola, da se ometa ili
        prekine njihov rad, ili da se podaci na njima izmene, ukradu, izbrišu
        ili blokiraju.
      </p>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_compromised_data.png"
            />
            Kompromitovani podaci
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Ugroženost bezbednosti, poverljivosti ili integriteta podataka na
          informacionom sistemu ili pojedinačnom uređaju usled neovlašćenog
          pristupa, preuzimanja kontrole ili zloupotrebe podataka.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Malver (zlonamerni softver, virus)
          <br />
          Prevare (fišing, skiming)
          <br />
          Presretanje saobraćaja (man in the middle)
          <br />
          Krađa uređaja
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Serveri i podaci javnog preduzeća na meti ransomver napada: u sistem
          je ubačen tzv. ucenjivački softver koji enkriptuje podatke za čiju se
          dekripciju zahteva plaćanje otkupnine.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_disabled_services.png"
            />
            Onesposobljen servis
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Ometanje ili prekid rada informacionog sistema, mreže ili uređaja
          maksimalnim angažovanjem njihovih resursa.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">DoS/DDoS</p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Informaciona infrastruktura akademske mreže na meti distribuirane
          opstrukcije usluga, DDoS: serverima su upućeni istovremeni upiti sa
          više desetina hiljada IP adresa što je uzrokovalo prekid ili otežan
          rad sajtova na mreži.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_online_scams.png"
            />
            Onlajn prevare
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Zloupotreba poverenja, naivnosti, saosećaja, taštine ili pohlepe ljudi
          kako bi se od njih izvukao novac ili podaci, ili kako bi se
          izmanipulisali da sami izazovu sajber incident.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Socijalni inženjering (fišing/vishing/smishing, lažno predstavljanje)
          <br />
          Lažni resursi (krivotvoreni sajt, mejl)
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Sa adrese koja liči na autentičan mejl građani su dobili obaveštenje o
          preuzimanju novih kredencijala za pristup portalu javnih usluga. U
          prilogu poruke nalazio se zaražen dokument.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_overtaking_control.png"
            />
            Preuzimanje kontrole
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Krađa pristupa uređaju ili nalozima za onlajn usluge, uključujući
          naloge za elektronsku poštu, društvene medije, onlajn prodavnice i
          slično.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Tehnički napadi
          <br />
          Socijalni inženjering
          <br />
          Neovlašćeni fizički pristup
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Medijsko udruženje izgubilo je pristup svojoj stranici na Fejsbuku, na
          kojoj su nepoznati počinioci počeli da objavljuju neprikladne
          sadržaje. Stranica je ugašena, a medijsko udruženje je bilo prinuđeno
          da napravi novu.
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2 font-[FoundryBold] ">
            {" "}
            Akteri
          </span>
          <img
            className="absolute top-3 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <div className="sm:flex pl-4 sm:flex-row">
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Izvršioci</h3>
            <p className="px-4 py-2">
              Poznato
              <br />
              Nepoznato
            </p>
          </div>
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Oštećeni</h3>
            <p className="px-4 py-2">
              Javni sektor
              <br />
              Privatni sektor
              <br />
              Civilni sektor
              <br />
              Medijski sektor
              <br />
              Građani
            </p>
          </div>
        </div>
      </details>

      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase  border-t-2 pt-4 border-[#92d8f4]">
        II Privatnost i zaštita podataka
      </h2>

      <p className="py-2">
        Kategorija posvećena povredama privatnosti i podataka o ličnosti u
        digitalnom prostoru, od faze prikupljanja podataka do njihovog
        eventualnog uništenja, uključujući i neovlašćeno korišćenje putem
        objavljivanja, ili neadekvatnu zaštitu koja dovodi do njihovog curenja u
        javnost.
      </p>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_disclosure_of_data.png"
            />
            Objavljivanje podataka
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Objavljivanje informacija o privatnom životu tj. podataka o ličnosti,
          sa namerom izvršioca da te informacije budu javno dostupne
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Objavljivanje na veb sajtu (uključujući javne registre i platforme){" "}
          <br />
          Objavljivanje na društvenoj mreži, blogu, u čet aplikaciji <br />
          Objavljivanje u medijima
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Onlajn portal objavio je na svom sajtu dokument u kome se nalaze
          podaci na osnovu kojih se može identifikovati više lica, a čiji
          identitet ne bi smeo da bude javno dostupan.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_data_leakage.png"
            />
            Curenje podataka
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Curenje podataka o ličnosti usled neodgovarajućih mera zaštite.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Curenje na veb sajtu (uključujući javne registre i platforme) <br />
          Objavljivanje na društvenoj mreži, blogu, u čet aplikaciji <br />
          Curenje u medijima
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Podaci o ličnosti iz baze podataka privatne kompanije postali dostupni
          na društvenim mrežama usled incidenta izazvanog propustom njihovih
          zaposlenih.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_unauthorized_collection_of_personal_data.png"
            />
            Prikupljanje podataka
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Neovlašćeno prikupljanje podataka o ličnosti, tj. prikupljanje,
          držanje i korišćenje podataka uz kršenje zakona.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Kršenje načela ograničenja u odnosu na svrhu obrade <br />
          Kršenje načela zakonitosti (obrada bez pravnog osnova)
          <br />
          Kršenje načela minimizacije podataka
          <br />
          Kršenje načela ograničenja roka čuvanja
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Državni organ koristi onlajn aplikaciju koja prikuplja više podataka o
          ličnosti nego što je neophodno da bi mogla da se pruži usluga kojoj
          aplikacija treba da služi.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_eavesdropping_and_recording.png"
            />
            Prisluškivanje i snimanje
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Presretanje elektronskih komunikacija, prisluškivanje i snimanje,
          protivno zakonu i/ili bez znanja lica o čijoj se komunikaciji, glasu
          ili snimku radi.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Oprema za presretanje
          <br />
          Oprema za prisluškivanje
          <br />
          Oprema za snimanje
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Državna agencija neovlašćeno pratila mejl komunikaciju između novinara
          i njihovih izvora.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2 font-[FoundryBold] ">
            {" "}
            Akteri
          </span>
          <img
            className="absolute top-3 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <div className="sm:flex pl-4 sm:flex-row">
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Izvršioci</h3>
            <p className="px-4 py-2">
              Odgovorno lice iz javnog sektora
              <br />
              Odgovorno lice iz medijskog sektora
              <br />
              Odgovorno lice iz korporativnog sektora
              <br />
              Odgovorno lice iz političke partije
              <br />
              Odgovorno lice iz civilnog sektora
              <br />
              Privatno (fizičko) lice
            </p>
          </div>
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Oštećeni</h3>
            <p className="px-4 py-2">
              Masovna povreda
              <br />
              Pojedinačna povreda
            </p>
          </div>
        </div>
      </details>

      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase  border-t-2 pt-4 border-[#92d8f4]">
        III Prevare, pretnje i manipulacije
      </h2>
      
      <p className="py-2">
        Kategorija posvećena različitim oblicima uznemiravanja i odmazde zbog
        izražavanja i aktivnosti na internetu, kao i različitim oblicima širenja
        sadržaja i manipulacija koje se vrše radi postizanja određenih ciljeva.
        Ova kategorija obuhvata slučajeve koji se odigravaju u svim aspektima
        digitalne sfere, uključujući aktivnosti na društvenim mrežama,
        algoritamsko upravljanje, kao i slučajeve koji završe na sudu.
      </p>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_public_misinformation.png"
            />
            Dezinformisanje javnosti
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>

        <p className="px-4 py-2">
          Širenje informacija koje su namenski pogrešne ili fabrikovane i
          plasirane sa ciljem da povrede osobu, socijalnu grupu, organizaciju
          ili državu (dezinformacije), kao i širenje informacija koje su
          zasnovane na istini, ali su plasirane sa malicioznom namerom da nanesu
          štetu osobi, organizaciji ili državi u cilju diskreditacije,
          zlostavljanja ili širenja govora mržnje (malinformacije).
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Kreiranje i deljenje lažnih sadržaja
          <br />
          Manipulacija sadržaja
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Javna ličnost širila neproverene informacije na društvenim mrežama.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov__self_censorship.png"
            />
            Autocenzura
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>

        <p className="px-4 py-2">
          Izmena ili uklanjanje politički osetljivog ili sadržaja od javnog
          interesa od strane medija koji ga je izvorno objavio. Imajući u vidu
          da je jako teško znati tačno da li je u pitanju spoljašnji ili
          unutrašnji pritisak na medije, odnosno da li je u pitanju cenzura ili
          autocenzura, u ovu potkategoriju svrstavaju se slučajevi u kojima nije
          došlo do uklanjanja sadržaja nakon jasne zloupotrebe pravnih
          mehanizama.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Uklanjanje sadržaja
          <br />
          Izmena sadržaja
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Medijski portal uklonio prethodno objavljeni tekst u kojem se pominje
          kritika vlasti.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_character_assassination.png"
            />
            Ugrožavanje reputacije
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Kreiranje lažnih naloga i sadržaja sa ciljem diskreditacije, odnosno
          ugrožavanja reputacije i nanošenja štete pojedincu, društvenoj grupi,
          organizaciji ili državi.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Kreiranje lažnih sadržaja i naloga
          <br />
          Manipulacija sadržaja
          <br />
          Lažno predstavljanje
          <br />
          Distribucija sadržaja bez saglasnosti
          <br />
          Distribucija intimnih sadržaja bez saglasnosti
          <br />
          Organizovani napadi na mrežama usmereni na ranjive zajednice (žene,
          lgbtq+, etničke manjine, izbeglice i migranti)
          <br />
          Verbalni napadi
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Lažni navodi o političkoj organizaciji deljeni su na društvenim
          mrežama sa lažno napravljenog profila.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_endangering_security.png"
            />
            Ugrožavanje sigurnosti
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Ugrožavanje sigurnosti podrazumeva napade na ličnost koji izazivaju
          strah i nesigurnost, u kraćem ili dužem periodu, ali sa jačim
          intenzitetom. U ovu potkategoriju spadaju dela kao što su sajber
          progranjanje, pretnje, pozivi na nasilje i objavljivanje ličnih
          podataka (doksovanje). I ovde su na meti dostojanstvo i reputacija,
          kao i privatnost, a cilj je prinuda na promenu ponašanja - povlačenje
          iz javnosti, sa društvenih mreža, izbegavanje određenih tema i slično.
          U ovu potkategoriju takođe se ubraja neovlašćeno deljenje ličnih
          podataka, uključujući i osvetničku pornografiju ili odavanje poslovnih
          tajni.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Verbalni napadi
          <br />
          Prikupljanje, manipulacija, diseminacija i zloupotreba ličnih podataka
          <br />
          Doksovanje
          <br />
          Direktne pretnje nasiljem uključujući pretnje koje su seksualne ili
          fizičke prirode
          <br />
          Napadi koji se temelje na rodnim i polnim karakteristikama
          <br />
          Mobing na mrežama
          <br />
          Proganjanje
          <br />
          Organizovani napadi na mrežama usmereni na ranjive zajednice (žene,
          lgbtq+, etničke manjine, izbeglice i migranti)
          <br />
          Filtriranje sadržaja i automatizovana moderacija
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Pretnje smrću i uvrede upućene novinarima na privatne adrese.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_discrimination_and_hate_speech.png"
            />
            Diskriminacija i govor mržnje
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Verbalni napadi na osnovu rasne, verske, nacionalne, etničke,
          seksualne, političke, sindikalne i druge pripadnosti i ličnih
          svojstava, poput uzrasta ili ekonomskog statusa, smatraju se govorom
          mržnje. Mobing je takođe često sredstvo za širenje diskriminacije i
          govora mržnje na mrežama, kao i organizovani napadi.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Verbalni napadi
          <br />
          Prikupljanje, manipulacija, diseminacija i zloupotreba ličnih podataka
          <br />
          Manipulacija sadržaja
          <br />
          Napadi koji se temelje na rodu i seksualnoj orijentaciji
          <br />
          Napadi na osnovu rasne, verske, nacionalne ili etničke pripadnosti
          <br />
          Mobing na mrežama
          <br />
          Organizovani napadi na mrežama usmereni na ranjive zajednice (žene,
          lgbtq+, etničke manjine, izbeglice i migranti)
          <br />
          Filtriranje sadržaja i automatizovana moderacija
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Diskriminatorni i lažni navodi o navodnim zločinima počinjenim od
          strane migranata deljeni su u medijima i na društvenim mrežama.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_limiting_freedom_of_expression.png"
            />
            Ograničavanje slobode izražavanja
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Pritisci zbog izražavanja na internetu i objavljivanja informacija
          često pogađaju članove aktivističkog i medijskog društva, kao i
          građanke i građane. Ovi pritisci mogu se ogledati u organizovanom
          prijavljivanju sadržaja, dok nekada mogu da uključuju i zloupotrebu
          pravnih mehanizama kao što su SLAPP tužbe, odnosno strateške tužbe
          protiv učešća javnosti za novinare ili tužbi za krivična dela kao što
          su uvreda. Pod ovu potkategoriju takođe spadaju i slučajevi u kojima
          posrednici (u većini slučajeva platforme) automatizovanim procesima
          uklanjaju sadržaje ili suspenduju naloge zbog navodnog kršenja svojih
          pravila ili uslova korišćenja. Najčešći razlozi su neprimeren sadržaj
          i povreda autorskih prava. Odluke su često netransparentne i konačne,
          a mogu biti i privremene i revidirane (zbog greške sistema
          automatizacije ili slučajeva organizovanog prijavljivanja).
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Sredstva
        </h3>
        <p className="px-4 py-2">
          Organizovano prijavljivanje
          <br />
          Zloupotreba pravnih mehanizama
          <br />
          Filtriranje sadržaja i automatizovana moderacija
          <br />
          Verbalni napadi
          <br />
          Odmazda za iznete stavove
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Slučaj
        </h3>
        <p className="px-4 py-2">
          Novinarima nakon prisustva na protestima stigle prekršajne prijave.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2 font-[FoundryBold] ">
            {" "}
            Akteri
          </span>
          <img
            className="absolute top-3 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <div className="sm:flex pl-4 sm:flex-row">
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Izvršioci</h3>
            <p className="px-4 py-2">
              Politički subjekt
              <br />
              Organi vlasti
              <br />
              Velike tehnološke kompanije
              <br />
              Privatne kompanije
              <br />
              Medijski sektor
              <br />
              Građani
              <br />
              Javne ličnosti
            </p>
          </div>
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Oštećeni</h3>
            <p className="px-4 py-2">
              Politički subjekt
              <br />
              Civilni sektor
              <br />
              Medijski sektor
              <br />
              Građani
              <br />
              Javne ličnosti
            </p>
          </div>
        </div>
      </details>

      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase border-t-2 pt-4 border-[#92d8f4] ">
        Rodno zasnovano onlajn nasilje
      </h2>
      
      <p className="py-2">
        Oblik nasilja koje prevashodno pogađa žene, devojčice i seksualne
        manjine. Za razliku od ostale tri, ova kategorija se kao dodatni okvir
        primenjuje na sve slučajeve u bazi kako bi se dobila jasnija slika o
        rasprostranjenosti rodno zansovanog nasilja. Kategorija se sastoji od
        četiri potkategorije u kojima su sredstva jasno definisana i poklapaju
        se sa sredstvima iz drugih kategorija.
      </p>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_gbov_compromised_data.png"
            />
            Zadiranje u privatnost
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Prikupljanje, manipulacija, diseminacija i zloupotreba ličnih podataka
          <br />
          Doksovanje
          <br />
          Distribucija sadržaja (uključujući i osvetničku pornografiju) bez
          saglasnosti
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov_character_assassination.png"
            />
            Ugrožavanje reputacije
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Pravljenje lažnih naloga
          <br />
          Krađa identiteta
          <br />
          Manipulacija sadržaja
          <br />
          Deljenje lažnih informacija i komentara u cilju diskreditacije
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov_endangering_security.png"
            />
            Uznemiravanje
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Direktne pretnje nasiljem uključujući pretnje koje su seksualne ili
          fizičke prirode
          <br />
          Napadi koji se temelje na rodu i seksualnoj orijentaciji
          <br />
          Mobing na mrežama
          <br />
          Proganjanje
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov_public_misinformation.png"
            />
            <span className="md:hidden">Targetirani i organizovani napadi na zajednice</span>
            <span className="hidden md:inline">Targetirani i organizovani napadi na<br />zajednice</span>
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Širenje lažnih vesti sa malicioznom namerom kako bi se diskreditovale
          organizacije i grupe u okviru određenih zajednica
          <br />
          Organizovani napadi na mrežama usmereni na ranjive zajednice (žene,
          lgbtq+, etničke manjine, izbeglice i migranti)
          <br />
          Nadziranje
        </p>
      </details>
    </div>
  );
}
