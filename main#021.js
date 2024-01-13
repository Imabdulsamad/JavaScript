// JavaScript # 21

// document.addEventListener("DOMContentLoaded", ()=>{
//     const captureButton = document.getElementById('captureButton')

//     captureButton.addEventListener('click', async()=>{
//         try{
//             const stream = await navigator.mediaDevices.getDisplayMedia()
//             const recorder = new MediaRecorder(stream)
//             const chunk = []

//           recorder.ondataavailable() = (e)=>{
//             if(e.data.size > 0){
//                 chunk.push(e.data)
//             }
//           }

//           recorder.onstop()= ()=>{
//             const blob = new Blob(chunks, {type: 'video/webm'})
//             const url = URL.createObjectURL(blob)
//             const a = document.createElement('a')
//             a.href = url
//             a.download = 'capture.webm'
//             document.appendChild(a)
//             a.click()
//             document.removeChild(a)
//           }

//           recorder.start()
//         }

//         const [video] = stream.getVideoTracks()

//         video.addEventListener("eneded", ()=>{
//             recorder.stop()
//         })

//     })catch(error){
//         console.log("Recording masle kar rhi hai", error)
//     }
// })

document.addEventListener("DOMContentLoaded", async () => {
    const captureButton = document.getElementById('captureButton');

    try {
        const stream = await navigator.mediaDevices.getDisplayMedia();
        const recorder = new MediaRecorder(stream);
        const chunks = [];

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunks.push(e.data);
            }
        };

        recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'capture.webm';
            document.body.appendChild(a); // Use document.body instead of document
            a.click();
            document.body.removeChild(a); // Use document.body instead of document
        };

        recorder.start();

        const [video] = stream.getVideoTracks();
    
        video.addEventListener("ended", () => {
            recorder.stop();
        });
    } catch (error) {
        console.log("Recording failed", error);
    }
});