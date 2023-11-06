//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Get the "buttons" div by its id
  const buttonsDiv = document.getElementById("buttons");

  // Add audio file names and button labels here
  const soundData = [
    { file: "sound1.mp3", label: "Sound 1" },
    { file: "sound2.mp3", label: "Sound 2" },
    { file: "sound3.mp3", label: "Sound 3" },
  ];

  // Create audio elements and buttons for each sound
  soundData.forEach((sound) => {
    const audio = new Audio(`sounds/${sound.file}`);

    // Create a button element with class "btn"
    const button = document.createElement("button");
    button.className = "btn";
    button.textContent = sound.label;

    // Add a click event listener to play the audio when the button is clicked
    button.addEventListener("click", () => {
      audio.play();
    });

    buttonsDiv.appendChild(button);
  });

  // Create a stop button with class "stop" to stop all audio
  const stopButton = document.createElement("button");
  stopButton.className = "stop";
  stopButton.textContent = "Stop All";

  // Add a click event listener to stop all audio when the stop button is clicked
  stopButton.addEventListener("click", () => {
    soundData.forEach((sound) => {
      const audio = new Audio(`sounds/${sound.file}`);
      audio.pause();
      audio.currentTime = 0;
    });
  });

  buttonsDiv.appendChild(stopButton);
});
