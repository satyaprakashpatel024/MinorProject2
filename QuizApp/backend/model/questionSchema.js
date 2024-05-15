const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
    // Optional question ID for internal reference
	id: { 
        type: String, 
        required: true 
    }, 
	question: { 
        type: String, 
        required: true 
    }, // The actual question text
	options: {
		type: [String],
		required: true,
	}, // Array of answer options
	answer: { 
        type: String, 
        required: true
    }, // The correct answer
});

const QuestionModel = mongoose.model("question", questionSchema);
module.exports = QuestionModel;
