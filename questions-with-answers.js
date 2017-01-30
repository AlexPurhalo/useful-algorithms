var questions = [
	{ id: 1, body: 'Bad game 2016?' },
	{ id: 2, body: 'Cartoon about yellow man?' },
	{ id: 3, body: 'Center of Ukraine...' },
	{ id: 4, body: 'Fashion is my...' },
	{ id: 5, body: 'The most important thing in world?' }
];

var answers = [
	{ id: 1, body: 'profession', questionId: 4 },
	{ id: 3, body: 'Mafia 3', questionId: 1 },
	{ id: 7, body: 'Spanch Bob', questionId: 2 }
]

var resultArr = [];
var currentAnswer = null;

for (var i = 0; i < questions.length; i++) {
	for (var j = 0; j < answers.length; j++) {
		if (questions[i].id == answers[j].questionId) {
			currentAnswer = answers[j].body;
		}
	}

	console.log(currentAnswer);
	resultArr.push({
		id: questions[i].id,
		question: questions[i].body,
		answer: currentAnswer
	});

	currentAnswer = null
}

console.log(resultArr);

// [
// 	{ questionId: 1, question: 'Bad game 2016?', answer: 'Mafia 3' },
//  ...
//	{ questionId: 3, question: 'Center of Ukraine', answer: null },
//  ...
// ]
