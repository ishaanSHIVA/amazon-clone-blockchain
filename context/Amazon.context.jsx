import { useContext, createContext, useState, useEffect } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";

export const AmazonContext = createContext();

export const AmazonProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [assets, setAssets] = useState([]);

  const {
    isWeb3Enabled,
    authenticate,
    isAuthenticated,
    enableWeb3,
    Moralis,
    user,
    isWeb3,
  } = useMoralis();

  const {
    data: assetsData,
    error: assetsDataError,
    isLoading,
  } = useMoralisQuery("assets");

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

  const getAssets = async () => {
    try {
      await enableWeb3();
      setAssets(assetsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(assets);
  }, [assets]);
  useEffect(() => {
    (async () => {
      if (isWeb3Enabled) {
        await getAssets();
      }
    })();
  }, [isWeb3Enabled, assetsData, isLoading]);

  return (
    <AmazonContext.Provider
      value={{
        username,
        setUsername,
        nickname,
        setNickname,
        isAuthenticated,
        handleSetUsername,
        assets,
      }}
    >
      {children}
    </AmazonContext.Provider>
  );
};
