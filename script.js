const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Async func to prompt user to select media stream, pass to our video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        // Catch errors here
        console.log('whoops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    // Disable the Button when click on it
    button.disabled = true// Start Picture in Picture
    await videoElement.requestPictureInPicture()
    // Reset Button
    button.disabled = false
})

// Call function On Load
selectMediaStream()