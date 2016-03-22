var translator = function(words){

    // var array = words.split('');
    // var vowels = ['a','e','i','o','u'];
    // var newWords = '';
    
    // for(var i = 0; i < vowels.length-1; i++) {
    //     for(var y = 0; y < words.length-1; y++) {
    //         if(words[y] === vowels[i]) {
    //             for(var x = y; x < words.length; x++){
    //                 newWords = newWords + words[x];
    //             }
    //             for(var n = 0; n < y; n++){ 
    //                 newWords = newWords + words[n];
    //             }
    //             return newWords + "ay";
    //         }       
    //     }
    // }

	function isVowel(char) {
			return ['a', 'e', 'i', 'o', 'u'].indexOf(char) != -1;
		}
		function consonant(text) {
			i = 0;
			while (!isVowel(text.charAt(i)))
				i++;
			return text.substring(i) + text.substring(0, i) + 'ay' ;
		}
		function vowel(text) {
			if (text.charAt(text.length - 1) == 's')
				return text.substring(0, text.length -1) + "ays";
			return text + "ay";
		}

		function output(text) {
			if (isVowel(text.charAt(0)))
				return vowel(text);
			else
				return consonant(text);
		}

        return{
            isVowel: isVowel,
            consonant: consonant,
            vowel: vowel,
            output: output,
        };

};

translator('Pig banana trash happy duck glove wat omelet are');