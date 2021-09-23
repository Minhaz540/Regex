
# All basics about regular expression for js

assume that we have a string string in text variable.

    let text = `Sharif md. raisul islam rafi. Rafi read in class 1. He is a intelligent, but literally he is funny boy in the #00FF00   universe --- 🤣😂. 
    He is 6 years old. He like English book ! His Favorite color is rgb(0, 255, 0) / colourrr colorr colo #00FF00`;

    let newText = text.match(/^He/gm);
    let fullData = "";
    let count = 0;

    let stringData = newText.forEach((chunk) => {
	    fullData += chunk;
    });
    console.log(fullData);

This is a simple example for the regex workflow

## Some methods and key combination for regex

1. <span style="color: red">/ some expression here... /</span> <-- we have to write the expression inside the two backslashes.
2. after the second / we can add g (global flag) and i (case instance flag)
3. global flag (/g) means it will select every possible match. In default we know that it only selects the first math. 
4. case instance flag (/i) will ignore the case facts (apple == APPLe) 
5. <span style="color: red">/\w/</span> here \w (small w) means it will select all the word including number but ignore all other stuff ( . , / ? ! = -_ & space )                         
6. <span style="color: red">/\W/</span> (big W) will select the all operator and other stuff like ( , . # - = space ) but it will not select the words and numbers
7. <span style="color: red">/\d/</span> (little d) will select the digit
8. <span style="color: red">/\D/</span> (big D) will not select the digit but will select other stuff
9. <span style="color: red">/\s/</span> (small s) will select the space
10. <span style="color: red">/\S/</span> (big S) will not select the spaces but will select other stuff
11. <span style="color: red">/\t/</span> (small t) will select the tab space
12. <span style="color: red">/\n/</span>  will select the new line
13. <span style="color: red">/any word or character.../</span> this will select that specific word or character
14. <span style="color: red">/./gi</span> will select everything without new line
15. <span style="color: red">/[abc]/gi</span> will select every a, b, c from the text line. This will behave like an array
16. <span style="color: red">/[o-w]/gi</span> this range will select all characters from o to w
17. <span style="color: red">/[W-Za-sA-P]/g</span> will select all W-Z, a-s, A-P character sets
18. <span style="color: green">^</span> this symbol is called negation.
19. <span style="color: red">/[^abc]/g</span> this will not select a, b, c but will select all other stuff.
20. <span style="color: green">?</span> indicate 0 or 1 occurrence
21. <span style="color: red">/colou?r/gi$</span> this will select color and colour both
22. <span style="color: green">(*)</span> indicate 0 or multiple occurrence
23. <span style="color: red">/color*/</span> this will select color, colo, colorrrr and colorrrr
24. <span style="color: red">/colou?r*/gi</span> this will select color, colo, colorrrr, colorrrr, colour and colourr
25. <span style="color: green">(+)</span> indicate 1 or multiple occurence
26. <span style="color: red">/colou?r+/</span> will not select colo or will select color this time because (+) will select those word which have (colorr) minimum 1 r or more
27. <span style="color: green">{n}</span> preceding is matched exact n time
28. <span style="color: red">/colou?r{2}/gi</span> will select colourr and colorr because there are 2 r available here
29. <span style="color: green">{min, max}</span> this will set a range for selections
30. <span style="color: red">/colou?r{1,3}/gi</span> this will select colourr, color , colorrr and it will not select colo this time because it is not full fil the min parameter
31. <span style="color: green">\\</span> is called the escape character
32. <span style="color: red">/color\?/gi</span> will select the color? word. because here \ slash will scape the ? key word so regex consider it as a string not it's key word
33. <span style="color: blue">/^Sharif/</span> this will check the string was start with Sharif word
34. <span style="color: green">$</span> this  symbol will help to identify the end character or word
35. <span style="color: red">/#00FF00$/g</span> will select the last word if its exists
36. multiline flag (m) will select for the individual line not the whole string.
37. <span style="color: red">/^He/gm</span> this will now find for the first word selection in new line not the whole string's first word


## Function for managing regex in js

Here we will know about some Functions 

    const text = "This is user1 phone number: +88-01712345678";
    const newNumber = "01300000234";

    const regex = /(\+88-)?01[1-9]\d{8}/g;

    // return an array of matched elements
    let matches = text.match(regex);

    // replace the selected texts with prams text
    let replacement = text.replace(regex, newNumber);

    // return the index of the searched elements
    let index = text.search(regex);
    
    // return true or false for the find result
    let test = regex.test(text);

    console.log(matches, replacement, index, test);

if we want to deal with stored variable we can use this process:

    var name = 'John';
    var regexp = new RegExp("(" + name + ")", "g");

    Example usage: 'Johnsina'.replace(regexp, '');


## Screenshots
 
Here all the necessary flags

![App Screenshot](ss.png)
## Here for some tips for how to color or highlight your markdown header.

![App Screenshot](ss2.png)