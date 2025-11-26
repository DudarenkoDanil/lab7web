function showTab(tabId) {
    // Скрыть все вкладки
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Убрать активный класс у всех кнопок
    var buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Показать выбранную вкладку
    document.getElementById(tabId).style.display = 'block';
    // Сделать кнопку активной
    document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
}

function checkIntersection() {
    var a = parseFloat(document.form1.a.value);
    var b = parseFloat(document.form1.b.value);
    var c = parseFloat(document.form1.c.value);
    var discriminant = b * b - 4 * a * c;
    var result = "";

    if (discriminant > 0) {
        result = "Парабола пересекает ось X в двух точках.";
    } else if (discriminant === 0) {
        result = "Парабола пересекает ось X в одной точке.";
    } else {
        result = "Парабола не пересекает ось X.";
    }

    document.form1.result.value = result;
}

function resetForm1() {
    document.form1.a.value = "";
    document.form1.b.value = "";
    document.form1.c.value = "";
    document.form1.result.value = "";
}

function countEvenNumbers() {
    var start = parseInt(document.form2.start.value);
    var end = parseInt(document.form2.end.value);
    var count = 0;

    if (isNaN(start) || isNaN(end)) {
        alert("Пожалуйста, введите корректные числа.");
        return;
    }

    for (var i = start; i <= end; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }

    document.form2.result.value = count;
}

function resetForm2() {
    document.form2.start.value = "";
    document.form2.end.value = "";
    document.form2.result.value = "";
}

// Инициализация страницы с показом первой вкладки
window.onload = function() {
    showTab('task1');
}
