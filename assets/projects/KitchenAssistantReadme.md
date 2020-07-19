# Idiot Sandwich Kitchen Assistant Extension
The Idiot Sandwich Kitchen Assistant, AKA Remy, is a Google Chrome browser extension in development by the Idiot Sandwich group as a capstone project. It integrates IBM Watson Assistant to help list ingredients and steps for an [allrecipes.com](https://www.allrecipes.com/) or [delish.com](https://www.delish.com/) recipe.

# Setup
### Requirements
To use the extension, make sure you have the following installed:
| Requirement                                 | Version |
| ------------------------------------------- | ------- |
| [Node.js](https://nodejs.org/en/download/)  | `12.6+` |
| [Python](https://www.python.org/downloads/) | `3.6+`  |
| [Google Chrome](https://www.google.com/chrome/index.html) | `80+` |

### Installing the Extension
Download the `master` branch and keep track of where you saved it. Open Chrome and navigate to the [extension settings](chrome://extensions), turn on `developer mode`, then click on `load unpacked`. Navigate to the directory you saved the project to, go into the `RemyChrome` folder, and click `Open Folder`. The extension should be added and turned on.

Once installed in Chrome, open two terminals (`bash` on Linux or WSL). In the first terminal, navigate to the project directory, go into the `RemyChrome` directory, and run `python app.py` (or `python3` instead of `python`).

```bash
cd <path_to_project>/RemyChrome
python3 app.py
```

In the second terminal, go into the `RemyChrome/chatbot` directory, and run `node run_chatbot.js`. If errors occur, try installing `flask` (`pip3 install flask`), `flask_cors` (`pip3 install flask_cors`) and `npm install ws`.

```bash
cd <path_to_project>/RemyChrome/chatbot
node run_chatbot.js
```
## Note! The above two steps must be done for every use of the extension!

# Using the extension
### Features
The extension features a functional assistant to assist in finding recipes and showing the steps and ingredients. It can also find substitues for common ingredients.

### Usage
In any tab, click on the extension. There is a `Start Assistant` button followed by a search bar. 

![Initial State of the Extension](/../readme/readme_files/extension_initial.PNG?raw=true "Initial State of the Extension")

If you are not at an [allrecipes.com](https://www.allrecipes.com/) or [delish.com](https://www.delish.com/) recipe, use the search bar to search for a recipe, or navigate to a website and click `start assistant`. Note: the assistant only works with [allrecipes.com](https://www.allrecipes.com/) or [delish.com](https://www.delish.com/) recipes. Then, ask the assistant questions, and it will answer you.

![Extension with the Steps Query](/../readme/readme_files/extension_recipe.PNG?raw=true "Recipe in Extension")

If you are at an [allrecipes.com](https://www.allrecipes.com/) or [delish.com](https://www.delish.com/) recipe, click `Start Assistant` to start using the assistant. Happy cooking!
