# Flashcard site with menu

Extract all flashcards from the FbW-D01-Course website JSON file and display them on different pages of a single-page-app according to the submodule they belong to.

## Instructions

### Set up site:

- set up a React site with create-react-app or custom [blank create-react-app files](https://github.com/edwardtanguay/blankcra)

### Create JavaScript object of flashcards:

- import the JSON file called `document_curriculum.json` that is in this repository
- in this JSON file, you will find flashcards contained within various submodules
- extract these flashcards and their respective submodule information into a JavaScript object with the following form:

```
[
	{
		"front": "What does DOM stand for?",
		"back": "Document Object Model",
		"submodule": "4.01 DOM"
	},
	{
		"front": "Name four browsers and the JavaScript Engines they use.",
		"back": "- Google Chrome uses V8\r\n- Firefox uses SpiderMonkey\r\n- Safari uses JavaScriptCore\r\n- Microsoft Edge formerly used Chakra but now is based on Chromium and hence uses V8 as Chrome does\r\n",
		"submodule": "4.01 DOM"
	},
	...
	{
		"front": "What is an IIFE and what are two ways to write its syntax?",
		"back": "- Immediately-Invoked Function Expression\r\n- `(function() { } )()`\r\n- `(() => { } )()`",
		"submodule": "4.02 Modules"
	},
	{
		"front": "How to import and export React components?",
		"back": "- `export default MyComponent;`\r\n- `import MyComponent from \".\/MyComponent\";`",
		"submodule": "4.02 Modules"
	}
	...
]

```

### Create a menu and pages for each menu item:

- use React Router to create a menu item for each submodule, e.g. **4.01 DOM**, **4.02 Modules**, etc.
- on each page, list the respective flashcards for that submodule, e.g. showing `front` and `back` for each flashcard

## Bonus: Parse the `front` and `back` texts appropriately 🥇

- parse encoded newlines (`\r\n`)
- parse Markdown characters (e.g. `**` for bold, `*` for italic, and backticks for code)

## Bonus: Make flashcards interactive 🥇

- on page display, show the `front` text but hide the `back` text 
- allow the user to click on the `front` text to toggle the `back` text visible and invisible

## Bonus: Display the `moreInfo` information when showing the `back` text 🥇

- also read in the `moreInfo` information into the JavaScript object
- display the moreInfo information as links when `back` text is displayed

## Challenge: Allow user to mark and save progress 💪

- when showing the `back` text, show three buttons for the user to click:
    - `[ Test Again ]`
    - `[ Learned ]`
- save this information in localStorage so that it is remembered even when the user closes and reopens the browser
- when showing the `front` text, indicate if that flashcard is **New**, **Test Again** or **Learned**
- indicate in the menu area of the screen how many flashcards are learned, e.g.:
    - `Flashcards learned: 4 of 22`

# flashcards

# Use localStorage to track user flashcard progress

In the flashcard app from exercise 452, use localStorage to allow the user to indicate if they have learned each flashcard or would like to test themselves on that flashcard again.

## Instructions

- assumption: you have completed exercise 452 including the bonus items:
  - parse the front and back texts appropriately (new line characters (`\r\n`) plus markdown for bold, italic and code)
  - make flashcards interactive (use can click the front to toggle visibility of the back)
  - display the moreInfo information when showing the back text 
- add a new feature which uses localStorage to allow the user to mark their progress while taking the flashcards
    - when showing the `back` text, show two buttons for the user to click:
        - `[ Test Again ]`
        - `[ Learned ]`
    - save this information in localStorage so that it is remembered even when the user closes and reopens their browser
    - when showing the `front` text, indicate if that flashcard is **New**, **Test Again** or **Learned**
    - indicate in the menu area of the screen how many flashcards have been learned, e.g.:
        - `Flashcards learned: 4 of 22`
