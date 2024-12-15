import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Singleton-Service
})

export class Language {

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
        aboutc: 'Hi, I`m german speaking Frontend Developer based in Hannover, Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.',
        aboutd: 'Flexible in terms of working environments, I can work effectivley both on-site remotely.',
        aboute: 'I am open-minded and always looking for personal challanges to constantly improve my knowledge and skills.',
        aboutf: 'In my profession, programming isn&amp;t just about writing code&amp; its&amp;#39;s creatve form of problem-solving. I take pride in my ability to distill complex technical challanges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.',
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
        descriptcard: 'Task manager inspired by the Kanba System. Create and organize tasks using drag and drop functions, assign users and categories.',
        testbtncard: 'Life test',
        nextbtncard: 'Next project',
        headerrevaluation: 'What my colleagues say about me'
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
        aboutc: 'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Hannover, motiviert durch die grenzenlosen Möglichkeiten in der IT, begeistere ich mich für die Gestaltung von visuell ansprechenden und intuitiven Webseiten und Anwendungen.',
        aboutd: 'Ich bin flexibel, was die Arbeitsumgebung angeht, und kann sowohl vor Ort als auch aus der Ferne effektiv arbeiten.',
        aboute: 'Ich bin aufgeschlossen und immer auf der Suche nach persönlichen Herausforderungen, um meine Kenntnisse und Fähigkeiten Fähigkeiten.',
        aboutf: 'In meinem Beruf geht es beim Programmieren nicht nur um das Code zu schreiben; es ist eine kreative Form des Problemlösens. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',
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
        descriptcard: 'Aufgabenmanager nach dem Vorbild des Kanba-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
        testbtncard: 'Testen',
        nextbtncard: 'Nächstes Projekt',
        headerrevaluation: 'Was meine Kollegen über mich sagen'
    };

    public retxtenglish = [
        { text: "Lorem ipsum Quallenfischen", name: "Maximilian Knabe" },
        { text: "Lorem ipsum Brett form Kopf", name: "Wurzel Wurzeler von Wurzelsen" },
        { text: "Lorem ipsum Moneten", name: "Chram Schon Schingschen" },
        { text: "Lorem ipsum Stein", name: "Patrick Star" },
        { text: "Lorem ipsum Eintopf", name: "Yellow Dragon" },
        { text: "Lorem Knallerbsen", name: "Lira Larum Löffel" }
    ];

    public retxtgerman = [
        { text: "Lorem ipsum Quallenfischen", name: "Maximilian Knabe" },
        { text: "Lorem ipsum Brett form Kopf", name: "Wurzel Wurzeler von Wurzelsen" },
        { text: "Lorem ipsum Moneten", name: "Chram Schon Schingschen" },
        { text: "Lorem ipsum Stein", name: "Patrick Star" },
        { text: "Lorem ipsum Eintopf", name: "Yellow Dragon" },
        { text: "Lorem Knallerbsen", name: "Lira Larum Löffel" }
    ];

    public toggleValue: string = 'false';

    get currentHeader(): any {
        return this.toggleValue === 'false' ? this.english : this.german;
    }

    get currentReevaluation(): any {
        return this.toggleValue === 'false' ? this.retxtenglish : this.retxtgerman;
    }
}