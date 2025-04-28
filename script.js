// Flashcard functionality
const flashcards = [
    { word: "Hallo.(HAH-loh)", translation: "Hello." },
    { word: "Danke!(DAHN-kuh)", translation: "Thank you" },
    { word: "Bitte!(BIT-tuh)", translation: "Please/You're Welcome" },
    { word: "Guten Morgen(GOO-ten MOR-gen)", translation: "Good morning" },
	{ word: "Guten Tag(GOO-ten TAHK)", translation: "Good day" },
	{ word: "Guten Abend(GOO-ten AH-bent)", translation: "Good Evening" },
	{ word: "Gute Nacht(GOO-t Na-kht)", translation: "Good night" },
	{ word: "Auf Wiedersehen(OWF VEE-der-zay-en)", translation: "Goodbye" },
	{ word: "Tschüss(CHOOS)", translation: "Bye(informal)" },
    { word: "Entschuldigung!(ENT-SHUL-dee-goong)", translation: "Excuse Me!/Sorry!" },
    { word: "Kein Problem!(KYN PROH-blehm)", translation: "No Problem!" },
	{ word: "Gern geschehen!(GAIRN guh-SHAY-en)", translation: "You're Welcome" },
	{ word: "Ja.(YAH)", translation: "Yes." },
	{ word: "Nein.(NINE)", translation: "No." },
	{ word: "Ich weiß nicht.(EEH VICE NIKHT)", translation: "I don’t know." },
	{ word: "Ich verstehe.(EEH fair-SHTAY-eh)", translation: "I understand." },
	{ word: "Ich verstehe nicht.(EEH fair-SHTAY-eh nikht)", translation: "I don’t understand." },
    { word: "Wie geht es dir?(VEE gayt es deer?)", translation: "How are you? (informal)" },
	{ word: "Ich heiße Devendraa.(EEH hye-suh Devendraa)", translation: "My name is Devendraa." },
	{ word: "Ich komme aus Deutschland.(EEH KOM-uh owss DOY-ch-lahnd)", translation: "I come from Germany." },
	{ word: "Ich bin Devendraa.(EEH bin Devendraa)", translation: "I am Devendraa." },
	{ word: "Ich wohne in Deutschland.(EEH VOH-nuh in DOY-ch-lahnd)", translation: "I live in Germany." },
	{ word: "Ich spreche ein bisschen Deutsch.(EEH SHPREH-khuh ayn BIS-khen DOY-ch)", translation: "I speak a little German." },
    { word: "Ich lerne Deutsch.(EEH LAIR-nuh DOY-ch)", translation: "I am learning German." },
	{ word: "Wie heißt du?(VEE hyssst doo?)", translation: "What's your name? (informal)" },
	{ word: "Woher kommst du?(VOH-hair komst doo?)", translation: "Where are your from? (informal)" },
	{ word: "Wo wohnst du? (VOH vohnst doo?)", translation: "Where do you live? (Informal)" },
	{ word: "Welche Sprache sprichst du? (VELL-khuh SHPRAH-khuh SHPRIHKHST doo?)", translation: "Which language do you speak?" },
	{ word: "Ich heiße Anna. (EEH hye-suh AHN-nah)", translation: "My Name is Anna." },
	{ word: "Ich komme aus Indien. (EEH KOM-uh owss IN-dee-uhn)", translation: "I come from India." },		
	{ word: "Ich wohne in München. (EEH VOH-nuh in MUEN-khen)", translation: "I live in Munich." },
	{ word: "Ich spreche Englisch. (EEH SHPREH-khuh EN-glish)", translation: "I speak English." },
	{ word: "Eins (AYNSS)", translation: "One" },	
	{ word: "Zwei (TSVAY)", translation: "Two" },	
	{ word: "Drei (DRY)",   translation: "Three" },	
	{ word: "Vier (FEAR)",    translation: "Four" },		
	{ word: "Fünf (FUENF)",  translation: "Five " },	
	{ word: "Sechs (ZEHKS)",   translation: "Six" },	
	{ word: "Sieben (ZEE-ben)", translation: "Seven" },	
	{ word: "Acht (AHKT)", translation: "Eight" },	
	{ word: "Neun (NOYN)", translation: "Nine" },	
	{ word: "Zehn (TSEHN)", translation: "Ten" }
];

let currentFlashcard = 0;

function nextFlashcard() {
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    document.getElementById("flashcard-word").textContent = flashcards[currentFlashcard].word;
    document.getElementById("flashcard-translation").textContent = flashcards[currentFlashcard].translation;
}

// Audio playback (placeholder)
function playAudio(file) {
    const audio = new Audio(file);
    audio.play().catch(() => alert("Audio file not found. Please add audio files."));
}

// Progress tracker
function updateProgress() {
    const lessonsCompleted = localStorage.getItem("lessonsCompleted") || 0;
    const quizScore = localStorage.getItem("quizScore") || 0;
    document.getElementById("lessons-completed").textContent = lessonsCompleted;
    document.getElementById("quiz-score").textContent = `${quizScore}%`;
}

function resetProgress() {
    localStorage.setItem("lessonsCompleted", 0);
    localStorage.setItem("quizScore", 0);
    updateProgress();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    updateProgress();
});