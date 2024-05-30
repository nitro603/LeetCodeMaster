<img src="src\assets\img\leetMate_logo.png" width="190"/>

# LeetMate, Chrome Extension for Technical Interviews

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Get a Youtube and Openai API key
7. Set keys in a .env file
    ```
    YOUTUBE= your_ytkey
    CHATGPT= your_gptkey
    ```
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy Leetcoding

## Workflow


## Credits

- Michael Xieyang Liu | [Website](https://lxieyang.github.io)
- This boilerplate is largely derived from [lxieyang/chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react), which in turn is adapted from [samuelsimoes/chrome-extension-webpack-boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate).
