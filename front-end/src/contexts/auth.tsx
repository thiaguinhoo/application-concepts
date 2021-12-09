import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export interface AuthContextData {
  signed: boolean;
  setSigned: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signed, setSigned] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
