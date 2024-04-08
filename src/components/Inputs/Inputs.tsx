import { FormControl, TextField } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AppContextType, useAppContext } from "src/AppContext";

export const Inputs = () => {
  const { setMinutesToSleep, setPeriods, minutesToSleep } =
    useAppContext() as AppContextType;

  return (
    <FormControl fullWidth className="max-w-[500px]">
      <TextField
        required
        id="outlined-required"
        label="Periods"
        type="nu"
        style={{ margin: "15px 0" }}
        inputProps={{ inputMode: "numeric" }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const regex = /^[0-9\b]+$/;
          if (e.target.value === "" || regex.test(e.target.value)) {
            setPeriods(e.target.value);
          } else {
            e.target.value = "";
          }
        }}
        placeholder="Suggested a cycle of 5"
      />

      <MobileTimePicker
        label="Time taken to sleep (minutes)"
        onChange={(newValue: any) => setMinutesToSleep(newValue.$m)}
        defaultValue={dayjs().set("minute", minutesToSleep)}
        views={["minutes"]}
      />
    </FormControl>
  );
};
