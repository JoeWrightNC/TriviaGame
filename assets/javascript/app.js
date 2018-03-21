//Setting Game Q&A Arrays
var cocktails = [
  {
    question: "This drink is traditionally made by stirring 2 parts whiskey, 1 part sweet vermouth, & 2 dashes Angostura bitters over ice.  Garnished with with orange peel and cherry",
    answerArr: ["Martini", "Manhattan", "Negroni", "Whiskey Sour"],
    correctAnswer: 1
  },
  {
    question: "This drink is is made of one part gin, one part vermouth rosso, and one part Campari.  Considered an apéritif; garnished with orange peel",
    answerArr: ["Negroni", "Martini", "Margarita", "Boulevardier"],
    correctAnswer: 0
  },
  {
    question: "This drink is made by muddling sugar with bitters, then adding alcohol, originally whiskey but now sometimes brandy, and finally adding a twist of citrus rind",
    answerArr: ["Martini", "Sazerac", "Old Fashioned", "Whiskey Sour"],
    correctAnswer: 2
  },
  {
    question: "This drink is typically made of 2 parts gin, 1 part lime juice, and soda to finish",
    answerArr: ["Gin & Tonic", "Tom Collins", "Gimlet","Negroni"],
    correctAnswer: 2
  },
  {
    question: "This drink is made with gin or vodka and vermouth, and garnished with an olive or a lemon twist",
    answerArr: ["Negroni", "Martini", "Margarita", "Boulevardier"],
    correctAnswer: 1
  },
  {
    question: "This drink is  made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice",
    answerArr: ["Cosmopolitian", "Manhattan", "Negroni", "Whiskey Sour"],
    correctAnswer: 0
  },
  {
    question: "This is a family of cocktails whose main ingredients are rum, citrus juice, and sugar or other sweetener",
    answerArr: ["Julep", "Daiquiri", "Mojito", "Whiskey Sour"],
    correctAnswer: 1
  },
  {
    question: "This drink is is made of one part whiskey, one part vermouth rosso, and one part Campari.  Considered an apéritif; garnished with orange peel",
    answerArr: ["Negroni", "Martini", "Margarita", "Boulevardier",],
    correctAnswer: 3
  },
  {
    question: "This drink is made from gin, lemon juice, sugar, and carbonated water",
    answerArr: ["Gin & Tonic", "Tom Collins", "Gimlet","Negroni"],
    correctAnswer: 1
  },
  {
    question: "This is a mixed drink containing whiskey, lemon & lime juice, sugar, and optionally, a dash of egg white",
    answerArr: ["Boulevardier", "Rickey", "Mojito", "Whiskey Sour"],
    correctAnswer: 3
  },
]

var beers = [
  {
    question: "This beer is a strong lager of German origin. Several substyles exist both making the variety lighter and heavier",
    answerArr: ["Amber", "Stout", "Bock", "Pilsner"],
    correctAnswer: 2
  },
  {
    question: "This beer is a type of pale lager. It takes its name from the Bohemian city where it was first produced in 1842",
    answerArr: ["Amber", "Stout", "Lager", "Pilsner"],
    correctAnswer: 3
  },
  {
    question: "This name is the identification specifically for Belgian Wheat Ales",
    answerArr: ["Wit", "Lambic", "Lager", "Hefeweizen"],
    correctAnswer: 0
  },
  {
    question: "The term for this cold one was first used by London brewers in the late 17th century to describe their products, such as mild ale, though the term had a rather different meaning than it does today..",
    answerArr: ["Pale Ale", "Brown Ale", "India Pale Ale","Amber"],
    correctAnswer: 1
  },
  {
    question: "This category is a word used for several types of dark German lager",
    answerArr: ["Dunkel", "Hefeweizen", "Helles", "Bier"],
    correctAnswer: 0
  },
  {
    question: "This is a style of strong ale that is known for typically being 8% - 12% ABV",
    answerArr: ["Stout", "Pale Ale", "Barley Wine", "India Pale Ale"],
    correctAnswer: 2
  },
  {
    question: "This beer is a dark style of beer developed in London from well-hopped beers made from brown malt. The name was first recorded in the 18th century",
    answerArr: ["Stout", "Cider", "Porter", "India Pale Ale"],
    correctAnswer: 0
  },
  {
    question: "This name traditionally referred to the stronger variety of porters, but now refers to a dark beer that includes roasted malt or roasted barley, hops, water and yeast",
    answerArr: ["Stout", "Cider", "Bock", "India Pale Ale"],
    correctAnswer: 0
  },
  {
    question: "This is a top-fermented beer that originated in Germany. It is brewed with at least 50% of the grain bill being malted wheat. Dominant flavors include a lemon sourness, an herbal characteristic, and a strong saltiness",
    answerArr: ["Hefeweizen", "Wit", "Sour","Gose"],
    correctAnswer: 3
  },
  {
    question: "This beer is known for its heavy reliance on hops, originally a by-product of its need to persist while being transported",
    answerArr: ["Lager", "Henekien", "India Pale Ale", "Pale Ale"],
    correctAnswer: 2
  },
]

