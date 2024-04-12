
const quizResults = {
    Neuroticism: 30,
    Agreeableness: 10,
    Openness: 20,
    Extraversion: 80,
    Conscientiousness: 60,
};

function updateColorBasedBars() {
	const bar1 = document.querySelector(".Neuroticism colored-portion1");
	bar1.style.width=quizResults[Neuroticism];
	const bar2 = document.querySelector(".Neuroticism colored-portion1");
	bar2.style.width=quizResults[Agreableness];
	const bar3 = document.querySelector(".Neuroticism colored-portion1");
	bar3.style.width=quizResults[Openness];
	const bar4 = document.querySelector(".Neuroticism colored-portion1");
	bar4.style.width=quizResults[Extraversion];
	const bar5 = document.querySelector(".Neuroticism colored-portion1");
	console.log(quizResults[Conscientiousnes]);
	bar5.style.width=quizResults[Conscientiousnes];

    /*for (const aspect in quizResults) {
        const bar = document.querySelector(`.${aspect}`);
        console.log(bar);
        const coloredPortion = bar.querySelector('.colored-portion');
        console.log(coloredPortion);
        const percentage = quizResults[aspect];
        console.log(percentage);
        coloredPortion.style.width = `${percentage}%`;
    }*/
}

// Call the function to update the bars (you can do this when the page loads)
updateColorBasedBars();
