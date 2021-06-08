const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup    : { type     : String,
                 required : [true,"Debe ingresar campo Setup"],
				 minlength: [10, "debe tener al menos 3 caracteres"]
	},
	punchline: { type: String,
				 required: [true, "Debe ingresar campo Punch"],
				 minlength: [3, "Debe tener al menos 3 caracteres"]
	}
});

const Joke = mongoose.model("jokes", JokeSchema);

module.exports = Joke;