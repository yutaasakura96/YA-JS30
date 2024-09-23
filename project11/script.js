const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass video to element, then play.
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Error occurred: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button to prevent multiple requests
  button.disabled = true;
  // Start Picture-in-Picture mode
  await videoElement.requestPictureInPicture();
  // Re-enable button after entering Picture-in-Picture
  button.disabled = false;
});

// On page load, prompt the user to select a media stream
selectMediaStream();
