const informationPanelContent = {

    fantasy: {

        eng: {
            panel1: {
                title: "The Art of the Spellkey",
                subtitle: "The secrets behind strong and secure Spellkeys:",
                
                firstCardTitle: "Common Weaknesses",
                firstTopicTitle: "Patterns Every Attacker Can Guess",
    
                firstTopicPoints: [
                    "❌ <strong>Simple passwords:</strong> Passwords like  <em>123456</em>, <em>password123</em> , or repeated characters are easy for attackers to guess.",
                    "❌ <strong>Personal information:</strong> Names, birthdays, pet names, or other details about you can make passwords easier to guess.",
                    "❌ <strong>Predictable substitutions:</strong> Small changes such as adding <em>123</em> or replacing letters with symbols may still follow predictable patterns."
                ],
    
                firstTopicExample: "🔓 academy2026, spellkey123",
    
                secondCardTitle: "Strong Protections",
                secondTopicTitle: "What Makes a Spellkey Strong?",
    
                secondTopicPoints: [
                    "✨ <strong>Make it long:</strong> Longer passwords are generally harder for attackers to guess (at least 12–16 characters).",
                    "✨ <strong>Make it unpredictable:</strong> Use unrelated words or ideas that attackers would not easily expect.",
                    "✨ <strong>No personal information:</strong> Do not build passwords from information that someone could discover about you."
                ],
    
                secondTopicExample: "🔐 phoenix-waterfall-compass-fox",
    
                mapping:
               `<strong>In the story:</strong> Shadow Mimics represent attackers who try predictable passwords.
                <p>A Spellkey represents a password. A unique Spellkey protects one account.</p>`
            },


            panel2: {
                title: "The Spellkey Keeper's Guide",
                subtitle: "What the apprentice learned about Spellkey reuse and the Book of Infinite Keys.",

                firstCardTitle: "The Danger of Reuse",
                firstTopicTitle: "One Spellkey, Many Vaults",

                firstTopicPoints: [
                    "⚠️ <strong>Never reuse important passwords:</strong>  Using the same password for several accounts means one stolen password could put multiple accounts at risk.",
                    "⚠️ <strong>One breach can spread the risk:</strong> A password's strength doesn't matter if attackers obtain your password from one account, they may try it on your other accounts.",
                    "✅ <strong>How to fix it?:</strong> A different password for every account keeps a single breach contained to that one account."
                ],

                firstTopicExample:
                    `🗝️ Same Spellkey →  📧 Email · ☁️ Cloud · 🏦 Banking`,

                secondCardTitle: "A Practical Solution",
                secondTopicTitle: "The Book of Infinite Keys: Don't Have to Remember Them All",

                secondTopicPoints: [
                    "🔑 <strong>Generate unique passwords:</strong>  A password manager can create strong, random passwords for your accounts.",
                    "🔑 <strong>Store them securely:</strong> You do not need to remember every password yourself.",
                    "🔑 <strong>Remember one master password:</strong> Only need to remember the password that protects your password manager."
                ],

                secondTopicExample:
                    "🔐 One Master Password → 🔑 Many Unique Passwords",

                mapping:
                    `<strong>In the story:</strong> The Spellkey represents a password, while each magical vault represents a different account. 

                    <p>The Book of Infinite Keys represents a password manager, and the Master Spell represents the master password.</p>`
            },
    
        },

        ger: {
            panel1: {
                title: "Die Kunst des Spellkeys",
                subtitle: "Die Geheimnisse hinter starken und sicheren Spellkeys:",

                firstCardTitle: "Häufige Schwachstellen",
                firstTopicTitle: "Muster, die Angreifer leicht erraten können",

                firstTopicPoints: [
                    "❌ <strong>Einfache Passwörter:</strong> Passwörter wie <em>123456</em>, <em>password123</em> oder wiederholte Zeichen sind für Angreifer leicht zu erraten.",
                    "❌ <strong>Persönliche Informationen:</strong> Namen, Geburtstage, Namen von Haustieren oder andere persönliche Informationen können Passwörter leichter erratbar machen.",
                    "❌ <strong>Vorhersehbare Ersetzungen:</strong> Kleine Änderungen wie das Hinzufügen von <em>123</em> oder das Ersetzen von Buchstaben durch Symbole können weiterhin vorhersehbaren Mustern folgen."
                ],

                firstTopicExample: "🔓 academy2026, spellkey123",

                secondCardTitle: "Starke Schutzmaßnahmen",
                secondTopicTitle: "Was macht einen Spellkey stark?",

                secondTopicPoints: [
                    "✨ <strong>Mach ihn lang:</strong> Längere Passwörter sind für Angreifer im Allgemeinen schwieriger zu erraten (mindestens 12–16 Zeichen).",
                    "✨ <strong>Mach ihn unvorhersehbar:</strong> Verwende voneinander unabhängige Wörter oder Ideen, die Angreifer nicht leicht erwarten würden.",
                    "✨ <strong>Keine persönlichen Informationen:</strong> Verwende keine Informationen für dein Passwort, die andere über dich herausfinden könnten."
                ],

                secondTopicExample: "🔐 phoenix-waterfall-compass-fox",

                mapping:
                    `<strong>In der Geschichte:</strong> Schatten-Mimics stellen Angreifer dar, die versuchen, vorhersehbare Passwörter zu erraten.
                    <p>Ein Spellkey steht für ein Passwort. Ein einzigartiger Spellkey schützt ein Konto.</p>`
            },
            panel2: {
                title: "Der Leitfaden des Spellkey-Hüters",
                subtitle: "Was der Lehrling über die Wiederverwendung von Spellkeys und das Buch der unendlichen Schlüssel gelernt hat.",

                firstCardTitle: "Die Gefahr der Wiederverwendung",
                firstTopicTitle: "Ein Spellkey, viele Tresore",

                firstTopicPoints: [
                    "⚠️ <strong>Wichtige Passwörter niemals wiederverwenden:</strong> Wenn dasselbe Passwort für mehrere Konten verwendet wird, kann ein gestohlenes Passwort mehrere Konten gefährden.",
                    "⚠️ <strong>Ein Datenleck kann ein Risiko für viele Konten darstellen: </strong> Die Stärke eines Passworts spielt keine Rolle mehr, wenn Angreifer es von einem Konto erhalten. Sie können versuchen, dasselbe Passwort auch für andere Konten zu verwenden.",
                    "✅ <strong>So kannst du das verhindern:</strong> Ein anderes Passwort für jedes Konto sorgt dafür, dass ein einzelner Angriff auf dieses eine Konto begrenzt bleibt."
                ],

                firstTopicExample:
                    "🗝️ Derselbe Spellkey → 📧 E-Mail · ☁️ Cloud · 🏦 Bank",

                secondCardTitle: "Eine praktische Lösung",
                secondTopicTitle: "Das Buch der unendlichen Schlüssel: Du musst dir nicht alle merken",

                secondTopicPoints: [
                    "🔑 <strong>Einzigartige Passwörter generieren:</strong> Ein Passwortmanager kann starke und zufällige Passwörter für deine Konten erstellen.",
                    "🔑 <strong>Sicher speichern:</strong> Du musst dir nicht jedes Passwort selbst merken.",
                    "🔑 <strong>Ein Master-Passwort merken:</strong> Du musst dir nur das Passwort merken, das deinen Passwortmanager schützt."
                ],

                secondTopicExample:
                    "🔐 Ein Master-Passwort → 🔑 Viele einzigartige Passwörter",

                mapping:
                    `<strong>In der Geschichte:</strong> Der Spellkey steht für ein Passwort, während jeder magische Tresor für ein anderes Konto steht.
                    <p>Das Buch der unendlichen Schlüssel steht für einen Passwortmanager und der Master Spell für das Master-Passwort.</p>`
            }
        }  
    },


    real: {
        eng: {
            panel1: {
                title: "Building Strong Passwords",
                subtitle: "What Alex learned about creating passwords that are difficult for attackers to guess.",
    
                firstCardTitle: "Common Weaknesses",
                firstTopicTitle: "Passwords Attackers Can Guess",
    
                firstTopicPoints: [
                    "❌ <strong>Simple passwords:</strong> Passwords like  <em>123456</em>, <em>password123</em> , or repeated characters are easy for attackers to guess.",
                    "❌ <strong>Personal information:</strong> Names, birthdays, pet names, or other details about you can make passwords easier to guess.",
                    "❌ <strong>Predictable substitutions:</strong> Small changes such as adding <em>123</em> or replacing letters with symbols may still follow predictable patterns."
                ],
    
                firstTopicExample: "🔓 security2026",
    
                secondCardTitle: "Strong Protections",
                secondTopicTitle: "What Makes a Password Strong?",
    
                secondTopicPoints: [
                    "✨ <strong>Make it long:</strong> Longer passwords are generally harder for attackers to guess (at least 12–16 characters).",
                    "✨ <strong>Make it unpredictable:</strong> Use unrelated words or ideas that attackers would not easily expect.",
                    "✨ <strong>No personal information:</strong> Do not build passwords from information that someone could discover about you."
                ],
    
                secondTopicExample: "🔐 security-wall-waterfall-7&8f2*",
                mapping: "",
    
            },
    
    
            panel2: {
                title: "Protecting Multiple Accounts",
                subtitle: "What Alex learned about password reuse and using a password manager.",
    

                firstCardTitle: "The Danger of Reuse",
                firstTopicTitle: "One Password, Many Accounts",
    
                firstTopicPoints: [
                    "⚠️ <strong>Do not reuse passwords:</strong>  Using the same password for several accounts means one stolen password could put multiple accounts at risk.",
                    "⚠️ <strong>A stolen password can put several accounts at risk:</strong> Even a strong password cannot protect you if it is stolen and used for several accounts. Attackers may try the stolen password on your other accounts.",
                    "✅ <strong>Use a different password for every account:</strong> A different password for every account keeps a single breach contained to that one account."
                ],
    
                firstTopicExample:
                    "🔓 Same Password → 📧 Email · ☁️ Cloud · 🏦 Banking",
    
                secondCardTitle: "A Practical Solution",
                secondTopicTitle: "Password Managers",
    
                secondTopicPoints: [
                    "🔑 <strong>Generate unique passwords:</strong>  A password manager can create strong, random passwords for your accounts.",
                    "🔐 <strong>Store passwords securely:</strong> You do not need to remember every password yourself.",
                    "🗝️ <strong>Remember one master password:</strong> Only need to remember the password that protects your password manager."
                ],
    
                secondTopicExample:
                    "🔐 One Master Password → 🔑 Many Unique Passwords",
                mapping: "",
            }
        },

        ger: {
            panel1: {
                title: "Starke Passwörter erstellen",
                subtitle: "Was Alex über die Erstellung von Passwörtern gelernt hat, die für Angreifer schwer zu erraten sind.",

                firstTopicTitle: "Passwörter, die Angreifer erraten können",

                firstTopicPoints: [
                    "❌ <strong>Einfache Passwörter:</strong> Passwörter wie <em>123456</em>, <em>password123</em> oder wiederholte Zeichen sind für Angreifer leicht zu erraten.",
                    "❌ <strong>Persönliche Informationen:</strong> Namen, Geburtstage, Namen von Haustieren oder andere persönliche Informationen können Passwörter leichter erratbar machen.",
                    "❌ <strong>Vorhersehbare Ersetzungen:</strong> Kleine Änderungen wie das Hinzufügen von <em>123</em> oder das Ersetzen von Buchstaben durch Symbole können weiterhin vorhersehbaren Mustern folgen."
                ],

                firstCardTitle: "Häufige Schwachstellen",
                firstTopicExample: "🔓 security2026",

                secondCardTitle: "Starke Schutzmaßnahmen",
                secondTopicTitle: "Was macht ein Passwort stark?",

                secondTopicPoints: [
                    "✨ <strong>Mach es lang:</strong> Längere Passwörter sind für Angreifer im Allgemeinen schwieriger zu erraten (mindestens 12–16 Zeichen).",
                    "✨ <strong>Mach es unvorhersehbar:</strong> Verwende voneinander unabhängige Wörter oder Ideen, die Angreifer nicht leicht erwarten würden.",
                    "✨ <strong>Keine persönlichen Informationen:</strong> Verwende keine Informationen für dein Passwort, die andere über dich herausfinden könnten."
                ],

                secondTopicExample: "🔐 security-wall-waterfall-7&8f2*",

                mapping: ""
            },

            panel2: {
                title: "Mehrere Konten schützen",
                subtitle: "Was Alex über die Wiederverwendung von Passwörtern und die Verwendung eines Passwortmanagers gelernt hat.",

                firstCardTitle: "Die Gefahr der Wiederverwendung",
                firstTopicTitle: "Ein Passwort, viele Konten",

                firstTopicPoints: [
                    "⚠️ <strong>Passwörter nicht wiederverwenden:</strong> Wenn dasselbe Passwort für mehrere Konten verwendet wird, kann ein gestohlenes Passwort mehrere Konten gefährden.",
                    "⚠️ <strong> Ein gestohlenes Passwort kann mehrere Konten gefährden: </strong> Auch ein starkes Passwort schützt nicht, wenn es gestohlen und für mehrere Konten verwendet wird. Angreifer können das gestohlene Passwort bei anderen Konten ausprobieren.",
                    "✅ <strong>Für jedes Konto ein anderes Passwort verwenden:</strong> Ein individuelles Passwort für jedes Konto begrenzt das Risiko eines einzelnen Datenlecks auf dieses eine Konto."
                ],

                firstTopicExample:
                    "🔓 Dasselbe Passwort → 📧 E-Mail · ☁️ Cloud · 🏦 Bank",

                secondCardTitle: "Eine praktische Lösung",
                secondTopicTitle: "Passwortmanager",

                secondTopicPoints: [
                    "🔑 <strong>Einzigartige Passwörter generieren:</strong> Ein Passwortmanager kann starke und zufällige Passwörter für deine Konten erstellen.",
                    "🔐 <strong>Passwörter sicher speichern:</strong> Du musst dir nicht jedes Passwort selbst merken.",
                    "🗝️ <strong>Ein Master-Passwort merken:</strong> Du musst dir nur das Passwort merken, das deinen Passwortmanager schützt."
                ],

                secondTopicExample:
                    "🔐 Ein Master-Passwort → 🔑 Viele einzigartige Passwörter",

                mapping: ""
            }
        }
    }
};



