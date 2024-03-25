interface RegisterInput {
    user_email: string;
    user_name: string;
    user_pass: string;
  }
  
  interface LoginInput {
      user_email: string;
      user_pass: string;
  }
  
  export type { RegisterInput, LoginInput };
  