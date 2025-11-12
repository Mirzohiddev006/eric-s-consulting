// This simulates the user object from Django's request
export interface User {
  isAuthenticated: boolean;
  isSuperuser: boolean;
  isStaff: boolean;
  firstName: string;
  lastName: string;
}

// These props would be passed down from App.tsx
export interface AuthProps {
  user: User;
  hasUnreadMessages: boolean;
  openRequests: boolean;
  activePage: string;
}
