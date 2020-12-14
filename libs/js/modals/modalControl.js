import { settingsModal } from './settingsModal/settingsModal.js';
import { infoModal } from './infoModal/infoModal.js';
import { mapModal } from './mapModal/mapModal.js';
import { weatherModal } from './weatherModal/weatherModal.js';
import { quizModal } from './quizModal/quizModal.js';

$('#settings-modal-content').html(settingsModal);
$('#info-modal-content').html(infoModal);
$('#map-modal-content').html(mapModal);
$('#weather-modal-content').html(weatherModal);
$('#quiz-modal-content').html(quizModal);
