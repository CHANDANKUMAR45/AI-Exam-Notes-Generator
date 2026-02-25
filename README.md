# ExamNotesAI 📚✨

An intelligent exam preparation platform that leverages AI to generate comprehensive study notes from topics. Built with modern web technologies, featuring real-time note generation, payment processing, and detailed progress tracking.

## 🎯 Features

- **AI-Powered Note Generation**: Generate detailed study notes from exam topics using Google Gemini AI
- **User Authentication**: Secure authentication with JWT tokens and cookie-based sessions
- **Credit System**: Pay-as-you-go model with Stripe payment integration
- **Notes Management**: View, organize, and track your generated notes with history
- **PDF Export**: Download generated notes as PDF files
- **Data Visualization**: Charts and diagrams to visualize learning progress (Recharts & Mermaid)
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **User Dashboard**: Personal dashboard with credits balance and usage statistics
- **Pricing Plans**: Multiple subscription options for different user needs

## 📋 Project Structure

```
ExamNotesAI/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/         # Route pages (Auth, Home, History, Notes, Pricing, etc.)
│   │   ├── components/    # Reusable UI components
│   │   ├── redux/         # State management (user slice & store)
│   │   ├── services/      # API communication
│   │   ├── utils/         # Firebase config & utilities
│   │   └── App.jsx        # Main app component
│   └── vite.config.js     # Vite configuration
│
└── server/                 # Node.js Backend
    ├── controllers/       # Business logic
    ├── models/           # MongoDB schemas (User, Notes)
    ├── routes/           # API endpoints
    ├── middleware/       # Authentication middleware
    ├── services/         # External API integration (Gemini)
    ├── utils/            # Helper functions
    └── index.js          # Server entry point
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Fast build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **Mermaid** - Diagram generation
- **Firebase** - Backend services
- **React Markdown** - Markdown rendering
- **React Icons** - Icon library

### Backend
- **Node.js & Express** - Web server framework
- **MongoDB & Mongoose** - Database & ODM
- **JWT (jsonwebtoken)** - Authentication tokens
- **Stripe** - Payment processing
- **PDFKit** - PDF generation
- **Google Gemini API** - AI note generation
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-reload

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or cloud)
- Google Gemini API key
- Stripe API keys
- Firebase configuration

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ExamNotesAI
   ```

2. **Backend Setup**
   ```bash
   cd server
   npm install
   ```
   
   Create `.env` file in server directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   ```
   
   Create `.env.local` file in client directory:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_CONFIG=your_firebase_config
   ```

### Running the Application

**Development Mode:**
```bash
# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
cd client
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

**Build for Production:**
```bash
# Frontend
cd client
npm run build

# Backend (ready to deploy)
```

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /verify` - Verify JWT token

### User Routes (`/api/user`)
- `GET /profile` - Get user profile
- `PUT /profile` - Update user profile
- `GET /credits` - Get user credits balance

### Notes Routes (`/api/notes`)
- `POST /generate` - Generate notes from topic
- `GET /history` - Get user's note history
- `GET /:id` - Get specific note details
- `DELETE /:id` - Delete a note

### PDF Routes (`/api/pdf`)
- `POST /generate` - Generate PDF from notes

### Credits Routes (`/api/credits`)
- `GET /packages` - Get credit packages
- `POST /webhook` - Stripe webhook for payment handling

## 🔐 Authentication Flow

1. User registers/logs in via Auth page
2. Server validates credentials and issues JWT token
3. Token stored in HTTP-only cookies for security
4. Token verified on protected routes via `isAuth` middleware
5. Redux store maintains user state on client

## 💳 Payment Integration

- Integrated with **Stripe** for secure payment processing
- Credit-based system for note generation
- Multiple pricing tiers available
- Webhook handling for payment confirmations
- Success/Failed payment pages for user feedback

## 🤖 AI Integration

- Uses **Google Gemini 3 Flash** for intelligent note generation
- Prompt engineering for quality exam-focused content
- Structured output formatting for better readability
- Supports markdown formatting in generated notes

## 🎨 UI/UX Features

- Responsive Tailwind CSS design
- Smooth animations with Motion library
- Intuitive navigation with React Router
- Real-time data updates with Redux
- Loading states and error handling
- Toast notifications for user feedback (if implemented)

## 📊 Key Components

### Pages
- **Home** - Dashboard with quick actions
- **Auth** - Login/Register interface
- **History** - View previously generated notes
- **Notes** - Create and view notes
- **Pricing** - Subscription tier display
- **PaymentSuccess/Failed** - Payment status pages

### Components
- **Navbar** - Navigation header
- **Sidebar** - Sidebar navigation
- **TopicForm** - Form to input exam topics
- **FinalResult** - Display generated notes
- **RechartSetUp** - Statistics visualization
- **MermaidSetup** - Diagram rendering
- **Footer** - Footer component

## 🛡️ Security Features

- JWT-based authentication
- HTTP-only cookies for token storage
- CORS enabled for trusted origins
- Password hashing (implementation in controllers)
- Middleware-based route protection
- Secure Stripe payment handling

## 📱 Responsive Design

- Mobile-first approach with Tailwind CSS
- Optimized for all device sizes
- Touch-friendly UI elements
- Fast performance with Vite

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the dist folder
```

### Backend (Heroku/Railway/Render)
```bash
# Set environment variables in deployment platform
# Push to platform's git repository
```

## 🎓 Learning Outcomes

This project demonstrates:
- **Full-stack development** with MERN stack
- **API design** with RESTful architecture
- **Database modeling** with MongoDB/Mongoose
- **Authentication & Authorization** implementation
- **Payment processing** integration
- **State management** with Redux Toolkit
- **Responsive design** principles
- **AI API integration** for content generation
- **Production-ready practices** (error handling, validation, security)

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| express | Web server framework |
| mongoose | MongoDB ODM |
| axios | HTTP client |
| jsonwebtoken | JWT authentication |
| stripe | Payment processing |
| recharts | Data visualization |
| tailwindcss | CSS framework |
| redux-toolkit | State management |

## 🤝 Contributing

This is a personal project for interview demonstration. For improvements or features, feel free to reach out.

## 📞 Contact

- **Portfolio**: [Your Portfolio]
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

## 📄 License

This project is open source and available under the ISC License.

---

**Last Updated**: February 2026

### Future Enhancements
- [ ] Real-time collaboration features
- [ ] Advanced note formatting options
- [ ] Quiz generation from notes
- [ ] Multiple language support
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Social sharing features
- [ ] Offline note access
