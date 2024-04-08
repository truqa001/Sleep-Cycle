import "./App.scss";
import { AppContextType, useAppContext } from "src/AppContext";
import { Inputs } from "@components/Inputs/Inputs";
import { Typography } from "@mui/material";
import { Clock } from "@components/Clock/Clock";
import { StarsBackground } from "@components/StarsBackground/StarsBackground";
import { InfoButton } from "@components/InfoButton/InfoButton";

function App() {
  const { wakeUpTime } = useAppContext() as AppContextType;
  const wakeUpTimeString = wakeUpTime ? wakeUpTime.format("HH:mm") : "—:—";

  return (
    <div className="App flex flex-col">
      <div className="flex flex-col p-5 items-center" style={{ zIndex: 99 }}>
        <InfoButton />

        <div className="mb-20">
          <div className="mb-10">
            <Typography variant="h5" component="h5">
              Wake up at
            </Typography>

            <Typography variant="h4" component="h4" fontWeight={700}>
              {wakeUpTimeString}
            </Typography>
          </div>

          <Clock />
        </div>

        <Inputs />

        <StarsBackground numStars={100} />
      </div>
    </div>
  );
}

export default App;
