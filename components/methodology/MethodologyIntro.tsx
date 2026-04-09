import { useContext } from "react";
import { LangContext } from "../LangProvider";

export default function MethodologyIntro() {
  const lang = useContext(LangContext);
  return (
    <>
      {lang === "sr" ? (
        <>
          <p>
            U okviru istraživanja upotrebe novih tehnologija i njenih različitih
            uticaja na društvo, sredinom 2014. SHARE Fondacija pokrenula je
            stalni monitoring povreda prava građana i organizacija u Srbiji.
            Pored uvida u trendove u ovoj oblasti, periodični izveštaji iz
            monitoringa omogućili su nam da bolje usmerimo pritisak na nadležne
            institucije da unaprede i primenjuju pravni okvir zaštite, kao i da
            doprinosimo razvoju svesti i znanja našeg društva o rizicima i
            bezbednosti na internetu. Važno je napomenuti da slučajevi koji
            ulaze u bazu nisu ograničeni samo na konvencionalne društvene
            strukture od vrha do dna, kao na primer od vlasti prema pojedincima,
            već uključuju i prekršaje od strane aktera kao što su privatne
            kompanije i sami građani. Cilj je da ovakvi slučajevi postanu i
            ostanu javno zabeleženi kako bi se javnosti približila njihova
            sveprisutnost, ali takođe objasnili i načini na koje dolazi do
            ovakvih povreda. Takođe, ukazivanjem na ove povrede, može se
            doprineti izgradnji kapaciteta građana, medija i nevladinih
            organizacija da na njih adekvatno odgovore. Iako ne postoji
            univerzalan način zaštite protiv povreda digitalnih prava,
            informisanost i dobra lična digitalna higijena mogu pomoći u zaštiti
            od rizika ili rešavanju ovakvih slučajeva ako do njih dođe.
            Monitoring je u skladu i sa misijom SHARE Fondacije, koja glasi:
            Kontrola moćnih i podrška deprivilegovanima u digitalnom prostoru.
          </p>
          <p>
            U odnosu na prethodne verzije, izmenjene su kategorije,
            potkategorije, ali i načini prikupljanja slučajeva, kao i samog
            beleženja i opisivanja. Od početka monitoringa 2014. godine,
            metodologija je nekoliko puta menjana kako bi se kroz potkategorije
            bolje uhvatili i opisali razni prekršaji, bilo ažuriranjem naziva
            potkategorija ili dodavanjem novih. Na primer, u verziji
            metodologije 2.0 koja je objavljena 2018. godine, dodate su
            potkategorije za nekoliko vrsta prekršaja, nova sredstva napada
            (Konfiskacija i pretrage), ali i nova kategorija pod nazivom Ostala
            kršenja kako bi se obuhvatila kršenja koja ne spadaju ni u jednu od
            postojećih kategorija. Poslednja ažurirana verzija (v2.1) iz 2019.
            godine pretrpela je manje promene u kategoriji Manipulacije i
            propaganda za prilagođavanje kada se uzmu u obzir kršenja po
            zemljama.
          </p>
          <p>
            Razvoj i tehničkih i pravnih alata, kao i obim registrovanih
            slučajeva, u međuvremenu su postavljali sve veći izazov našim
            istraživačima prilikom selekcije i klasifikacije povreda po staroj
            metodologiji. Stoga smo 2022. započeli reviziju postojeće baze
            slučajeva, s namerom da radikalno reformišemo sistem monitoringa
            digitalnih prava.
          </p>
        </>
      ) : (
        <>
          <p>
            As part of the research process investigating the use of new
            technologies and their various impacts on society, SHARE Foundation
            launched an ongoing monitoring database of violations of the rights
            of citizens and organizations in Serbia in mid-2014. In addition to
            insight into trends in this area, the periodically published
            monitoring reports have enabled us to better direct pressure on
            responsible institutions to improve and apply the legal protection
            framework, as well as to contribute to the development of our
            society&apos;s awareness and knowledge of security and risks on the
            Internet. It is important to note that the cases entering the
            monitoring database are not only limited to the conventional top to
            bottom social structures such as government entities towards
            individuals, but also include violations from actors such as private
            companies and citizens themselves. The goal is for such cases to
            become and remain publicly available in order to bring their
            ubiquity closer to the public, but also to educate about the ways in
            which such violations can occur. Also, pointing out these violations
            can contribute to building the capacity of citizens, media and
            non-governmental organizations to adequately respond to them. While
            there is no universal way to protect against digital rights
            violations, awareness and good personal digital hygiene can help
            prevent or resolve such cases if they are to occur. The monitoring
            project is in line with SHARE Foundation&apos;s overall mission,
            which is: Control of the powerful and support of the underprivileged
            in digital spaces.
          </p>
          <p>
            Compared to the previous versions, the categories, subcategories,
            but also the ways of collecting cases, as well as the recording and
            descriptions themselves have been changed. Since 2014, when the
            monitoring process was started by the SHARE Foundation, the
            methodology has changed a few times in order to better capture and
            describe the types of violations through subcategories, either by
            updating the names of subcategories or adding new ones. For example,
            in the 2.0 version of the methodology that was released in 2018,
            additional subcategories were added for several types of violations,
            a new means of attack (Confiscation and searches) but also a new
            category called Other violations in order to encapsulate violations
            that do not fall under any of the existing categories. The last
            updated version (v2.1) from 2019 underwent minor changes in the
            Manipulations and propaganda category for adjustment when taking
            into account violations across countries.
          </p>
          <p>
            The development of both technical and legal tools, as well as the
            volume of registered cases, meanwhile posed an increasing challenge
            to our researchers when selecting and classifying injuries according
            to the old methodology. Therefore in 2022, we started a review of
            the existing case base, with the intention of radically reforming
            the digital rights monitoring system.
          </p>
        </>
      )}
    </>
  );
}
