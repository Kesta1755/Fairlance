# FairLance

FairLance is a next-generation freelance platform built with React and Convex, designed to provide a fair, transparent, and AI-powered experience for both clients and freelancers. Featuring an integrated escrow system, real-time project management, and skill-based matching, FairLance aims to level the playing field for newcomers and experienced professionals alike.

## Features

- **AI-Driven Matching**: Smart recommendations for projects and freelancers based on skills, experience, and platform needs.
- **Integrated Escrow System**: Secure payments with fund holding, release, dispute, and refund workflows.
- **Real-Time Project Management**: Track proposals, milestones, and project status in real-time.
- **Authentication & Profiles**: Role-based dashboards for clients and freelancers, with secure login and registration.
- **Fair Opportunity Algorithms**: Newcomers get a boost in visibility and lower platform fees.
- **Notifications & Messaging**: Stay up-to-date with real-time notifications and direct messaging (planned).
- **Modern UI**: Responsive, accessible design with a focus on usability and clarity.

## Tech Stack

- **Frontend**: React, TypeScript, React Router, Tailwind CSS, lucide-react
- **Backend**: [Convex](https://convex.dev/) (serverless, real-time database and functions)
- **Other**: Vite, ESLint, Prettier

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/fairlance.git
   cd fairlance
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your Convex deployment URL:

   ```env
   VITE_CONVEX_URL=your-convex-deployment-url
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in Browser**

   Visit [http://localhost:5173](http://localhost:5173) to see the app in action.

## Project Structure

```
project/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Route pages
│   ├── hooks/              # Custom React hooks
│   ├── convex/             # Convex schema & functions
│   ├── App.tsx             # Main app component
│   └── router.tsx          # Route definitions
├── public/                 # Static assets
├── .env                    # Environment variables
├── package.json            # Project metadata & scripts
└── README.md               # This file
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or suggestions.

## License

MIT License. See [LICENSE](LICENSE) for details.

---

*Built with ❤️ using Convex and React.*