var wines = [
  {
    question: "This wine is made from a full-bodied red grape first heavily planted in the Bordeaux region. Today, it’s the most popular wine variety in the world",
    answerArr: ["Malbec", "Pinot Noir", "Cabernet Suavignon", "Merlot"],
    correctAnswer: 2
  },
  {
    question: "This is a full-bodied red wine that’s heavily planted in the Rhône Valley in France and Australia. The wines have intense fruit flavors and middleweight tannins",
    answerArr: ["Syrah", "Malbec", "Zinfandel", "Merlot"],
    correctAnswer: 0
  },
  {
    question: "This is a medium-bodied red wine that originated in Croatia. Wines are fruit-forward and spicy with a medium length finish.",
    answerArr: ["Merlot", "Pinor Noir", "Malbec", "Zinfandel"],
    correctAnswer: 3
  },
  {
    question: "This is a dry light-bodied first widely planted in France. The wines always lead with higher acid and soft tannins.",
    answerArr: ["Merlot", "Pinot Noir", "Malbec","Bordeaux Red Blend"],
    correctAnswer: 1
  },
  {
    question: "This wine is made from a grape that was originally a grape associated with south-west France but today is much more prominent in South America.  This wine has become wildly popular over the last decade",
    answerArr: ["White Zinfandel", "Malbec", "Merlot", "Bordeaux Red Blend"],
    correctAnswer: 1
  },
  {
    question: "This is a dry full-bodied white wine that was planted in large quantities for the first time in France. When oak-aged, it will have spicy, bourbon like notes. Unoaked wines are lighter and zesty with apple and citrus flavors.",
    answerArr: ["Sauvignon Blanc", "Pinot Grigio", "Chardonnay", "Prosecco"],
    correctAnswer: 2
  },
  {
    question: "This wine is made from a dry white grape first widely planted in France. These wines are tart, typically with herbal green fruit flavors.",
    answerArr: ["Sauvignon Blanc", "Pinot Grigio", "Riesling", "Prosecco"],
    correctAnswer: 0
  },
  {
    question: "This wine is made from a dry light-bodied white grape that is planted heavily in Italy, but also in France and Germany. Wines are light to middle-weight and easy drinking, often with some bitter flavor on the palate (bitter almond, quinine)",
    answerArr: ["Prosecco", "Riesling", "Moscato", "Pinot Gris"],
    correctAnswer: 3
  },
  {
    question: "Floral and fruit-driven aromatic white that comes in variable sweetness. Some producers choose not to ferment all the grape sugar and therefore make the wine in an “off-dry” style.",
    answerArr: ["Pinot Grigio", "Riesling", "Moscato", "White Zinfandel"],
    correctAnswer: 1
  },
  {
    question: "This is a very popular sparkling Italian white wine.",
    answerArr: ["Bubbles", "Champagne", "Moscato", "Prosecco"],
    correctAnswer: 3
  },
]

// setting global vars to be used for game interaction
var intervalId = 0;
var seconds = 15;
var numberWrong = 0;
var numberRight = 0;
var numberUnanswered = 0;
var questionNumber = 0;
var cocktailHour = false;
var beerTier = false;
var wineTime = false;
var answered = false;
var choice;

//initial showing and hiding
$("#instructionsDiv").show();
$("#categoryPickerDiv").hide();
$("#triviaGameDiv").hide();
$("#feedbackDiv").hide();
$("#gameOverDiv").hide();

//start and reset button click events to get to categories choices
$("#startBtn").on("click", function(){
  $("#instructionsDiv").hide();
  $("#categoryPickerDiv").show();
  $("#triviaGameDiv").hide();
  $("#feedbackDiv").hide();
  $("#gameOverDiv").hide();
});

$("#goAgainBtn").on("click", function(){
	$("#instructionsDiv").hide();
  $("#categoryPickerDiv").show();
  $("#triviaGameDiv").hide();
  $("#feedbackDiv").hide();
  $("#gameOverDiv").hide();
  intervalId = 0;
  seconds = 15;
  numberWrong = 0;
  numberRight = 0;
  numberUnanswered = 0;
  questionNumber = 0;
  choice;
  cocktailHour = false;
  beerTier = false;
  wineTime = false;
  answered = false;
  $("#choiceDiv").empty();
  $("#messageDiv").empty();
  $("#result").empty();
  $("#correctAnswer").empty();
  $("#imageResult").empty();
});

//category page logic
$("#cocktailBtn").on("click", function() {
  cocktailHour = true ;
  triviaTime(cocktails);
})

$("#wineBtn").on("click", function() {
  wineTime = true ;
  triviaTime(wines);
})

$("#beerBtn").on("click", function() {
  beerTier = true ;
  triviaTime(beers);
})

