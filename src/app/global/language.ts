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
}