function renderInformationPanel(panelNumber, narrativeType, language) {

    const content =
        informationPanelContent[narrativeType]?.[language]?.[`panel${panelNumber}`];

    if (!content) {
        console.error("No content found for:", narrativeType, panelNumber, language,);
        return;
    }
    // Select the correct information scene

    const sceneId =
        panelNumber === 1
            ? "scene-information"
            : "scene-information2";

    const scene = document.getElementById(sceneId);

    if (!scene) {
        console.error("Scene not found:", sceneId);
        return;
    }

    // Header
    scene.querySelector(".dashboard-header h2").textContent =
        content.title;

    scene.querySelector(".dashboard-header p").textContent =
        content.subtitle;

    const firstCardTitle =
        scene.querySelector(`#panel${panelNumber}-first-card-title`);
    
    const secondCardTitle =
        scene.querySelector(`#panel${panelNumber}-second-card-title`);

    if (firstCardTitle) {
        firstCardTitle.textContent =
            content.firstCardTitle;
    }

    if (secondCardTitle) {
        secondCardTitle.textContent =
            content.secondCardTitle;
    }

        
    const firstCardClass =
        panelNumber === 1
            ? ".vulnerable"
            : ".reuse";

    const secondCardClass =
        panelNumber === 1
            ? ".secure"
            : ".keeper";

    // FIRST CARD
    const firstCard = scene.querySelector(firstCardClass);

    if (!firstCard) {
        console.error("First card not found:", firstCardClass);
        return;
    }

    firstCard.querySelector(".card-title").innerHTML = `

        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.6">

            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>

            <path d="M9 9l6 6M15 9l-6 6"/>

        </svg>

        ${content.firstTopicTitle}
    `;


    firstCard.querySelector("ul").innerHTML =
        content.firstTopicPoints
            .map(point => `<li>${point}</li>`)
            .join("");


    firstCard.querySelector(".card-example").innerHTML =
        content.firstTopicExample;


    // SECOND CARD
    const secondCard = scene.querySelector(secondCardClass);

    if (!secondCard) {
        console.error("Second card not found:", secondCardClass);
        return;
    }


    secondCard.querySelector(".card-title").innerHTML = `

        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.6">

            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7.5-4.5-7.5-9V6l7.5-3z"/>

            <path d="M9 12l2 2 4-4"/>

        </svg>

        ${content.secondTopicTitle}
    `;


    secondCard.querySelector("ul").innerHTML =
        content.secondTopicPoints
            .map(point => `<li>${point}</li>`)
            .join("");


    secondCard.querySelector(".card-example").innerHTML =
        content.secondTopicExample;

    const mapping = scene.querySelector(".ward-arcane");

    if (mapping) {

        if (narrativeType === "fantasy" && content.mapping) {
            mapping.innerHTML = content.mapping;
            mapping.style.display = "block";
        } else {
            mapping.innerHTML = "";
            mapping.style.display = "none";
        }

    }

}

