const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	questions: [
		{
			question: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "question",
				required: true,
			},
			userAnswer: {
				type: String,
				required: true,
			},
			isCorrect: {
				type: Boolean,
				default: false,
			},
		},
	],
	score: {
		type: Number,
		default: 0,
	},
	completedAt: {
		type: Date,
		default: Date.now,
	},
});

quizSchema.methods.calculateScore = function () {
	this.score = this.questions.filter((q) => q.isCorrect).length;
	return this.score;
};

const QuizModel = mongoose.model("Quiz", quizSchema);
module.exports = QuizModel;
