// @ts-ignore
import AnalogClock from "analog-clock-react";
import "./Clock.scss";
import { useAppContext, AppContextType } from "src/AppContext";

export const Clock = () => {
  const { wakeUpTime } = useAppContext() as AppContextType;

  let options = {
    width: "250px",
    border: true,
    handColors: {
      second: "none",
      minute: "#ffffff",
      hour: "#ffffff",
    },
    useCustomTime: true,

    ...(wakeUpTime
      ? {
          minutes: wakeUpTime.minute(),
          hours: wakeUpTime.hour(),
        }
      : {
          minutes: 0,
          hours: 0,
        }),
  };

  return <AnalogClock {...options} />;
};
