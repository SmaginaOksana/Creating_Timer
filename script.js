const globalFunction = () => {
  let timer;
  let seconds = 0;
  let isRunning = false;

  const formatTimer = () => {
    document.querySelector(".timer").innerHTML = `${Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0")}:${Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  const start = () => {
    if (!isRunning) {
      isRunning = true;
      timer = setInterval(() => {
        formatTimer();
        seconds++;
      }, 1000);
    }
  };

  const stop = () => {
    if (isRunning) {
      isRunning = false;
      clearInterval(timer);
      formatTimer();
    }
  };

  const reset = () => {
    if (isRunning) {
      seconds = 0;
      stop();
    }
  };

  formatTimer();

  document.querySelector(".startBTN").addEventListener("click", start);
  document.querySelector(".stopBTN").addEventListener("click", stop);
  document.querySelector(".resetBTN").addEventListener("click", reset);
};

globalFunction();
