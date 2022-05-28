import React, {
  useState,
  createContext,
  useContext,
  ReactElement,
} from "react";

interface AppProviderValue {
  points: number;
  // gameStarted: boolean;
  // gameEnded: boolean;
  // setGameConfig: Dispatch<SetStateAction<GameConfig>>;
  handleAddPoint: () => void;
  // handleGameStart: () => void;
  // handleReplay: () => void;
}

const defaultValue: AppProviderValue = {
  points: 0,

  handleAddPoint: () => null,
};

const AppContext = createContext(defaultValue);

interface AppProviderProps {
  children: ReactElement;
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  const [points, setPoints] = useState(0);
  // const [gameStarted, setGameStarted] = useState(false);
  // const [gameEnded, setGameEnded] = useState(false);

  // const handleGameStart = () => {};

  const handleAddPoint = () => {
    setPoints((prev) => prev + 1);
  };

  // const clearTimeouts = () => {
  //   const highestId = window.setTimeout(() => {
  //     for (let i = highestId; i >= 0; i--) {
  //       window.clearInterval(i);
  //     }
  //   }, 0);
  //   console.log("Cleared timeouts");
  // };

  // const handleReplay = () => {
  //   clearTimeouts();
  //   setCheckedIndexes([]);
  //   setErrrors(0);
  //   setPoints(0);
  //   setGameStarted(false);
  //   setGameEnded(false);
  // };

  // useEffect(() => {
  //   handleReplay();
  //   setTotalPointsToGet(gameConfig.answers.filter((a) => a).length);
  // }, [gameConfig]);

  // useEffect(() => {
  //   handleReplay();
  // }, [pace]);

  const value = {
    points,
    handleAddPoint,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
