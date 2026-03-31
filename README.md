# PopFoods Ghana
## Project Overview
InnoYaliApp is an innovative educational platform designed to make learning accessible to all users. The website provides a modern, user-friendly interface for accessing educational content and resources. The platform is built with React and Vite, ensuring fast performance and a smooth user experience.

### Key Features
- Modern, responsive design
- Fast loading times with Vite
- Accessibility features powered by Boafo widget
- Clean, intuitive user interface
- Mobile-friendly layout

### Technologies Used
- **React** - Frontend framework
- **Vite** - Build tool and development server
- **TypeScript** - Type safety
- **Boafo Accessibility Widget** - Accessibility features

## Boafo Accessibility Widget Integration

This website uses the Boafo accessibility widget to make the site accessible to all users, including those with disabilities. The widget provides features like:
- Text resizing
- Color contrast adjustment
- Screen reader support
- Keyboard navigation enhancements

## Getting Your Boafo API Key

To use the Boafo widget, you need to register and get your API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account
3. Log in to your dashboard
4. Copy your API key from the dashboard

## How to Integrate the Boafo Widget

For detailed integration instructions, refer to the official Boafo integration guide:
- [Boafo Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/InnoYaliApp.git
   cd InnoYaliApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and add your Boafo API key:
     ```
     VITE_BOAFO_API_KEY=your_boafo_api_key_here
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000/`
   - The Boafo widget should be visible and functional

## Development

This project uses:
- **React** with functional components and hooks
- **Vite** for fast development and building
- **TypeScript** for type safety
- **Boafo** for accessibility features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.