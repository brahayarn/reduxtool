export interface User {
    id: number;
    name: string;
    username: string;
    phone: string;
    email: string;
  }
  
  export interface UserState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  }
  
  export const initialState: UserState = {
    users: [],
    status: 'idle',
  };
  