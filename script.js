const lanaQuotes = [
    { text: "I will love you 'til the end of time.", song: "Blue Jeans" },
    { text: "Think I'll miss you forever, like the stars miss the sun in the morning sky.", song: "Summertime Sadness" },
    { text: "It's you, it's you, it's all for you, everything I do.", song: "Video Games" },
    { text: "Every time I close my eyes, it's like a dark paradise. No one compares to you.", song: "Dark Paradise" },
    { text: "I love you the first time, I love you the last time.", song: "Old Money" },
    { text: "Cause I'm your jazz singer, and you're my cult leader.", song: "Ultraviolence" },
    { text: "I love you forever, I love you forever.", song: "Black Bathing Suit" },
    { text: "But if you call for me you know I'll run, I'll run to you.", song: "Cherry" },
    { text: "If you stay, I'll stay.", song: "California" },
    { text: "I fall to pieces when I'm with you.", song: "Cherry" },
    { text: "Fuck it I love you.", song: "Fuck it I love you" },
    { text: "Cause you really are my living legend.", song: "Living Legend" },
    { text: "Heaven is a place on earth with you.", song: "Video Games" },
    { text: "You know that I'd just die to make you proud.", song: "Wildflower Wildfire" },
    { text: "All the pretty stars shine for you my love.", song: "Young and Beautiful" },
    { text: "Could it be that you and me are the lucky ones?", song: "The Lucky Ones" },
    { text: "Hold me, love me, touch me, honey, be the first who ever did.", song: "Religion" },
    { text: "He's my sun, he makes me shine like diamonds.", song: "Money Power Glory" },
    { text: "Only worth living if somebody is loving you, and, baby, now you do.", song: "Million Dollar Man" },
    { text: "But you fit me better than my favorite sweater.", song: "Blue Jeans" },
    { text: "But I love that man like nobody can.", song: "Mariners Apartment Complex" },
    { text: "I showed up for you, you showed up for me.", song: "Violets for Roses" },
    { text: "I need you, I breathe you, I'll never leave you.", song: "Pawn Shop Blues" },
    { text: "Cause I love to love, to love, to love you.", song: "Love" },
    { text: "Be my once in a lifetime.", song: "Love Song" },
    { text: "Your hands were on my hips, your name is on my lips.", song: "Tulsa Jesus Freak" }
];

const quoteDisplay = document.getElementById('quote');
const songDisplay = document.getElementById('song-title');
const btn = document.getElementById('new-quote-btn');

btn.addEventListener('click', () => {
    // Start fade out
    quoteDisplay.style.opacity = 0;
    songDisplay.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * lanaQuotes.length);
        const selected = lanaQuotes[randomIndex];
        
        quoteDisplay.innerText = `"${selected.text}"`;
        songDisplay.innerText = `— ${selected.song}`;
        
        // Fade back in
        quoteDisplay.style.opacity = 1;
        songDisplay.style.opacity = 1;
    }, 400);

});
