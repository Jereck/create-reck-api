# create-reck-api
A simple CLI to scaffold a Typescript + Express API project.

## What it does
This CLI tool instantly creates a Node.js + Express API project with basic TypeScript, including:
- Pre-configured ```tsconfig.json```
- ```nodemon``` for development
- Basic Express server setup
- Predefined NPM scripts
- Automatic dependency install

## Requirements
- Node.js 18+
- npm or yarn

## Usage
```bash
npx create-reck-api my-new-project
```

This will
1. Create a new folder called ```my-new-project```
2. Copy in the Express + TypeScript boilerplate
3. Run ```npm install``` for you
4. You're ready to start coding!

## Project Structure
```bash
my-project-name/
├── src/
│   └── index.ts        # Entry point for your API
├── tsconfig.json       # TypeScript config
├── package.json        # Scripts and dependencies
└── ...
```

## Scripts
Once created, your project includes useful scripts:
| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start dev server with nodemon    |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start`     | Run compiled project             |


## Example Output
```bash
$ npx create-reck-api awesome-api

✅ Project files copied. Installing dependencies...
✅ Done! Your API project "awesome-api" is ready.

Next steps:
  cd awesome-api
  npm run dev
```

## Credits
Created by Jake Reck
Inspired by tools like ```create-react-app```

## License
MIT