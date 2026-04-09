export function translateCategory(termSr: string, lang: string) {
  const translations: Record<string, string> = {
    "Sajber incidenti": "Cyber incidents",
    "Privatnost i zaštita podataka": "Privacy and data protection",
    "Prevare, pretnje i manipulacije": "Fraud, threats and manipulations",
    "Rodno zasnovano onlajn nasilje": "Gender based online violence",
  };
  return lang === "sr" ? termSr : (translations[termSr] || termSr);
}

export function translateSubcategory(termSr: string, lang: string) {
  const translations: Record<string, string> = {
    "Kompromitovani podaci": "Compromised data",
    "Objavljivanje podataka": "Disclosure of data",
    "Dezinformisanje javnosti": "Public misinformation",
    "Onesposobljen servis": "Disabled services",
    "Curenje podataka": "Data leakage",
    "Autocenzura": "Self censorship",
    "Onlajn prevare": "Online scams",
    "Prikupljanje podataka": "Unauthorized collection of personal data",
    "Ugrožavanje reputacije": "Character assassination",
    "Preuzimanje kontrole": "Overtaking control",
    "Prisluškivanje i snimanje": "Eavesdropping and recording",
    "Ugrožavanje sigurnosti": "Endangering security",
    "Diskriminacija i govor mržnje": "Discrimination and hate speech",
    "Ograničavanje slobode izražavanja": "Limiting freedom of expression",
    "Zadiranje u privatnost": "Invasion of privacy",
    "Uznemiravanje": "Harassment",
    "Targetirani i organizovani napadi na zajednice": "Targeted and organized attacks on communities"
  };
  return lang === "sr" ? termSr : (translations[termSr] || termSr);
}

export function translateAttackTargets(termSr: string, lang: string) {
  const translations: Record<string, string> = {
    "Javni sektor": "Public sector",
    "Masovna povreda": "Mass casualty",
    "Politički subjekt": "Political subject",
    "Privatni sektor": "Private sector",
    "Pojedinačna povreda": "Individual casualty",
    "Civilni sektor": "Civilian sector",
    "Medijski sektor": "Media sector",
    "Građani": "The public",
    "Javne ličnosti": "Public figures",

    "Poznato": "Known",
    "Odgovorno lice iz javnog sektora": "Responsible person from the public sector",
    "Nepoznato": "Unknown",
    "Odgovorno lice iz medijskog sektora": "Responsible person from the media sector",
    "Organi vlasti": "Authority figures",
    "Odgovorno lice iz korporativnog sektora": "Responsible person from the corporate sector",
    "Velike tehnološke kompanije": "Big tech",
    "Odgovorno lice iz političke partije": "Responsible person from a political party",
    "Privatne kompanije": "Private companies",
    "Odgovorno lice iz civilnog sektora": "Responsible person from the civil sector",
    "Privatno lice": "Private person",
    "Privatno (fizičko) lice": "Private person",
    
  };
  return lang === "sr" ? termSr : (translations[termSr] || termSr);
}

export function translateAttackSources(termSr: string, lang: string) {
  const translations: Record<string, string> = {
    "Poznato": "Known",
    "Odgovorno lice iz javnog sektora": "Responsible person from the public sector",
    "Politički subjekt": "Political subject",
    "Nepoznato": "Unknown",
    "Odgovorno lice iz medijskog sektora": "Responsible person from the media sector",
    "Organi vlasti": "Authority figures",
    "Odgovorno lice iz korporativnog sektora": "Responsible person from the corporate sector",
    "Velike tehnološke kompanije": "Big tech",
    "Odgovorno lice iz političke partije": "Responsible person from a political party",
    "Privatne kompanije": "Private companies",
    "Odgovorno lice iz civilnog sektora": "Responsible person from the civil sector",
    "Medijski sektor": "Media sector",
    "Privatno lice": "Private person",
    "Privatno (fizičko) lice": "Private person",
    "Građani": "Individual",
    "Javne ličnosti": "Public figures",

  };
  return lang === "sr" ? termSr : (translations[termSr] || termSr);
}


