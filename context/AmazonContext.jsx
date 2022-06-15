import { useContext, createContext, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const { authenticate, isAuthenticated, enableWeb3, Moralis, user, isWeb3 } =
    useMoralis();

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        const currentUser = await user?.get("nickname");
        setUsername(currentUser);
      }
    })();
  }, [username, isAuthenticated, user]);

  const handleSetUsername = () => {
    if (user) {
      if (nickname) {
        user.set("nickname", nickname);
        user.save();
        setNickname();
      }
    } else {
      console.log("Can't set empty username");
    }
  };

  return (
    <AmazonContext.Provider
      value={{
        username,
        setUsername,
        nickname,
        setNickname,
        isAuthenticated,
        handleSetUsername,
      }}
    >
      {children}
    </AmazonContext.Provider>
  );
};
