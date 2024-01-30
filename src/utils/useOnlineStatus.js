import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, SetonlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      SetonlineStatus(true);
    });
    window.addEventListener("offline", () => {
      SetonlineStatus(false);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
