import dayjs, { Dayjs } from "dayjs";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface AppContextType {
  minutesToSleep: number;
  setMinutesToSleep: Dispatch<SetStateAction<number>>;
  periods: string;
  setPeriods: Dispatch<SetStateAction<string>>;
  wakeUpTime?: Dayjs;
  setWakeUpTime: Dispatch<SetStateAction<Dayjs | undefined>>;
}

const AppContext = createContext<AppContextType | {}>({});

export const AppContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [minutesToSleep, setMinutesToSleep] = useState<number>(15);
  const [periods, setPeriods] = useState<string>("5");
  const [wakeUpTime, setWakeUpTime] = useState<Dayjs>();

  useEffect(() => {
    if (!minutesToSleep) {
      setMinutesToSleep(0);
    }
  }, [setMinutesToSleep]);
  useEffect(() => {
    if (!periods) {
      setPeriods("0");
    }
  }, [periods]);

  useEffect(() => {
    calculateSleepCycle();
  }, [minutesToSleep, periods]);

  const calculateSleepCycle = () => {
    const now = dayjs();

    if (!minutesToSleep || !periods) {
      return;
    }

    const result = now
      .add(minutesToSleep, "minute")
      .add(90 * parseInt(periods), "minute");

    console.log("aaa", result);
    setWakeUpTime(result);
  };

  const contextValues: AppContextType = {
    minutesToSleep,
    setMinutesToSleep,
    periods,
    setPeriods,
    wakeUpTime,
    setWakeUpTime,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
