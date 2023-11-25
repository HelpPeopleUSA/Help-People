document.addEventListener("DOMContentLoaded", function () {
    // Получаем кнопку и поля ввода
    var subscribeBtn = document.getElementById("subscribeBtn");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    // Добавляем обработчик события для кнопки
    subscribeBtn.addEventListener("click", function () {
        // Получаем значения из полей ввода
        var name = nameInput.value;
        var email = emailInput.value;

        // Проверяем, что оба поля заполнены
        if (name && email) {
            // Формируем данные для отправки
            var data = {
                to: email,
                subject: name,
                body: name + ", Hello!"
            };

            // Выполняем отправку данных (ваш способ отправки данных)
            // Пример использования fetch для отправки данных на сервер
            fetch("server.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                // Обработка результата, например, вы можете показать уведомление о успешной отправке
                console.log("Письмо успешно отправлено!");
            })
            .catch(error => {
                // Обработка ошибок
                console.error("Ошибка при отправке письма:", error);
            });
        } else {
            // Если какое-то из полей не заполнено, вы можете предпринять необходимые действия
            console.log("Пожалуйста, заполните все поля.");
        }
    });
});
