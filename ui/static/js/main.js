// main.js
import { updateCounter } from './counter.js';

document.addEventListener('DOMContentLoaded', function () {
    // Добавляем слушатель событий к <select>
    document.getElementById('FORMA_SOBSTVENNOSTI').addEventListener('change', function () {
        // Получаем выбранное значение
        var selectedValue = document.getElementById('FORMA_SOBSTVENNOSTI').value;

        // Вызываем функцию обновления счетчика из модуля counter.js
        updateCounter(selectedValue);
    });
});
