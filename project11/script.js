const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt  to Select Media Stream, Pass video to element then play.
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch {
    console.log("error", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // start Picture in Picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