function createInformationPanelScene1() {
    return `
        <div class="wrap">
            <div class="dashboard-header">
                <div class="rune-mark">✦</div>
                <h2 id="panel1-title"></h2>
                <p id="panel1-subtitle"></p>
            </div>

            <div class="dashboard-container">
                <div id="panel1-mapping"
                     class="card-example ward-arcane">
                </div>
                <div class="dashboard-grid">

                    <article class="info-card vulnerable">
                         <span class="card-eyebrow" id="panel1-first-card-title"></span>

                        <div class="card-title">
                            <svg viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.6">
                                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>
                                <path d="M9 9l6 6M15 9l-6 6"/>
                            </svg>

                            <span id="panel1-weakness-title"></span>
                        </div>

                        <ul id="panel1-weakness-points"></ul>

                        <div id="panel1-weak-example"
                             class="card-example ward-bad">
                        </div>
                    </article>


                    <article class="info-card secure">
                       <span class="card-eyebrow" id="panel1-second-card-title"></span>

                        <div class="card-title">
                            <svg viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.6">
                                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>
                                <path d="M9 12l2 2 4-4"/>
                            </svg>

                            <span id="panel1-strong-title"></span>
                        </div>

                        <ul id="panel1-strong-points"></ul>

                        <div id="panel1-strong-example"
                             class="card-example ward-good">
                        </div>
                    </article>

                </div>

            </div>
        </div>
    `;
}

