import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class Language {

    private _toggleValue = new BehaviorSubject<string>('false');
    toggleValue$ = this._toggleValue.asObservable();

    get toggleValue(): string {
        return this._toggleValue.getValue();
    }
    set toggleValue(val: string) {
        this._toggleValue.next(val);
    }

    public english = {
        navleft: 'About me',
        navmid: 'Skills',
        navright: 'Projects',

        buttonleft: 'check my work',
        buttonright: 'contact me',
        bannertxta: 'Frontend Developer',
        bannertxtb: 'Based in Hannover',
        bannertxtc: 'Open to work',
        bannertxtd: 'Available to work',

        abouta: 'Who I Am',
        aboutb: 'About me',
        aboutc: 'My name is Sebastian, I have always been involved in IT and work in a solution-oriented way, because I am passionate about solving complex tasks and creating new applications. I find inspiration in innovative projects and in continuously developing myself.',
        aboutd: 'Flexible in terms of working environments, I can work effectivley both on-site remotely.',
        aboute: 'I am open-minded and always looking for personal challanges to constantly improve my knowledge and skills.',
        aboutf: 'In my profession, programming isn\'t just about writing code it\'s creative form of problem-solving. I take pride in my ability to distill complex technical challanges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.',

        skillsa: 'Technologies',
        skillsb: 'Skill Set',
        skillsc: 'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to empracing new technologies and methodolohies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web develepment.',
        skillsd: 'You need',
        skillse: 'another skill',
        skillsf: 'Feel free ton contact me. I look forward to expanding on my previous knowledge',
        skillsbutton: 'Lets Talk',

        projectsa: 'Featured Projects',
        projectsb: 'Explore a selection of my work here - Interact with projects to see my skills in action.',

        headercart: 'What is this project about?',
        testbtncard: 'Life test',
        nextbtncard: 'Next project',

        headerrevaluation: 'What my colleagues say about me',

        footerunderlogoa: 'Web Developer',
        footerunderlogob: 'Hannover Germany',
        footerdat: 'Legal Notice',
        footerimp: 'Imprint'
    };

    public german = {
        navleft: 'Ueber mich',
        navmid: 'Faehigkeiten',
        navright: 'Projekte',

        buttonleft: 'Arbeiten',
        buttonright: 'Kontakt',
        bannertxta: 'Frontend Entwickler',
        bannertxtb: 'Sitz in Hannover',
        bannertxtc: 'Offen für Arbeit',
        bannertxtd: 'Für die Arbeit verfügbar',

        abouta: 'Wer ich bin',
        aboutb: 'Ueber mich',
        aboutc: 'Mein Name ist Sebastian, ich bin schon immer in der IT unterwegs und arbeite lösungsorientiert, weil mich das Lösen komplexer Aufgaben und das Erschaffen neuer Anwendungen begeistert. Inspiration finde ich in innovativen Projekten und darin, mich stetig weiterzuentwickeln.',
        aboutd: 'Ich bin flexibel, was die Arbeitsumgebung angeht, und kann sowohl vor Ort als auch aus der Ferne effektiv arbeiten.',
        aboute: 'Ich bin aufgeschlossen und immer auf der Suche nach persönlichen Herausforderungen, um meine Kenntnisse und Fähigkeiten Fähigkeiten.',
        aboutf: 'In meinem Beruf geht es beim Programmieren nicht nur um Code zu schreiben; es ist eine kreative Form des Problemlösens. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',

        skillsa: 'Technologien',
        skillsb: 'Fertigkeiten',
        skillsc: 'Auf meinem Weg habe ich an verschiedenen Projekten gearbeitet, einer Reihe von Frontend-Technologien und Konzepten Konzepte. Ich bin offen für die Einführung neuer Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Landschaft der Web entwicklung.',
        skillsd: 'Sie benötigen',
        skillse: 'andere Fähigkeit',
        skillsf: 'Nehmen Sie Kontakt mit mir auf. Ich freue mich darauf mein bisheriges Wissen zu erweitern',
        skillsbutton: 'Lasst uns reden',

        projectsa: 'Ausgewählte Projekte',
        projectsb: 'Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',

        headercart: 'Um was geht es bei diesem Projekt?',
        testbtncard: 'Testen',
        nextbtncard: 'Nächstes Projekt',

        headerrevaluation: 'Was meine Kollegen über mich sagen',

        footerunderlogoa: 'Web-Entwickler',
        footerunderlogob: 'Hannover Deutschland',
        footerdat: 'Datenschutz',
        footerimp: 'Impressum'
    };

    public retxtenglish = [
        { text: "Sebastian keeps calm under stress and always finds a solution.", name: "Anna, Project Manager" },
        { text: "He gladly shares his knowledge and helps new colleagues settle in.", name: "Markus, Developer" },
        { text: "He thinks solution-oriented and brings ideas that move us forward.", name: "Laura, Team Lead" },
        { text: "He explains tech so simply that even non-experts understand it.", name: "Daniel, IT Support" },
        { text: "He looks beyond code and cares about the user experience.", name: "Sarah, Designer" }
    ];

    public retxtgerman = [
        { text: "Sebastian bleibt auch im Stress ruhig und findet immer Lösungen.", name: "Anna, Projektmanagerin" },
        { text: "Er teilt sein Wissen gern und hilft neuen Kollegen beim Einstieg.", name: "Markus, Entwickler" },
        { text: "Er denkt lösungsorientiert und bringt Ideen, die uns weiterbringen.", name: "Laura, Teamleiterin" },
        { text: "Er erklärt Technik so einfach, dass es jeder versteht.", name: "Daniel, IT-Support" },
        { text: "Er schaut über den Code hinaus und achtet auf die Nutzererfahrung.", name: "Sarah, Designerin" }
    ];

    public contacttxtenglish = {
        headeroverbox: 'Contact me',
        headbefore: 'Let s work',
        headafter: 'together',
        underhead: 'Got a problem to solve',
        descriptbefore: 'I enjoy turning ideas into results and I’m always curious about new challenges. If you’re looking for someone who brings energy, focus, and reliable value to your projects, I’d be happy to connect.',
        descriptafter: 'your ideas and contributing to your projects with my work.',
        question: 'Need a Frontend developer?',
        reply: 'Let s talk!',

        name: 'What s your name?',
        missingname: 'Oops! it seems your name is missing',
        email: 'What s your email?',
        missingmail: 'Hoppla! your email is required',
        message: 'How can I help you?',
        missingmassage: 'What do you need to develop?',

        policytxtbefore: 'I ve read the',
        policyicealink: 'privacy policy',
        policyafter: 'and agree to the processing of my data as outlined.',
        missingpolicy: 'Please accept the privacy policy',

        button: 'absend'
    };

    public contacttxtgerman = {
        headeroverbox: 'Kontaktieren Sie mich',
        headbefore: 'Lass uns',
        headafter: 'zusammenarbeiten',
        underhead: 'Sie haben ein Problem zu lösen',
        descriptbefore: 'Ich habe Freude daran, Ideen in Ergebnisse zu verwandeln und bin immer neugierig auf neue Herausforderungen. Wenn Sie jemanden suchen, der Energie, Fokus und verlässlichen Mehrwert in Ihre Projekte bringt, freue ich mich auf den Austausch.',
        question: 'Brauchen Sie einen Frontend-Entwickler?',
        reply: 'Lassen Sie uns reden!',

        name: 'Wie ist Ihr Name?',
        missingname: 'Ups! Ihr Name scheint zu fehlen',
        email: 'Wie lautet Ihre E-Mail?',
        missingmail: 'Hoppla! Ihre E-Mail ist erforderlich',
        message: 'Wie kann ich Ihnen helfen?',
        missingmassage: 'Was müssen Sie entwickeln?',

        policytxtbefore: 'Ich habe die',
        policyicealink: 'Datenschutzbestimmungen',
        policyafter: 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
        missingpolicy: 'Bitte akzeptieren Sie die Datenschutzbestimmungen',

        button: 'Absenden'
    };

    public joinenglish = {
        cardnumber: '01',
        headercard: 'Join',
        descriptcard: 'Task manager inspired by the Kanba System. Create and organize tasks using drag and drop functions, assign users and categories.'
    }

    public joingerman = {
        cardnumber: '01',
        headercard: 'Join',
        descriptcard: 'Aufgabenmanager nach dem Vorbild des Kanba-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    }

    public locoenglish = {
        cardnumber: '02',
        headercard: 'EL Pollo Loco',
        descriptcard: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    }

    public locogerman = {
        cardnumber: '02',
        headercard: 'EL Pollo Loco',
        descriptcard: 'Aufgabenmanager nach dem Vorbild des Kanba-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    }

    public bubbleenglish = {
        cardnumber: '03',
        headercard: 'Da Bubble',
        descriptcard: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    }

    public bubblegerman = {
        cardnumber: '03',
        headercard: 'Da Bubble',
        descriptcard: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    }

    public legalNoticeDe = {
        s1Title: '1. Datenschutz auf einen Blick',
        s1Subtitle: 'Allgemeine Hinweise',
        s1P1: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.',

        s2Title: 'Datenerfassung auf dieser Website',
        s2Q1: 'Wer ist verantwortlich für die Datenerfassung auf dieser Website?',
        s2A1: 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.',
        s2Q2: 'Wie erfassen wir Ihre Daten?',
        s2A2a: 'Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.',
        s2A2b: 'Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.',
        s2Q3: 'Wofür nutzen wir Ihre Daten?',
        s2A3: 'Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.',
        s2Q4: 'Welche Rechte haben Sie bezüglich Ihrer Daten?',
        s2A4: 'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.',

        s3Title: 'Analyse-Tools und Tools von Drittanbietern',
        s3P1: 'Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.',
        s3P2: 'Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.',

        s4Title: '2. Allgemeine Hinweise und Pflichtinformationen',
        s4Subtitle: 'Datenschutz',
        s4P1: 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.',
        s4P2: 'Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.',
        s4P3: 'Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.',

        s5Subtitle: 'Hinweis zur verantwortlichen Stelle',
        s5Name: 'Sebastian Peters',
        s5CareOf: 'c/o flexdienst – #11290',
        s5Street: 'Kurt-Schumacher-Straße 76',
        s5City: '67663 Kaiserslautern',
        s5Country: 'Deutschland',
        s5PhoneLabel: 'Telefon:',
        s5Phone: '0173-4540375',
        s5Email: 'data.devcontain[at]gmail.com',
        s5ControllerText: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.',

        s6Subtitle: 'Speicherdauer',
        s6P: 'Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.',

        s7Subtitle: 'Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website',
        s7P: 'Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.',

        s8Subtitle: 'Empfänger von personenbezogenen Daten',
        s8P: 'Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.',

        s9Subtitle: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
        s9P: 'Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.',

        s10Subtitle: 'Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)',
        s10P1: 'WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).',
        s10P2: 'WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).',

        s11Subtitle: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
        s11P: 'Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.',

        s12Subtitle: 'Recht auf Datenübertragbarkeit',
        s12P: 'Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',

        s13Subtitle: 'Auskunft, Berichtigung und Löschung',
        s13P: 'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.',

        s14Subtitle: 'Recht auf Einschränkung der Verarbeitung',
        s14Intro: 'Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:',
        s14Li1: 'Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        s14Li2: 'Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.',
        s14Li3: 'Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        s14Li4: 'Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.',
        s14Outro: 'Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.',

        s15Subtitle: 'Widerspruch gegen Werbe-E-Mails',
        s15P: 'Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.',

        s16SourceLabel: 'Quelle:',
        s16SourceText: 'www.e-recht24.de'
    };

    public legalNoticeEn = {
        s1Title: '1. Data Protection at a Glance',
        s1Subtitle: 'General Notes',
        s1P1: 'The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified. Detailed information on data protection can be found in our privacy policy below this text.',

        s2Title: 'Data Collection on this Website',
        s2Q1: 'Who is responsible for data collection on this website?',
        s2A1: 'Data processing on this website is carried out by the website operator. Their contact details can be found in the section “Information on the Controller” in this privacy policy.',
        s2Q2: 'How do we collect your data?',
        s2A2a: 'On the one hand, your data is collected when you provide it to us. This may, for example, be data you enter into a contact form.',
        s2A2b: 'Other data is collected automatically or after your consent when visiting the website by our IT systems. This is mainly technical data (e.g. internet browser, operating system or time of page access). This data is collected automatically as soon as you enter this website.',
        s2Q3: 'What do we use your data for?',
        s2A3: 'Part of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.',
        s2Q4: 'What rights do you have regarding your data?',
        s2A4: 'You have the right to obtain information free of charge at any time about the origin, recipients, and purpose of your stored personal data. You also have the right to request the rectification or deletion of this data. If you have given consent to data processing, you may revoke this consent at any time with effect for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority. You can contact us at any time regarding this or any other questions on the subject of data protection.',

        s3Title: 'Analytics Tools and Third-Party Tools',
        s3P1: 'When visiting this website, your surfing behavior may be statistically evaluated. This is done primarily with so-called analysis programs.',
        s3P2: 'Detailed information on these analysis programs can be found in the following privacy policy.',

        s4Title: '2. General Notes and Mandatory Information',
        s4Subtitle: 'Data Protection',
        s4P1: 'The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.',
        s4P2: 'When you use this website, various personal data is collected. Personal data is data by which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.',
        s4P3: 'We would like to point out that data transmission on the Internet (e.g. communication by email) can have security gaps. Complete protection of the data from access by third parties is not possible.',

        s5Subtitle: 'Information on the Controller',
        s5Name: 'Sebastian Peters',
        s5CareOf: 'c/o flexdienst – #11290',
        s5Street: 'Kurt-Schumacher-Straße 76',
        s5City: '67663 Kaiserslautern',
        s5Country: 'Germany',
        s5PhoneLabel: 'Phone:',
        s5Phone: '0173-4540375',
        s5Email: 'data.devcontain[at]gmail.com',
        s5ControllerText: 'The controller is the natural or legal person who, alone or jointly with others, determines the purposes and means of the processing of personal data (e.g. names, e-mail addresses, etc.).',

        s6Subtitle: 'Storage Duration',
        s6P: 'Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for the data processing no longer applies. If you make a justified request for deletion or revoke your consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, deletion will take place after these reasons no longer apply.',

        s7Subtitle: 'General Notes on the Legal Bases of Data Processing on this Website',
        s7P: 'If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9(2)(a) GDPR if special categories of data pursuant to Art. 9(1) GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, processing is also based on Art. 49(1)(a) GDPR. If you have consented to the storage of cookies or to access information on your device (e.g. via device fingerprinting), processing is additionally based on Sec. 25(1) TTDSG. Consent can be revoked at any time. If your data is required for the fulfillment of a contract or for pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, we process your data if this is necessary to fulfill a legal obligation on the basis of Art. 6(1)(c) GDPR. Data processing may also be based on our legitimate interest pursuant to Art. 6(1)(f) GDPR. The specific legal basis applicable in each individual case is explained in the following paragraphs of this privacy policy.',

        s8Subtitle: 'Recipients of Personal Data',
        s8P: 'As part of our business activities, we work with various external parties. In some cases, the transmission of personal data to these external parties is also necessary. We only pass on personal data to external parties if this is necessary for the fulfillment of a contract, if we are legally obliged to do so (e.g. transfer of data to tax authorities), if we have a legitimate interest pursuant to Art. 6(1)(f) GDPR in the transfer, or if another legal basis permits the data transfer. When using processors, we only pass on personal data of our customers on the basis of a valid processing agreement. In the case of joint processing, a joint controller agreement is concluded.',

        s9Subtitle: 'Withdrawal of Your Consent to Data Processing',
        s9P: 'Many data processing operations are only possible with your explicit consent. You can revoke any consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.',

        s10Subtitle: 'Right to Object to Data Collection in Special Cases and to Direct Advertising (Art. 21 GDPR)',
        s10P1: 'IF THE PROCESSING OF YOUR PERSONAL DATA IS BASED ON ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME, ON GROUNDS RELATING TO YOUR PARTICULAR SITUATION, TO THE PROCESSING OF YOUR PERSONAL DATA; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21(1) GDPR).',
        s10P2: 'IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH ADVERTISING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).',

        s11Subtitle: 'Right to Lodge a Complaint with the Competent Supervisory Authority',
        s11P: 'In the event of a breach of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged infringement. The right to lodge a complaint is without prejudice to any other administrative or judicial remedies.',

        s12Subtitle: 'Right to Data Portability',
        s12P: 'You have the right to have data which we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done insofar as it is technically feasible.',

        s13Subtitle: 'Access, Rectification and Erasure',
        s13P: 'Within the framework of the applicable legal provisions, you have the right at any time to obtain information free of charge about your stored personal data, its origin and recipients and the purpose of the data processing, and, if applicable, a right to rectification or erasure of this data. You can contact us at any time regarding this or any other questions on the subject of personal data.',

        s14Subtitle: 'Right to Restriction of Processing',
        s14Intro: 'You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:',
        s14Li1: 'If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.',
        s14Li2: 'If the processing of your personal data was/is unlawful, you may request the restriction of data processing instead of deletion.',
        s14Li3: 'If we no longer need your personal data, but you need it for the exercise, defense or assertion of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.',
        s14Li4: 'If you have objected pursuant to Art. 21(1) GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.',
        s14Outro: 'If you have restricted the processing of your personal data, such data – apart from its storage – may only be processed with your consent or for the establishment, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.',

        s15Subtitle: 'Objection to Promotional Emails',
        s15P: 'The use of contact data published within the scope of the imprint obligation for the purpose of sending unsolicited advertising and information materials is hereby objected to. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam emails.',

        s16SourceLabel: 'Source:',
        s16SourceText: 'www.e-recht24.de'
    };

    public imprintDe = {
        title: 'Impressum',
        infoLine: 'Angaben gemäß § 5 TMG',

        addressName: 'Sebastian Peters',
        addressCareOf: 'c/o flexdienst – #11290',
        addressStreet: 'Kurt-Schumacher-Straße 76',
        addressCity: '67663 Kaiserslautern',
        addressCountry: 'Deutschland',

        representedByLabel: 'Vertreten durch:',
        representedByName: 'Sebastian Peters',

        contactLabel: 'Kontakt:',
        phoneLabel: 'Telefon:',
        phone: '0173-4540375',
        emailLabel: 'E-Mail:',
        emailText: 'data.devcontain[at]gmail.com',

        disclaimerLabel: 'Haftungsausschluss:',
        contentTitle: 'Haftung für Inhalte',
        contentText:
            'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',

        linksTitle: 'Haftung für Links',
        linksText:
            'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',

        copyrightTitle: 'Urheberrecht',
        copyrightText:
            'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',

        privacyTitle: 'Datenschutz',
        privacyText:
            'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.',

        footerPrefix: 'Impressum vom',
        generatorName: 'Impressum Generator',
        generatorUrl: 'https://www.impressum-generator.de',
        lawfirmName: 'Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht',
        lawfirmUrl: 'https://www.kanzlei-hasselbach.de/'
    };

    /** EN: Impressum (informative translation) */
    public imprintEn = {
        title: 'Imprint',
        infoLine: 'Information pursuant to § 5 TMG',

        addressName: 'Sebastian Peters',
        addressCareOf: 'c/o flexdienst – #11290',
        addressStreet: 'Kurt-Schumacher-Straße 76',
        addressCity: '67663 Kaiserslautern',
        addressCountry: 'Germany',

        representedByLabel: 'Represented by:',
        representedByName: 'Sebastian Peters',

        contactLabel: 'Contact:',
        phoneLabel: 'Phone:',
        phone: '0173-4540375',
        emailLabel: 'Email:',
        emailText: 'data.devcontain[at]gmail.com',

        disclaimerLabel: 'Disclaimer:',
        contentTitle: 'Liability for Content',
        contentText:
            'The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness and timeliness of the contents. As a service provider, we are responsible for our own content on these pages in accordance with § 7(1) TMG under general laws. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances indicating illegal activity. Obligations to remove or block the use of information under general laws remain unaffected. Liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of corresponding infringements, we will remove such content immediately.',

        linksTitle: 'Liability for Links',
        linksText:
            'Our offer contains links to external third-party websites, on whose contents we have no influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent content control of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.',

        copyrightTitle: 'Copyright',
        copyrightText:
            'The contents and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are permitted only for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected and third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of infringements, we will remove such content immediately.',

        privacyTitle: 'Data Protection',
        privacyText:
            'The use of our website is generally possible without providing personal data. Insofar as personal data (for example name, address or e-mail addresses) is collected on our pages, this is always done, as far as possible, on a voluntary basis. This data will not be passed on to third parties without your express consent. We point out that data transmission on the Internet (e.g. communication by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible. The use of contact data published within the scope of the imprint obligation by third parties for the purpose of sending unsolicited advertising and information material is hereby expressly contradicted. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam e-mails.',

        footerPrefix: 'Imprint from the',
        generatorName: 'Impressum Generator',
        generatorUrl: 'https://www.impressum-generator.de',
        lawfirmName: 'Kanzlei Hasselbach, Lawyers for Employment and Family Law',
        lawfirmUrl: 'https://www.kanzlei-hasselbach.de/'
    };

    get imprint(): any {
        return this.toggleValue === 'false' ? this.imprintEn : this.imprintDe;
    }

    get currentHeader(): any {
        return this.toggleValue === 'false' ? this.english : this.german;
    }

    get reevaluation(): any {
        return this.toggleValue === 'false' ? this.retxtenglish : this.retxtgerman;
    }

    get contact(): any {
        return this.toggleValue === 'false' ? this.contacttxtenglish : this.contacttxtgerman;
    }

    get join(): any {
        return this.toggleValue === 'false' ? this.joinenglish : this.joingerman;
    }

    get loco(): any {
        return this.toggleValue === 'false' ? this.locoenglish : this.locogerman;
    }

    get bubble(): any {
        return this.toggleValue === 'false' ? this.bubbleenglish : this.bubblegerman;
    }

    get legalNotice(): any {
        return this.toggleValue === 'false' ? this.legalNoticeEn : this.legalNoticeDe;
    }
}