import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { process } from './routes.js';
import { env, validateEnv } from './config.js';

const app = express();
const port = env.PORT;

// Middleware
app.use(cors({
  origin: env.NODE_ENV === 'production' 
    ? 'https://assem-dotcom.github.io'
    : 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  credentials: true,
  maxAge: 86400 // 24 hours
}));

app.use(express.json());

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  }
});

// Routes
app.post('/api/process', upload.single('file'), process);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size too large. Maximum size is 10MB.' });
    }
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: err.message || 'An unexpected error occurred' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 