function createInformationPanelScene2() {
    return `
        <div class="wrap">
            <div class="dashboard-header">
                <div class="rune-mark">✦</div>
                <h2 id="panel2-title"></h2>
                <p id="panel2-subtitle"></p>
            </div>

            <div class="dashboard-container">
                    <div id="panel2-mapping"
                        class="card-example ward-arcane">
                    </div>
                <div class="dashboard-grid">

                    <!-- The hidden risk -->
                    <article class="info-card reuse">
                         <span class="card-eyebrow" id="panel2-first-card-title"></span>

                        <div class="card-title">
                            <svg viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.6">
                                <circle cx="12" cy="8" r="3"/>
                                <path d="M12 11v6M9 15l3 2 3-2"/>
                                <path d="M5 20l14-14" stroke-dasharray="2 2"/>
                            </svg>

                            <span id="panel2-reuse-title"></span>
                        </div>

                        <ul id="panel2-reuse-points"></ul>

                        <div id="panel2-reuse-example"
                             class="card-example ward-warn">
                        </div>
                    </article>


                    <!-- The practical solution -->
                    <article class="info-card keeper">
                        <span class="card-eyebrow" id="panel2-second-card-title"></span>

                        <div class="card-title">
                            <svg viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.6">
                                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16z"/>
                                <path d="M20 3v16"/>
                            </svg>

                            <span id="panel2-manager-title"></span>
                        </div>

                        <ul id="panel2-manager-points"></ul>

                        <div id="panel2-manager-example"
                             class="card-example ward-good">
                        </div>
                    </article>

                </div>

            </div>
        </div>
    `;
}


document.addEventListener("DOMContentLoaded", () => {

    const panel1Container =
        document.getElementById("information-panel-1-content");

    const panel2Container =
        document.getElementById("information-panel-2-content");


    if (panel1Container) {
        panel1Container.innerHTML = createInformationPanelScene1();
    }

    if (panel2Container) {
        panel2Container.innerHTML = createInformationPanelScene2();
    }

});