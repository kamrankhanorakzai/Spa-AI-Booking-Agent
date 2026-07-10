# 🌿🤖 Luxury Spa AI Booking Agent

> **Premium Wellness Automation Platform** — A sophisticated spa booking and concierge system powered by AI, featuring intelligent FAQ handling, real-time booking management, and guest automation.

---

## ✨ Overview

Spa AI Booking Agent is a luxury wellness automation platform that transforms how spas interact with guests. Built with cutting-edge web technologies and AI-powered backend orchestration, this project demonstrates enterprise-grade automation for the hospitality industry.

### Key Highlights

- 🎯 **Intelligent AI Agent** - Handles bookings, FAQs, and guest inquiries in real-time
- 🔗 **N8N Integration** - Advanced workflow automation using N8N with LLM models and extensive node library
- 💬 **Smart Chat Interface** - Natural language processing for seamless guest interactions
- 📱 **Responsive Design** - Premium UI built with React 19 and Tailwind CSS v4
- ⚡ **Full-Stack TypeScript** - Type-safe development across the entire stack

---

## 🏗️ Tech Stack

### Frontend
- **[TanStack Start](https://tanstack.com/start/)** - Full-stack React meta-framework
- **[React 19](https://react.dev)** - Latest React with advanced hooks and features
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first styling framework
- **TypeScript** - Static type checking (97.8% of codebase)

### Backend & AI Orchestration
- **[N8N](https://n8n.io/)** - Powerful no-code/low-code automation platform
  - **LLM Models Integration** - OpenAI, Claude, Cohere, and more
  - **Advanced Nodes** - Database, HTTP, Email, Scheduling, Conditional Logic
  - **Custom Workflows** - Complex multi-step automation pipelines

### AI & Automation Features
- **Booking Management Workflows** - Automated reservation handling, confirmations, reminders
- **FAQ Intelligence** - Smart knowledge base responses powered by LLM models
- **Guest Concierge** - 24/7 automated guest support and inquiries
- **Data Integration** - N8N nodes for CRM, calendar, email, and database synchronization

---

## 🤖 AI Integration Architecture

### N8N Automation Nodes

Our N8N workflows leverage:

#### **LLM & AI Nodes**
- 🧠 **OpenAI GPT Models** - Advanced language understanding for chat and FAQ
- 🔄 **Claude Integration** - Alternative LLM for complex reasoning tasks
- 📊 **Vector DB Nodes** - Semantic search for knowledge base retrieval
- 🎯 **Prompt Engineering** - Dynamic prompt templating and optimization

#### **Workflow Nodes**
- 📨 **Email Nodes** - Automated confirmations, reminders, notifications
- 🗓️ **Calendar Nodes** - Integration with booking calendars
- 🗄️ **Database Nodes** - PostgreSQL, MySQL, MongoDB connections
- 🔌 **HTTP Request Nodes** - RESTful API integrations
- ⏰ **Scheduler Nodes** - Cron-based automation and triggers
- 🔀 **Conditional Logic** - IF/THEN/ELSE routing
- 🔄 **Loop Nodes** - Batch processing and iterations
- 💾 **File Handling** - Document processing and storage

#### **Integration Nodes**
- 🌐 **Webhook Nodes** - Receive events from external systems
- 🔐 **Authentication** - OAuth2, API keys, token management
- 📱 **Communication** - SMS, WhatsApp, Slack notifications
- 💳 **Payment Processing** - Stripe, PayPal integrations
- 📍 **Location Services** - Google Maps, Geocoding

---

## 📋 Features

### Guest-Facing
- ✅ **AI Chatbot** - Intelligent spa assistant for bookings and information
- ✅ **Service Catalog** - Browse treatments, therapists, and availability
- ✅ **Smart Booking** - AI-assisted reservation with real-time availability
- ✅ **FAQ Assistant** - Natural language questions answered instantly
- ✅ **Booking Confirmation** - Automated email with details and reminders
- ✅ **Guest Profile** - Personalized preferences and history

### Admin/Backend
- ✅ **N8N Workflow Builder** - Visual automation workflow creation
- ✅ **Booking Management** - Real-time reservation system
- ✅ **Staff Scheduling** - Automated staff allocation
- ✅ **Analytics Dashboard** - Booking trends and guest insights
- ✅ **Multi-language Support** - AI-powered translation via LLM nodes
- ✅ **Audit Logs** - Complete workflow execution history

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- N8N instance (self-hosted or cloud)
- LLM API keys (OpenAI, Claude, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamrankhanorakzai/Spa-AI-Booking-Agent.git
   cd Spa-AI-Booking-Agent
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables:
   ```env
   # N8N Configuration
   N8N_HOST=your-n8n-instance.com
   N8N_API_KEY=your-api-key
   N8N_WEBHOOK_URL=https://your-domain.com/api/n8n
   
   # LLM Configuration
   OPENAI_API_KEY=sk-...
   CLAUDE_API_KEY=sk-...
   
   # Database
   DATABASE_URL=postgresql://user:password@localhost/spa_db
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   Access at `http://localhost:5173`

5. **N8N Setup**
   - Access your N8N instance
   - Import the provided workflow templates from `/n8n-workflows`
   - Configure LLM nodes with your API credentials
   - Set up database connections

---

## 📂 Project Structure

```
src/
├── routes/              # TanStack Start file-based routing
│   ├── __root.tsx      # Root layout
│   ├── index.tsx       # Home page
│   └── api/            # API routes
├── components/         # Reusable React components
│   ├── Chatbot/        # AI chat interface
│   ├── Booking/        # Booking flow
│   └── FAQ/            # FAQ assistant
├── lib/
│   ├── n8n-client.ts   # N8N integration client
│   ├── ai-agent.ts     # AI orchestration logic
│   └── types.ts        # Shared TypeScript types
└── styles/             # Tailwind CSS configuration

n8n-workflows/         # N8N workflow JSON exports
├── booking-agent.json
├── faq-processor.json
├── email-notifier.json
└── guest-concierge.json
```

---

## 🔌 N8N Workflow Examples

### Booking Agent Workflow
```
User Query → LLM Processing → Database Check (Availability)
  → Conditional Logic (Slot Available?)
  → If YES: Create Booking → Send Confirmation Email → Update Calendar
  → If NO: Suggest Alternatives → Send Option List
```

### FAQ Agent Workflow
```
Guest Question → Vector DB Search (Knowledge Base)
  → LLM Enhancement (Contextual Response)
  → Send Response → Log Analytics → Update FAQ Stats
```

### Guest Concierge Workflow
```
Guest Request → Route to Service Type
  → AI Classification → Appropriate Handler
  → Execute Action (Book, Inform, Escalate)
  → Send Confirmation/Updates
```

---

## 📡 API Integration

### N8N Webhooks
The application communicates with N8N through RESTful webhooks:

```typescript
// Trigger N8N workflow from frontend
const response = await fetch('https://your-n8n.com/webhook/booking-agent', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: userMessage,
    guestId: guestId,
    sessionId: sessionId
  })
});
```

### Response Handling
All responses from N8N workflows include:
- ✅ Status indicators
- 💬 AI-generated responses
- 📊 Structured data
- ⚠️ Error handling with fallbacks

---

## 🎨 UI/UX Features

- **Modern Luxury Design** - Premium aesthetic with Tailwind CSS v4
- **Real-time Chat** - Streaming responses from AI models
- **Responsive Layout** - Mobile-first design approach
- **Accessibility** - WCAG compliance for inclusive experience
- **Loading States** - Smooth transitions and feedback
- **Error Handling** - User-friendly error messages

---

## 🔐 Security

- 🔒 API key encryption for LLM services
- 🛡️ N8N authentication and authorization
- 🔑 JWT token management
- 📝 Request validation and sanitization
- 🚨 Rate limiting on webhook endpoints
- 🔐 Environment variable protection

---

## 📈 Performance

- ⚡ Optimized React 19 rendering
- 🚀 TanStack Start SSR capabilities
- 🎯 Code splitting and lazy loading
- 💾 N8N workflow caching
- 📊 LLM response streaming
- 🔄 Efficient database queries

---

## 🧪 Testing

```bash
# Run tests
npm run test

# Run E2E tests
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

---

## 📚 Documentation

- [N8N Documentation](https://docs.n8n.io/)
- [TanStack Start Guide](https://tanstack.com/start/docs/)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs/)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Kamran Khan Orakzai**
- GitHub: [@kamrankhanorakzai](https://github.com/kamrankhanorakzai)
- Project: [Spa AI Booking Agent](https://github.com/kamrankhanorakzai/Spa-AI-Booking-Agent)

---

## 🌟 Acknowledgments

- N8N for powerful automation orchestration
- TanStack for modern full-stack framework
- React team for React 19 innovations
- Tailwind Labs for CSS v4
- The open-source community

---

## 📞 Support

For issues, questions, or suggestions:
- 📧 Create an issue on GitHub
- 💬 Check existing discussions
- 🐛 Report bugs with detailed information

---

**Built with ❤️ for luxury spa automation**
