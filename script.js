let currentGame = '';
let currentQuestion = 0;

const gameData = {
    'comparative-adjectives': [
        { question: 'My car is (fast) _____ than yours.', answer: 'faster' },
        Here's the list with a mix of 10 comparatives and 10 superlatives:
        { question: 'My car is the (fast) _____ in the neighborhood.', answer: 'fastest' },
        { question: 'This book is (interesting) _____ than the one I read last week.', answer: 'more interesting' },
        { question: 'The weather today is the (bad) _____ it has been all month.', answer: 'worst' },
        { question: 'My new job is (challenging) _____ than my previous one.', answer: 'more challenging' },
        { question: 'The hike was the (difficult) _____ one we've ever done.', answer: 'most difficult' },
        { question: 'Your handwriting is (neat) _____ than mine.', answer: 'neater' },
        { question: 'The movie was the (entertaining) _____ one I've seen this year.', answer: 'most entertaining' },
        { question: 'My sister is the (tall) _____ person in our family.', answer: 'tallest' },
        { question: 'This restaurant is (expensive) _____ than the one we usually go to.', answer: 'more expensive' },
        { question: 'The math test was the (hard) _____ one we've had so far.', answer: 'hardest' },
        { question: 'My new phone is the (advanced) _____ model on the market.', answer: 'most advanced' },
        { question: 'The traffic today is (heavy) _____ than usual.', answer: 'heavier' },
        { question: 'Her singing voice is the (beautiful) _____ I've ever heard.', answer: 'most beautiful' },
        { question: 'The second half of the game was (exciting) _____ than the first.', answer: 'more exciting' },
        { question: 'This puzzle is the (challenging) _____ one in the book.', answer: 'most challenging' },
        { question: 'My new apartment is (spacious) _____ than my old one.', answer: 'more spacious' },
        { question: 'The plot of this novel is the (complex) _____ one I've ever read.', answer: 'most complex' },
        { question: 'The conference was (informative) _____ than the workshop.', answer: 'more informative' },
        { question: 'My new boss is the (supportive) _____ manager I've ever had.', answer: 'most supportive' },
        { question: 'The view from the top of the mountain was the (impressive) _____ sight I've ever seen.', answer: 'most impressive' }
      ]
    ],
    'conditionals': [
        { question: 'If it (rain) _____, I\'ll take an umbrella.', answer: 'rains' },
        { question: 'If it rains, I (take) _____ an umbrella.', answer: 'will take' },
        { question: 'If you (heat) _____ water to 100°C, it boils.', answer: 'heat' },
        { question: 'If I have enough money, I (buy) _____ a new car.', answer: 'will buy' },
        { question: 'If you (mix) _____ red and blue, you get purple.', answer: 'mix' },
        { question: 'If she studies hard, she (pass) _____ the exam.', answer: 'will pass' },
        { question: 'If you (freeze) _____ water, it turns into ice.', answer: 'freeze' },
        { question: 'If they offer me the job, I (accept) _____ it.', answer: 'will accept' },
        { question: 'If you (press) _____ the button, the machine starts working.', answer: 'press' },
        { question: 'If we leave now, we (arrive) _____ on time.', answer: 'will arrive' },
        { question: 'If you (multiply) _____ two negative numbers, the result is always positive.', answer: 'multiply' },
        { question: 'If I see him, I (tell) _____ him about the party.', answer: 'will tell' },
        { question: 'If you (add) _____ salt to water, it becomes saltwater.', answer: 'add' },
        { question: 'If she comes to the party, I (be) _____ surprised.', answer: 'will be' },
        { question: 'If you (divide) _____ any number by zero, it is undefined.', answer: 'divide' },
        { question: 'If they win the game, they (celebrate) _____.', answer: 'will celebrate' },
        { question: 'If you (mix) _____ yellow and blue, you get green.', answer: 'mix' },
        { question: 'If I have time, I (help) _____ you with your homework.', answer: 'will help' },
        { question: 'If you (heat) _____ ice, it melts.', answer: 'heat' },
        { question: 'If she calls, I (let) _____ you know.', answer: 'will let' },
        { question: 'If you (subtract) _____ a larger number from a smaller one, the result is negative.', answer: 'subtract' }
      ].
    ],
    'mixed-tense-questions': [
      { question: 'I (never/be) _____ to Japan, but I hope to visit someday.', answer: 'have never been' },
      { question: 'She (finish) _____ her homework before dinner last night.', answer: 'finished' },
      { question: 'They (recently/move) _____ to a new house in a different city.', answer: 'have recently moved' },
      { question: 'We (not/see) _____ each other since the high school reunion.', answer: 'have not seen' },
      { question: 'He (arrive) _____ at the airport just in time for his flight.', answer: 'arrived' },
      { question: 'I (always/want) _____ to learn how to play the guitar.', answer: 'have always wanted' },
      { question: 'They (try) _____ sushi for the first time at the new restaurant.', answer: 'tried' },
      { question: 'She (already/watch) _____ that movie several times.', answer: 'has already watched' },
      { question: 'We (visit) _____ our grandparents last weekend.', answer: 'visited' },
      { question: 'He (recently/start) _____ a new job in the tech industry.', answer: 'has recently started' },
      { question: 'I (always/enjoy) _____ reading mystery novels in my free time.', answer: 'have always enjoyed' },
      { question: 'They (go) _____ to a concert together last month.', answer: 'went' },
      { question: 'She (just/complete) _____ her university degree in engineering.', answer: 'has just completed' },
      { question: 'We (not/travel) _____ abroad since the pandemic began.', answer: 'have not traveled' },
      { question: 'He (take up) _____ photography as a hobby recently.', answer: 'has taken up' },
      { question: 'I (admire) _____ her courage and determination during the speech.', answer: 'admired' },
      { question: 'They (never/eat) _____ Thai food before tonight.', answer: 'have never eaten' },
      { question: 'She (read) _____ the first book in the series last week.', answer: 'read' },
      { question: 'We (not/have) _____ a family vacation in a long time.', answer: 'have not had' },
      { question: 'He (learn) _____ how to swim when he was a child.', answer: 'learned' }
    ]
    };

const rulesData = {
    'comparative-adjectives': `
        <h3>Rules for Comparative and Superlative Adjectives</h3>
        <ul>
            <li>For one-syllable adjectives, add "-er" for comparative and "-est" for superlative.</li>
            <li>For two-syllable adjectives ending in "-y," replace "-y" with "-ier" for comparative and "-iest" for superlative.</li>
            <li>For adjectives with two or more syllables, use "more" for comparative and "most" for superlative.</li>
            <li>Some adjectives have irregular comparative and superlative forms (e.g., good - better - best).</li>
        </ul>
    `,
    'conditionals': `
        <h3>Rules for Zero and First Conditional Sentences</h3>
        <ul>
            <li>Zero Conditional: Used for general truths or scientific facts. Structure: If + present simple, present simple.</li>
            <li>First Conditional: Used for possible situations in the future. Structure: If + present simple, will + base form.</li>
        </ul>
    `,
    'present-perfect': `
        <h3>Rules for the Present Perfect Tense</h3>
        <ul>
            <li>Form: Subject + have/has + past participle.</li>
            <li>Used for actions that started in the past and continue to the present or have an effect on the present.</li>
            <li>Used for experiences or changes that have happened at an unspecified time before now.</li>
            <li>Often used with time expressions such as "never," "ever," "already," "yet," "just," "so far," "recently," etc.</li>
        </ul>
    `
};

function startGame(game) {
    currentGame = game;
    currentQuestion = 0;
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('game-title').textContent = game.replace(/-/g, ' ').toUpperCase();
    showQuestion();
}

function showQuestion() {
    const question = gameData[currentGame][currentQuestion];
    document.getElementById('progress').textContent = `Question ${currentQuestion + 1} of 20`;
    document.getElementById('question').textContent = question.question;
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    const correctAnswer = gameData[currentGame][currentQuestion].answer;
    const feedbackElement = document.getElementById('feedback');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.className = 'correct';
    } else {
        feedbackElement.textContent = `Oops! The correct answer is "${correctAnswer}".`;
        feedbackElement.className = 'incorrect';
    }

    feedbackElement.style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < gameData[currentGame].length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'block';
    currentGame = '';
    currentQuestion = 0;
}

function goToIntro() {
    endGame();
}

function openRules() {
    document.getElementById('rules-content').innerHTML = rulesData[currentGame];
    document.getElementById('rules-popup').style.display = 'block';
}

function closeRules() {
    document.getElementById('rules-popup').style.display = 'none';
}
