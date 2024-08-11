const notifier = require('node-notifier');
const player = require('node-wav-player');
const path = require('path');

const soundPath = path.join(__dirname, 'messi.wav');

function remindToStandUp() {
    setInterval(() => {
        // Mostrar notificación
        notifier.notify({
            title: '¡Hora de levantarse!',
            message: 'Has estado sentado durante una hora. Es hora de moverse un poco.',
            sound: false, // No reproducir sonido con node-notifier
            wait: false
        });

        // Reproducir sonido
        player.play({
            path: soundPath
        }).then(() => {
            console.log('Sonido reproducido.');
        }).catch((error) => {
            console.error('Error al reproducir el sonido:', error);
        });
    }, 10 * 1000); // Ajusta el intervalo para pruebas
}

remindToStandUp();