//function to build the game based on category selection
function triviaTime(category) {
  seconds = 15
  $("#instructionsDiv").hide();
  $("#categoryPickerDiv").hide();
  $("#triviaGameDiv").show();
  $("#feedbackDiv").hide();
  $("#gameOverDiv").hide();
  $("#timeKeeper").text(seconds);
  intervalId=setInterval(timeReducer, 1000)
  if (cocktailHour === true) {
    theRiddler(cocktails);
  }
  else if (wineTime === true) {
    theRiddler(wines);
  }
  else if (beerTier === true) {
    theRiddler(beers);
  }
}

//function to populate questions
function theRiddler(category) {
  $("#question").html(category[questionNumber].question);
  for(var i = 0; i < 4; i++){
    var choices = $("<p>");
    choices.text(category[questionNumber].answerArr[i]);
    choices.attr({"data-index": i });
    choices.addClass("choiceBtn btn btn-info");
    $("#choiceDiv").append(choices);
    if (i == 1) {
      $("#choiceDiv").append("<br>");
    }
  }
  $(".choiceBtn").on("click",function(){
    answered = true ;
    choice = $(this).data("index");
    clearInterval(intervalId);
    if (cocktailHour === true) {
      factChecker(cocktails);
    } 	
    else if (beerTier === true) {
      factChecker(beers);
    } 	
    else if (wineTime === true) {
      factChecker(wines);
    }
  });
}



//checks answers
function factChecker(category) {
  var correctText = category[questionNumber].answerArr[category[questionNumber].correctAnswer];
  var correctIndex = category[questionNumber].correctAnswer;
  $("#instructionsDiv").hide();
  $("#categoryPickerDiv").hide();
  $("#triviaGameDiv").hide();
  $("#feedbackDiv").show();
  $("#gameOverDiv").hide();
  if(choice == correctIndex && answered == true){
    console.log("correct logic works")
    numberRight++;
    $("#messageDiv").empty()
    $("#messageDiv").html("You Got It!");
    if (cocktailHour === true) {
      $("#imageResult").attr("src", "assets/images/cocktailCorrect.gif")
    } 	
    else if (beerTier === true) {
      $("#imageResult").attr("src", "assets/images/beerCorrect.gif")
    } 	
    else if (wineTime === true) {
      $("#imageResult").attr("src", "assets/images/wineCorrect.gif")
    }
  nextQuestion(category)
  } 
  else if (choice != correctIndex && answered == true) {
    numberWrong++;
    $("#messageDiv").empty()
    $("#messageDiv").html("Nope, You're Wrong!!  Take a sip? ");
    $("#correctAnswer").html('The correct answer was: ' + correctText);
    if (cocktailHour === true) {
      $("#imageResult").attr("src", "assets/images/cocktailWrong.gif")
    } 	
    else if (beerTier === true) {
      $("#imageResult").attr("src", "assets/images/beerWrong.gif")
    } 	
    else if (wineTime === true) {
      $("#imageResult").attr("src", "assets/images/wineWrong.gif")
    }
  nextQuestion(category)
  } 
}

function nextQuestion(category) {
  questionNumber++
  if (questionNumber === category.length) {
    endOfGame(category)
  }
  else if (questionNumber < category.length) {
    setTimeout( 
      function() {
      $("#choiceDiv").empty();
      $("#messageDiv").empty();
      $("#result").empty();
      $("#correctAnswer").empty();
      $("#imageResult").empty();
      triviaTime(category)
      }, 3000)
  }
}

function endOfGame() {
  $("#instructionsDiv").hide();
  $("#categoryPickerDiv").hide();
  $("#triviaGameDiv").hide();
  $("#feedbackDiv").hide();
  $("#gameOverDiv").show();
  $("#numWrong").html(numberWrong)
  $("#numCorrect").html(numberRight)
  $("#numUnanswered").html(numberUnanswered)
  $("#numWrong").html(numberWrong)
  var scoreTime = ((numberRight / 10)*100)
  $("#scorePercent").html(scoreTime)
}

//timer function
function timeReducer() {
  seconds--;
  $("#timeKeeper").html(seconds)
  if (seconds <= 0 && cocktailHour == true) {
    timeOut(cocktails);
  }
  else if (seconds <= 0 && beerTier == true) {
    timeOut(beers);
  }
  else if (seconds <= 0 && wineTime == true) {
    timeOut(wines);
  }
}

function timeOut(category) {
  clearInterval(intervalId);
  var correctText = category[questionNumber].answerArr[category[questionNumber].correctAnswer];
  numberUnanswered++;
  $("#messageDiv").html("You're out of Time");
  $("#correctAnswer").html('The correct answer was: ' + correctText);
  $("#triviaGameDiv").hide();
  $("#feedbackDiv").show();
  answered = false;
  if (cocktailHour === true) {
    $("#imageResult").attr("src", "assets/images/cocktailWrong.gif")
  } 	
  else if (beerTier === true) {
    $("#imageResult").attr("src", "assets/images/beerWrong.gif")
  } 	
  else if (wineTime === true) {
    $("#imageResult").attr("src", "assets/images/wineWrong.gif")
  }
  nextQuestion(category)
}
