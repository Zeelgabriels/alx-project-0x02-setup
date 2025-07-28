// This is our Header component - components/layout/Header.tsx
// This component will be used across multiple pages for navigation

import Link from 'next/link';

// In React/Next.js, components are just JavaScript functions that return JSX
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* 
        <header> is semantic HTML - tells browsers this is navigation content
        Tailwind classes:
        - bg-white: White background
        - shadow-md: Adds a medium drop shadow
      */}
      
      <div className="container mx-auto px-4 py-4">
        {/* Container to center content and add padding */}
        
        <div className="flex items-center justify-between">
          {/* 
            Flexbox layout:
            - flex: Makes this a flex container
            - items-center: Centers items vertically
            - justify-between: Spreads items across the container
          */}
          
          {/* Logo/Brand Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              {/* 
                Logo container:
                - w-8 h-8: 32px by 32px square
                - bg-gradient-to-br: Diagonal gradient
                - rounded-lg: Rounded corners
                - flex items-center justify-center: Centers the icon
              */}
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              {/* 
                Link component from Next.js for client-side navigation
                - href="/": Links to home page
                - hover:text-blue-600: Changes color on hover
                - transition-colors: Smooth color transition
              */}
              SoloForge
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            {/* 
              Navigation container:
              - hidden: Hidden by default (mobile-first)
              - md:flex: Shows as flex on medium screens and up (responsive design)
              - space-x-6: Adds horizontal space between child elements
            */}
            
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              {/* 
                Navigation link styling:
                - text-gray-700: Dark gray text
                - hover:text-blue-600: Blue on hover
                - font-medium: Medium font weight
                - transition-colors duration-200: Smooth 200ms transition
              */}
              Home
            </Link>
            
            <Link 
              href="/home" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Dashboard
            </Link>
            
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </Link>
            
            {/* These links will be added in later tasks */}
            <Link 
              href="/posts" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Posts
            </Link>
            
            <Link 
              href="/users" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Users
            </Link>
          </nav>
          
          {/* Mobile Menu Button (we'll enhance this later) */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            {/* 
              Mobile menu toggle:
              - md:hidden: Only shows on mobile (hidden on medium screens and up)
              - p-2: Padding
              - rounded-lg: Rounded corners
              - hover:bg-gray-100: Light gray background on hover
            */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {/* Hamburger menu icon (three horizontal lines) */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// Export the component so other files can import and use it
export default Header;