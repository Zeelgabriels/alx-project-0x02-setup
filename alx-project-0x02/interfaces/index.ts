// interfaces/index.ts
// This file contains all our TypeScript interface definitions
// Interfaces define the "shape" of our data - what properties objects should have

/*
  What are TypeScript interfaces?
  - They define the structure of objects
  - They help catch errors during development
  - They provide autocomplete in your code editor
  - They make code more readable and maintainable
*/

// This interface will be used for our Card component (Task 3)
export interface CardProps {
  title: string;        // The card's title - must be a string
  content: string;      // The card's content - must be a string
  className?: string;   // Optional additional CSS classes (? means optional)
}

// This interface will be used for our Button component (Task 5)
export interface ButtonProps {
  children: React.ReactNode;  // What goes inside the button (text, icons, etc.)
  size?: 'small' | 'medium' | 'large';  // Size options - can only be one of these three
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';  // Shape options
  onClick?: () => void;       // Function to call when button is clicked (optional)
  className?: string;         // Additional CSS classes (optional)
  disabled?: boolean;         // Whether the button is disabled (optional)
  type?: 'button' | 'submit' | 'reset';  // HTML button type (optional)
}

// This interface will be used for our PostCard component (Task 7)
export interface PostProps {
  id: number;          // Unique identifier for the post
  title: string;       // Post title
  body: string;        // Post content (using 'body' to match JSONPlaceholder API)
  userId: number;      // ID of the user who created the post
}

// This interface will be used for our UserCard component (Task 8)
export interface UserProps {
  id: number;          // Unique identifier for the user
  name: string;        // User's full name
  email: string;       // User's email address
  phone?: string;      // User's phone (optional)
  website?: string;    // User's website (optional)
  address?: {          // User's address (optional, and it's an object)
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company?: {          // User's company info (optional)
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// This interface will be used for our PostModal component (Task 4)
export interface PostModalProps {
  isOpen: boolean;                    // Whether the modal is visible
  onClose: () => void;               // Function to close the modal
  onSubmit: (data: PostData) => void; // Function to handle form submission
}

// Interface for the data that comes from the PostModal form
export interface PostData {
  title: string;       // Title of the new post
  content: string;     // Content of the new post
}

/*
  Why do we organize interfaces this way?
  
  1. Centralized: All type definitions in one place
  2. Reusable: Can import these interfaces anywhere in our project
  3. Maintainable: Easy to update if data structure changes
  4. Consistent: Ensures all components use the same data structure
  
  Example usage in a component:
  
  import { CardProps } from '@/interfaces';
  
  const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };
*/