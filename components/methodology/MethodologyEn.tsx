import MethodologyIntro from "./MethodologyIntro";

export default function MethodologyEn() {
  return (
    <div className="my-12 flex flex-col gap-4 leading-8 text-base">
      <h1 className="text-3xl font-[FoundryBold] my-6">METHODOLOGY</h1>
      <MethodologyIntro />
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Criteria for entering cases
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          To begin with, we redefined the case selection criteria.&nbsp;
          <span className="font-[FoundryBold]">
            The first criterion is always mandatory.
          </span>
        </p>
        <ol className="list-decimal pl-14 py-3">
          <li>
            <span className="font-[FoundryBold] uppercase">
              The nature of the injury.
            </span>{" "}
            The incident happened in the digital space, the damage was caused to
            digital assets and/or digital rights were violated.
          </li>
        </ol>
        <p className="px-4 py-2">
          Additionally, the case must meet at least one of the three qualifying
          criteria:
        </p>

        <ol className="list-decimal pl-14 py-3">
          <li>
            <span className="font-[FoundryBold] uppercase">
              The extent of the injury.
            </span>{" "}
            The incident is massive, affecting a large number of citizens or
            other actors in the community.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">
              Social significance.
            </span>{" "}
            The context and potential consequences of the injury affect the
            underlying values or relationships in society.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">
              Innovativeness.
            </span>{" "}
            Technical means, methods, objectives or other elements of the
            incident are significantly more advanced than in previous cases.
          </li>
        </ol>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Categories
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          A more precise definition of the criteria led to changes in the
          classification of cases, so they are now classified into one of three
          categories:
        </p>
        <ol className="list-[upper-roman] pl-14 py-3">
          <li>
            <span className="font-[FoundryBold] uppercase">Cyber attacks.</span>{" "}
            Technical incidents, the primary goal of which is the intentional
            endangerment of computer infrastructure.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">
              Privacy and protection of personal data.
            </span>{" "}
            This group includes cases of violations, i.e. non-fulfillment of
            measures prescribed by law, which result in the violation of these
            personal rights in the digital sphere.
          </li>
          <li>
            <span className="font-[FoundryBold] uppercase">
              Fraud, threats and manipulations.
            </span>{" "}
            This category includes various information disorders and
            manipulations of digital content for the purpose of deception,
            retaliation, attacks on personality, and prevention of the exercise
            of personal rights.
          </li>
        </ol>
        <p className="px-4 py-2">
          Each of these categories is further segmented by specific types of
          incidents. Also, for each category, possible means, i.e. methods of
          attack, are listed and, although detailed, due to the rapid
          development of new technologies, this list is not comprehensive. All
          three categories, as well as their subcategories, were conceived and
          named in accordance with the consequences of specific violations in
          the digital space.
        </p>

        <p className="px-4 py-2">
          Although at first glance these three categories may seem separate, it
          is important to take into account that due to the size and
          interconnectedness of the digital space, cases can often be found in
          several different subcategories or even categories. As already stated,
          each category has its own subcategories within which the cases are
          more closely defined as well as the list of means by which the attacks
          were carried out. However, there are some differences and that is why
          it was decided that each category processes its cases separately,
          because the means can differ in these three spheres of digital space.
          The actors in these spheres also differ, so for example, in the second
          category, the violators of rights are mostly states or companies, in
          the third category it would mostly be citizens or politicians.
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Sources of information about incidents
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          The primary source of monitoring is the public sphere, i.e.
          traditional and social media. Relevant news and announcements about
          all potential cases are collected by researchers through an automated
          process through a defined set of keywords for each category.
        </p>

        <p className="px-4 py-2">
          Secondary sources consist of databases of injuries and related
          contents of organizations, associations and other actors that
          independently monitor incidents in their domain (databases of attacks
          on journalists, national CERT, commissioners and similar).
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Processing of individual cases
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          A special methodological segment consists of guidelines for
          researchers, created for uniformity in the selection and processing of
          incidents during their mapping and entry into the database.
        </p>
        <p className="px-4 py-2">
          After a specific violation has been identified and verified, the case
          is entered into the database with a brief description, while the
          evidence of the violation is archived, whether it is a screenshot of a
          tweet, a comment or article in which it was published. If available,
          the time period of the injury is recorded as well as the actors, i.e.
          the perpetrators of the injury and the injured parties, and the means,
          i.e. the methods of committing the injury, are also listed.
        </p>
      </details>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl font-[FoundryBold] my-6 uppercase">
          Principles of work
          <img
            className="absolute top-2 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          The revision of the methodology confirmed the{" "}
          <span className="font-[FoundryBold]">basic principles</span> of
          monitoring digital rights and freedoms, which apply to all of SHARE
          Foundations’ activities since its establishment:
        </p>

        <p className="px-4 py-2">
          <span className="font-[FoundryBold] uppercase">Transparency.</span>{" "}
          Periodical reports are narrative and leave room for the subjective
          impressions of researchers, as well as pointing out certain phenomena
          in accordance with common values and beliefs. However, the monitoring
          data in raw, machine-readable format is freely available for further
          use and different interpretations.
        </p>

        <p className="px-4 py-2">
          <span className="font-[FoundryBold] uppercase">Accuracy.</span> As
          part of the monitoring, researchers carry out basic verification of
          individual cases based on primary sources of information, for which
          SHARE Foundation is not responsible. Due to the limited scope of the
          verification, a mechanism for external correction has been established
          through an easily accessible, direct channel of communication with the
          researchers, through which citizens and organizations can deny,
          correct or supplement the available information about the case. All
          corrections can be submitted via email to the monitoring team.
        </p>
        <p className="px-4 py-2">
          <span className="font-[FoundryBold] uppercase">Ethics.</span>{" "}
          Researchers respect the privacy of those injured in the incidents they
          process for the purposes of monitoring, applying special protection
          measures when the dignity of the person is threatened in the
          incidents. The integrity of the monitoring base is subject to internal
          and external checks, while cases are selected according to established
          criteria, regardless of the researcher&apos;s personal beliefs,
          affection or distaste for the actors of the incident.
        </p>
      </details>
      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase  border-t-2 pt-4 border-[#92d8f4]">
        I Cyber incidents
      </h2>

      <p className="py-2">
        Any impact on the integrity or availability of an information system,
        network or device with the intention of taking control over them,
        disrupting or interrupting their operation, or changing, stealing,
        deleting or blocking data on them.
      </p>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_compromised_data.png"
            />
            Compromised data
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Endangerment of security, confidentiality or integrity of data on an
          information system or individual device due to unauthorized access,
          taking control or misuse of data.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Malware (malicious software, virus) <br />
          Scams (phishing, skimming)
          <br />
          Traffic interception (man in the middle)
          <br />
          Device theft
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          Servers and data of a public company have been the target of a
          ransomware attack: the so-called ransomware that encrypts data for
          which decryption requires the payment of a ransom.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_disabled_services.png"
            />
            Disabled services
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Interrupting or disabling the operation of an information system,
          network or device by maximum engagement of their resources.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">DoS/DDoS</p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          The information infrastructure of an academic network was targeted by
          distributed denial of service (DDoS) attacks - simultaneous requests
          from tens of thousands of IP addresses were sent to the servers, which
          caused the interruption or difficulty of the websites on the network.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_online_scams.png"
            />
            Online scams
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Exploiting people&apos;s trust, naivety, compassion, vanity or greed
          to extort money or data from them, or to manipulate them into causing
          a cyber incident themselves.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Social engineering (phishing/vishing/smishing, impersonation)
          <br />
          Fake resources (fake website, email)
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          From an address that looks like an authentic email, citizens received
          a notification about downloading new credentials for accessing the
          public services portal. An infected document was attached to the
          message.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_overtaking_control.png"
            />
            Overtaking control
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Theft of device access or accounts for online services, including
          accounts for email, social media, online stores, and the like.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Technical attacks
          <br />
          Social engineering
          <br />
          Unauthorized physical access
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          A media association lost access to its Facebook page, where unknown
          perpetrators began posting inappropriate content. The page was shut
          down, and the media association was forced to create a new one.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2 font-[FoundryBold] ">
            {" "}
            Actors
          </span>
          <img
            className="absolute top-3 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <div className="sm:flex pl-4 sm:flex-row">
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Perpetrators</h3>
            <p className="px-4 py-2">
              Known
              <br />
              Unknown
            </p>
          </div>
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Injured party</h3>
            <p className="px-4 py-2">
              Public sector
              <br />
              Private sector
              <br />
              Civilian sector
              <br />
              Media sector
              <br />
              The public
            </p>
          </div>
        </div>
      </details>

      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase  border-t-2 pt-4 border-[#92d8f4]">
        II Privacy and data protection
      </h2>

      <p className="py-2">
        The category is dedicated to violations of privacy and personal data in
        the digital space, from the stage of data collection to their eventual
        destruction, including unauthorized use through publication, or
        inadequate protection that leads to their leaking to the public.
      </p>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_disclosure_of_data.png"
            />
            Disclosure of data
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Publishing information about private life, ie. personal data, with the
          executors intention to make that information publicly available.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Website posting (including public registries and platforms)
          <br />
          Posting on a social network, blog, chat app
          <br />
          Publication in the media
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          An online portal has published a document on its website that contains
          data on the basis of which several persons can be identified, whose
          identity should not be publicly available.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_data_leakage.png"
            />
            Data leakage
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Leakage of personal data due to inadequate security measures.
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Website leaks (including public registries and platforms)
          <br />
          Posting on a social network, blog, chat app
          <br />
          Leaks in the media
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          Personal information from a private company&apos;s database became
          available on social media due to an incident that occurred due to the
          negligence of their employees.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_unauthorized_collection_of_personal_data.png"
            />
            Unauthorized collection of personal data
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Unauthorized collection of personal data, i.e. collection, holding and
          use of data in violation of the law.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Violation of the principle of limitation in relation to the purpose of
          processing
          <br />
          Violation of the principle of legality (processing without a legal
          basis)
          <br />
          Violation of the principle of data minimization
          <br />
          Violation of the principle of limitation of storage period
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          A government authority uses an online application that collects more
          personal data than is necessary to provide the service the application
          is intended to provide.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/privacy_and_data_protection_eavesdropping_and_recording.png"
            />
            Eavesdropping and recording
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Interception of electronic communications, eavesdropping and
          recording, against the law and/or without the knowledge of the person
          whose communication, voice or recording is in question.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Interception equipment
          <br />
          Wiretapping equipment
          <br />
          Recording equipment
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          The state agency monitored email communications between journalists
          and their sources without authorization.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2 font-[FoundryBold] ">
            {" "}
            Actors
          </span>
          <img
            className="absolute top-3 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <div className="sm:flex pl-4 sm:flex-row">
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Perpetrators</h3>
            <p className="px-4 py-2">
              Responsible person from the public sector
              <br />
              Responsible person from the media sector
              <br />
              Responsible person from the corporate sector
              <br />
              A responsible person from a political party
              <br />
              Responsible person from the civil sector
              <br />
              Private person
            </p>
          </div>
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Injured party</h3>
            <p className="px-4 py-2">
              Mass casualty
              <br />
              Individual casualty
            </p>
          </div>
        </div>
      </details>

      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase  border-t-2 pt-4 border-[#92d8f4]">
        III Fraud, threats and manipulations
      </h2>
      <p className="py-2">
        This category is dedicated to various forms of harassment and
        retaliation due to expression and activity on the Internet, as well as
        various forms of content dissemination and manipulation that are carried
        out in order to achieve certain goals. This category includes cases that
        play out in all aspects of the digital sphere, including social media
        activity, algorithmic governance, as well as cases that end up in court.
      </p>
      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_public_misinformation.png"
            />
            Public misinformation
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>

        <p className="px-4 py-2">
          Dissemination of information that is intentionally false or fabricated
          and placed with the aim of harming a person, social group,
          organization or state (disinformation), as well as spreading
          information that is based on the truth, but is placed with the
          malicious intent to harm a person, organization or state in order to
          discredit, abuse or spread hate speech (misinformation).
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Creating and sharing fake content
          <br />
          Content manipulation
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          A public figure spread unverified information on social networks.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov__self_censorship.png"
            />
            Self censorship
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>

        <p className="px-4 py-2">
          Editing or removal of politically sensitive or public interest content
          by the media that originally published it. Bearing in mind that it is
          very difficult to know exactly whether it is external or internal
          pressure on the media, i.e. whether it is censorship or
          self-censorship, this subcategory includes cases in which content was
          not removed after clear abuse of legal mechanisms.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Content removal
          <br />
          Content modification
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          The media portal removed a previously published text that mentioned
          criticism of the government
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_character_assassination.png"
            />
            Character assassination
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Creating fake accounts and content with the aim of discrediting, i.e.
          endangering the reputation and causing damage to an individual, social
          group, organization or state.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Creating fake content and accounts
          <br />
          Content manipulation
          <br />
          Impersonation
          <br />
          Distribution of content without consent
          <br />
          Non-consensual distribution of intimate content
          <br />
          Organized attacks on networks targeting vulnerable communities (women,
          lgbtq+, ethnic minorities, refugees and migrants)
          <br />
          Verbal attacks
        </p>
        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          False allegations about a political organization were shared on social
          media from a fake profile.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_endangering_security.png"
            />
            Endangering security
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Endangering security means attacks on the personality that cause fear
          and insecurity, in a shorter or longer period, but with greater
          intensity. Acts such as cyber stalking, threats, calls to violence and
          publication of personal data (doxxing) fall into this subcategory.
          Dignity and reputation, as well as privacy, are the target here, and
          the goal is to force a change in behavior - withdrawal from public
          life, from social networks, avoiding certain topics and the like. This
          subcategory also includes unauthorized sharing of personal
          information, including non-consensual distribution of intimate images
          or divulging trade secrets.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Verbal attacks
          <br />
          Collection, manipulation, dissemination and misuse of personal data
          <br />
          Doxxing
          <br />
          Direct threats of violence, including threats of a sexual or physical
          nature
          <br />
          Attacks based on gender and sexual characteristics
          <br />
          Cyber-mobbing
          <br />
          Stalking
          <br />
          Organized attacks on networks targeting vulnerable communities (women,
          lgbtq+, ethnic minorities, refugees and migrants)
          <br />
          Content filtering and automated moderation
          <br />
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          Death threats and insults sent to journalists’ private addresses.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_discrimination_and_hate_speech.png"
            />
            Discrimination and hate speech
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Verbal attacks based on racial, religious, national, ethnic, sexual,
          political, union and other affiliation and personal characteristics,
          such as age or economic status, are considered hate speech. Mobbing is
          also a frequent means of spreading discrimination and hate speech on
          networks, as well as organized attacks.
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Verbal attacks
          <br />
          Collection, manipulation, dissemination and misuse of personal data
          <br />
          Content manipulation
          <br />
          Attacks based on gender and sexual characteristics
          <br />
          Attacks based on racial, religious, national or ethnic affiliation
          <br />
          Cyber-mobbing
          <br />
          Organized attacks on networks targeting vulnerable communities (women,
          lgbtq+, ethnic minorities, refugees and migrants)
          <br />
          Content filtering and automated moderation
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          Discriminatory and false allegations about alleged crimes conducted by
          migrants were spread in the media and on social networks.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_limiting_freedom_of_expression.png"
            />
            Limiting freedom of expression
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Pressures due to expression on the Internet and publication of
          information often affect members of activist and media society, as
          well as citizens. These pressures can be reflected in the organized
          reporting of content, while sometimes they can also include the abuse
          of legal mechanisms such as SLAPP lawsuits, that is, strategic
          lawsuits against public participation for journalists or lawsuits for
          criminal acts such as insult. This subcategory also includes cases
          where intermediaries (in most cases platforms) remove content or
          suspend accounts through automated processes due to alleged violations
          of their rules or terms of use. The most common reasons are
          inappropriate content and copyright infringement. Decisions are often
          non-transparent and final, but may also be temporary and revised (due
          to an error in the automation system or cases of organized reporting).
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Means of attack
        </h3>
        <p className="px-4 py-2">
          Organized reporting of accounts or content
          <br />
          Abuse of legal mechanisms
          <br />
          Content filtering and automated moderation
          <br />
          Verbal attacks
          <br />
          Retaliation
        </p>

        <h3 className="text-xl mt-4 font-[FoundryBold] pl-4 uppercase">
          Illustrative case
        </h3>
        <p className="px-4 py-2">
          Reporters received misdemeanor charges after attending the protests.
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2 font-[FoundryBold] ">
            {" "}
            Actors
          </span>
          <img
            className="absolute top-3 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <div className="sm:flex pl-4 sm:flex-row">
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Perpetrators</h3>
            <p className="px-4 py-2">
              Political subject
              <br />
              Authority figures
              <br />
              Big tech
              <br />
              Private companies
              <br />
              Media sector
              <br />
              Individual
              <br />
              Public figures
            </p>
          </div>
          <div className="pr-8">
            <h3 className="text-lg font-[FoundryBold]">Injured party</h3>
            <p className="px-4 py-2">
              Political subject
              <br />
              Civil society
              <br />
              Media sector
              <br />
              The public
              <br />
              Public figures
            </p>
          </div>
        </div>
      </details>

      <h2 className="font-[FoundryBold] text-3xl my-6 uppercase border-t-2 pt-4 border-[#92d8f4] ">
        Gender based online violence
      </h2>
      <p className="py-2">
        A form of violence that primarily affects women, girls and sexual
        minorities. Unlike the other three, this category is applied as an
        additional framework to all cases in the database in order to get a
        clearer picture of the prevalence of gender-based violence. The category
        consists of four subcategories in which funds are clearly defined and
        match funds from other categories.
      </p>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/cyber_incidents_gbov_compromised_data.png"
            />
            Invasion of privacy
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Collection, manipulation, dissemination and misuse of personal data
          <br />
          Doxxing
          <br />
          Non-consensual distribution of content (including intimate content)
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov_character_assassination.png"
            />
            Character assassination
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Creating fake accounts
          <br />
          Identity theft
          <br />
          Content manipulation
          <br />
          Sharing false information and comments for the purpose of
          discreditation
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov_endangering_security.png"
            />
            Harassment
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Direct threats of violence, including threats of a sexual or physical
          nature
          <br />
          Attacks based on gender and sexual characteristics
          <br />
          Cyber-mobbing
          <br />
          Stalking
        </p>
      </details>

      <details>
        <summary className="inline-block relative cursor-pointer text-2xl my-6 uppercase">
          <span className="flex flex-row items-center gap-2">
            <img
              className="w-[107.892px]"
              src="/img/categories/fraud_threats_and_manipulations_gbov_public_misinformation.png"
            />
            <span className="md:hidden">
              Targeted and organized attacks on communities
            </span>
            <span className="hidden md:inline">
              Targeted and organized attacks on <br />
              communities
            </span>
          </span>
          <img
            className="absolute top-12 -right-8"
            src="/img/triangle-down.svg"
          />
        </summary>
        <p className="px-4 py-2">
          Spreading fake news with malicious intent to discredit organizations
          and groups within certain communities
          <br />
          Organized attacks on networks targeting vulnerable communities (women,
          lgbtq+, ethnic minorities, refugees and migrants)
          <br />
          Surveillance
        </p>
      </details>
    </div>
  );
}