export function translateAttackMethods(termSr: string, lang: string) {
  	
  			
  const translations: Record<string, string> = {
    "Malver (zlonamerni softer, virus)": "Malware (malicious software, virus)",
    "DoS/DDoS": "DoS/DDoS",
    "Socijalni inženjering (fišing/vishing/smishing, lažno predstavljanje)": "Social engineering (phishing/vishing/smishing, impersonation)",
    "Socijalni inženjering": "Social engineering",
    "Tehnički napadi": "Technical attacks",
    "Objavljivanje na veb sajtu (uključujući javne registre i platforme)": "Website posting (including public registries and platforms)",
    "Curenje na veb sajtu (uključujući javne registre i platforme)": "Website leaks (including public registries and platforms)",
    "Kršenje načela ograničenja u odnosu na svrhu obrade": "Violation of the principle of limitation in relation to the purpose of processing",
    "Oprema za presretanje": "Interception equipment",
    "Kreiranje i deljenje lažnih sadržaja": "Creating and sharing fake content",
    "Uklanjanje sadržaja": "Content removal",
    "Kreiranje lažnih sadržaja i naloga": "Creating fake content and accounts",
    "Verbalni napadi": "Verbal attacks",
    "Organizovano prijavljivanje": "Organized reporting of accounts or content",
    "Prevare (fišing, skiming)": "Scams (phishing, skimming)",
    "Lažni resursi (krivotvoreni sajt, mejl)": "Fake resources (fake website, email)",
    "Objavljivanje na društvenoj mreži, blogu, u čet aplikaciji": "Posting on a social network, blog, chat app",
    "Kršenje načela zakonitosti (obrada bez pravnog osnova)": "Violation of the principle of legality (processing without a legal basis)",
    "Oprema za prisluškivanje": "Wiretapping equipment",
    "Manipulacija sadržaja": "Content manipulation",
    "Izmena sadržaja": "Content modification",
    "Prikupljanje, manipulacija, diseminacija i zloupotreba ličnih podataka": "Collection, manipulation, dissemination and misuse of personal data",
    "Zloupotreba pravnih mehanizama": "Abuse of legal mechanisms",
    "Presretanje saobraćaja (man in the middle)": "Traffic interception (man in the middle)",
    "Neovlašćeni fizički pristup": "Unauthorized physical access",
    "Objavljivanje u medijima": "Publication in the media",
    "Curenje u medijima": "Leaks in the media",
    "Kršenje načela minimizacije podataka": "Violation of the principle of data minimization",
    "Oprema za snimanje": "Recording equipment",
    "Lažno predstavljanje": "Impersonation",
    "Doksovanje": "Doxxing",
    "Filtriranje sadržaja i automatizovana moderacija": "Content filtering and automated moderation",
    "Krađa uređaja": "Device theft",
    "Kršenje načela ograničenja roka čuvanja": "Violation of the principle of limitation of storage period",
    "Distribucija sadržaja bez saglasnosti": "Distribution of content without consent",
    "Direktne pretnje nasiljem uključujući pretnje koje su seksualne ili fizičke prirode": "Direct threats of violence, including threats of a sexual or physical nature",
    "Napadi koji se temelje na rodu i seksualnoj orijentaciji": "Attacks based on gender and sexual characteristics",	
    "Distribucija intimnih sadržaja bez saglasnosti": "Non-consensual distribution of intimate content",
    "Napadi koji se temelje na rodnim i polnim karakteristikama": "Attacks based on gender and sexual characteristics",
    "Mobing na mrežama": "Cyber-mobbing",
    "Odmazda za iznete stavove": "Cyber-mobbing	Retaliation",
    "Organizovani napadi na mrežama usmereni na ranjive zajednice (žene, lgbtq+, etničke manjine, izbeglice i migranti)": "Organized attacks on networks targeting vulnerable communities (women, lgbtq+, ethnic minorities, refugees and migrants)",
    "Proganjanje": "Stalking",
    "Napadi na osnovu rasne, verske, nacionalne ili etničke pripadnosti": "Attacks based on racial, religious, national or ethnic affiliation",
    "Mediji": "Media",
    "Web sajt": "Website",
    "Kreiranje lažnih sadržaja": "Creating fake content",
    "Presretanje, prisluškivanje": "Traffic interception, wiretapping",
    "Društvene mreže": "Social media",
    "Nepoznato": "Unknown",
    "Fišing kampanja, krađa identiteta, širenje zlonamernih programa": "Phishing campaign, identity theft, malware dissemination",
    "Chat aplikacija": "Chat app",
    "Krađa identiteta": "Identity theft",
    "Distribucija sadržaja (uključujući i osvetničku pornografiju) bez saglasnosti": "Non-consensual distribution of content (including intimate content)",
    "Deljenje lažnih informacija i komentara u cilju diskreditacije": "Sharing false information and comments for the purpose of discreditation",
    "Pravljenje lažnih naloga": "Creating fake accounts",
    "Nadziranje": "Surveillance",
    "Širenje lažnih vesti sa malicioznom namerom kako bi se diskreditovale organizacije i grupe u okviru određenih zajednica": "Spreading fake news with malicious intent to discredit organizations and groups within certain communities",
  };
  return lang === "sr" ? termSr : (translations[termSr] || termSr);
}

