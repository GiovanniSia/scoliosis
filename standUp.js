const notifier = require('node-notifier');
const player = require('node-wav-player');
const path = require('path');

const soundPath = path.join(__dirname, 'messi.wav');
const videoPath = path.join(__dirname, 'video.mp4');

function remindToStandUp() {
    setInterval(async () => {
        // Mostrar notificación
        notifier.notify({
            title: '¡Hora de levantarse!',
            message: 'Has estado sentado durante una hora. Es hora de moverse un poco.',
            sound: false,
            wait: false
        });

        // Reproducir sonido
        try {
            await player.play({ path: soundPath });
            console.log('Sonido reproducido.');

            // Cargar y mostrar video dinámicamente
            const open = await import('open');
            await open.default(videoPath);
            console.log('Video mostrado.');
        } catch (error) {
            console.error('Error al reproducir el sonido o mostrar el video:', error);
        }

    }, 100 * 1000);
}

remindToStandUp();
