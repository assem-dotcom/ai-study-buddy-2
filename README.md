<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
# AI Study Buddy 2.0

An AI-powered study assistant that helps students learn and understand their study materials through various interactive features.

## Features

- Quiz Generation
- Study Material Summarization
- Podcast Script Creation
- Personal Tutoring
- PDF File Support
- Text-to-Speech (ElevenLabs Integration)

## Tech Stack

- Frontend: React with TypeScript, Material-UI
- Backend: Node.js with Express
- AI: Groq API
- Text-to-Speech: ElevenLabs API
- Deployment: Vercel (Backend), GitHub Pages (Frontend)

## Setup

### Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
GROQ_API_KEY=your_groq_api_key
PORT=4000
```

4. Start the development server:
```bash
npm run dev
```

### Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
REACT_APP_ELEVENLABS_API_KEY=your_elevenlabs_api_key
```

4. Start the development server:
```bash
npm start
```

## Deployment

### Backend (Vercel)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
cd backend
vercel
```

### Frontend (GitHub Pages)

1. Build the project:
```bash
cd frontend
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Environment Variables

### Backend
- `GROQ_API_KEY`: Your Groq API key
- `PORT`: Server port (default: 4000)
- `NODE_ENV`: Environment (development/production)

### Frontend
- `REACT_APP_ELEVENLABS_API_KEY`: Your ElevenLabs API key

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
>>>>>>> 10bf9cbbc46f9bbec8586da325d1cf9315c19355
