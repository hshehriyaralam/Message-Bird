export type SignUpDataTypes = {
  name : string,
  email : string,
  password : string,
}

export type LoginDataTypes = {
  email : string,
  password : string,
}


export type ForgotPassDataTypes = {
  email : string,
}


export type ResetPassDataTypes = {
  password : string,
}


export type SignUpHandlerPropsTypes  = {
    email : string,
    password : string,
    name : string,
    router? : any, 
    reset : any,
}


export type LoginHandlerPropsTypes  = {
    email : string,
    password : string,
    router? : any,
    reset :  any,
}

export type AuthStore = {
  currentUserId: string | null;
  loading: boolean;
  currentUserName : string | null
  getCurrentUser: () => Promise<void>;
  setCurrentUserId: (id: string | null) => void;
};