export function translateGbovCategory(termSr: string, lang: string) {
    const translations: Record<string, string> = {
      "Zadiranje u privatnost": "Invasion of privacy",
      "Ugrožavanje reputacije": "Character assassination",
      "Uznemiravanje": "Harassment",
      "Targetirani i organizovani napadi na zajednice": "Targeted and organized attacks on communities"
    };
    return lang === "sr" ? termSr : (translations[termSr] || termSr);
  }


export function translateGbovMeans(termSr: string, lang: string) {
  const translations: Record<string, string> = {
    "Nadziranje": "Surveillance",
    "Deljenje lažnih informacija i komentara u cilju diskreditacije": "Sharing false information and comments for the purpose of discreditation",
    "Pravljenje lažnih naloga": "Creating fake accounts",
    "Širenje lažnih vesti sa malicioznom namerom kako bi se diskreditovale organizacije i grupe u okviru određenih zajednica": "Spreading fake news with malicious intent to discredit organizations and groups within certain communities",
    "Prikupljanje, manipulacija, diseminacija i zloupotreba ličnih podataka": "Collection, manipulation, dissemination and misuse of personal data",
    "Organizovani napadi na mrežama usmereni na ranjive zajednice (žene, lgbtq+, etničke manjine, izbeglice i migranti)": "Organized attacks on networks targeting vulnerable communities (women, lgbtq+, ethnic minorities, refugees and migrants)",
    "Proganjanje": "Stalking",
    "Doksovanje": "Doxxing",
    "Napadi koji se temelje na rodu i seksualnoj orijentaciji": "Attacks based on gender and sexual characteristics",	
    "Distribucija intimnih sadržaja bez saglasnosti": "Non-consensual distribution of intimate content",
    "Distribucija sadržaja (uključujući i osvetničku pornografiju) bez saglasnosti": "Non-consensual distribution of content (including intimate content)",
    "Napadi koji se temelje na rodnim i polnim karakteristikama": "Attacks based on gender and sexual characteristics",
    "Mobing na mrežama": "Cyber-mobbing",
    "Manipulacija sadržaja": "Content manipulation",
    "Krađa identiteta": "Identity theft",
    "Direktne pretnje nasiljem uključujući pretnje koje su seksualne ili fizičke prirode": "Direct threats of violence, including threats of a sexual or physical nature",
  };
  return lang === "sr" ? termSr : (translations[termSr] || termSr);
}
