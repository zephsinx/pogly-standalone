import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { StyledButton } from "../StyledComponents/StyledButton";
import { ClearConnectionSettings } from "../../Utility/ClearConnectionSettings";
import KickSelfReducer from "../../module_bindings/kick_self_reducer";
import { DebugLogger } from "../../Utility/DebugLogger";

interface IProp {
  type: string; //should be "timer" or "button"
  refreshTimer?: number;
  buttonText?: string;
  titleText: string;
  contentText: string;
  clearSettings: boolean;
  kickSelf?: boolean;
}

export const ErrorRefreshModal = (props: IProp) => {
  const [timer, setTimer] = useState<number>(props.refreshTimer || 5);
  const isOverlay: Boolean = window.location.href.includes("/overlay");

  //Clear out connection settings to prevent getting stuck
  if (props.clearSettings) ClearConnectionSettings();

  useEffect(() => {
    if (isOverlay) return;

    if (props.type !== "timer") return;

    DebugLogger("Initializing refresh");

    if (timer === 0) window.location.reload();

    setTimeout(function () {
      setTimer(timer - 1);
    }, 1000);
  }, [timer, isOverlay, props.type]);

  const handleClick = () => {
    DebugLogger("Handling refresh click");
    if (props.kickSelf) KickSelfReducer.call();

    window.location.reload();
  };

  if (isOverlay) return <></>;

  return (
    <Dialog open={true}>
      <DialogTitle sx={{ backgroundColor: "#0a2a47", color: "#ffffffa6", textAlign: "center" }}>
        {props.titleText}
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "#0a2a47", paddingBottom: "3px" }}>
        <DialogContentText sx={{ color: "#ffffffa6", textAlign: "center", paddingBottom: "8px" }}>
          {props.contentText}
        </DialogContentText>
        {props.type === "button" ? (
          <>
            <center>
              <StyledButton
                disabled={false}
                label={props.buttonText || "Refresh"}
                textColor="black"
                backgroundColor="#ffffffa6"
                hoverColor="white"
                onClick={handleClick}
              />
            </center>
          </>
        ) : (
          <>
            <DialogContentText sx={{ color: "#ffffffa6", textAlign: "center", paddingBottom: "8px" }}>
              Reloading in... {timer.toString()}
            </DialogContentText>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
