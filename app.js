// your code here!






// Shorthand for $( document ).ready()
$(function() {


$('#TextToAnalyze').submit ( function (event) {
      event.preventDefault();
   	  //console.log("TextToAnalyze is being entered");
      var userTextElement;
      // in case there's already results
      $('js-text-report').empty();
      

      userTextElement = $(event.currentTarget).find('#user-text');
      
      //console.log('user text is: ' + userTextElement.val());
      //userTextElement.val("");

      //Word Count
      var wordsArray = userTextElement.val().split(" ");
      //console.log('wordsArray: ' + wordsArray);

      var wordCount = 0;
      var uniqueWordCount = 0;
      var wordBank = [];
      var sumWordLength = 0;
      var avgWordLength = 0;
      var uniqueWordBool = true;

      for (var i=0; i<wordsArray.length; ++i)
      {

      	uniqueWordBool = true;
      	//For Word Count
      	++wordCount;

        //has it been found in the wordBank? If no then count it in the unique count!
        for (var x=0; x<wordBank.length; ++x)
      	{
      		if (wordBank[x] == wordsArray[i])  //if word was found previously don't count it in the unique count
      		{
      			uniqueWordBool = false;
      			break; 
      		}
		}

		if (uniqueWordBool) {
			++uniqueWordCount;
		}

        wordBank.push(wordsArray[i]);  //save the word in our history



      	// For Average word Length 
      	sumWordLength +=  wordsArray[i].length;

      }

      console.log('wordCount: ' + wordCount);

      //Unique Word Count
 	  console.log('uniqueWordCount: ' + uniqueWordCount);

      //Average word Length 
      avgWordLength = sumWordLength / wordsArray.length;
      console.log('avgWordLength: ' + avgWordLength);

   });




    console.log( "ready!" );
});










//display values for Word count, Unique word count, and Average word length

/*
function handleAnalysis () {

    console.log("handleAnalysis is being entered");
   //get button input 
   $('.js-analyze-button').submit ( function (event) {

      event.preventDefault();
   	  console.log("js-analyze-button is being entered");
      var userTextElement;
      // in case there's already results
      $('js-text-report').empty();
      

      $(event.currentTarget).find('user-text');
      
      console.log('user text is: ' + userTextElement.val());
      userTextElement.val("");


   });



}




$(handleAnalysis);

*/