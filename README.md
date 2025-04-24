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