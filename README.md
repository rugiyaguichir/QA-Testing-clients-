# Тесты Cypress для Navigator Clients(edit and download)
Этот репозиторий содержит тесты Cypress для автоматизации тестирования [Client(edit and download)]. Тесты охватывают различные сценарии, включая взаимодействие с кнопками, текстовыми полями и проверку конкретных элементов на странице. 

# Что такое Cypress
Cypress - это инструмент для тестирования веб-приложений, который обеспечивает простоту использования, мощные возможности и быстрое выполнение тестов. Он предоставляет средства для автоматизации тестирования интерфейса веб-приложений, а также для взаимодействия с приложением так, как это делал бы пользователь.

## Предварительные требования

Перед запуском тестов Cypress убедитесь, что у вас установлены следующие компоненты:

- [Node.js](https://nodejs.org/)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

## Установка Cypress
1. Клонируйте этот репозиторий:
   ```bash
   git clone [https://github.com/rugiyaguichir/QA-Testing-clients-]
   cd cypress-test-cases
2. Установите зависимости:
   ```bash
   npm init
   npm install cypress --save-dev


3. Запустите Cypress
   ```bash
   npx cypress open

4. Запустите тесты, кликнув по файлу теста или используя Cypress test runner.
   ```bash
   npx cypress run --headed --spec .\cypress\e2e\edit.cy.js
# Структура проекта

      project-root/
      │
      ├── cypress/
      │   ├── e2e/                    # Тест кейсы
      │   ├── fixtures/               # Фикстуры для тестовых данных
      │   ├── integration/            # Тестовые сценарии
      │   ├── pageObjects/            # Шаблоны тестирования
      │   ├── support/                # Вспомогательные утилиты и конфигурация
      │   └── screenshots/            # Скриншоты, сохраняемые при провале тестов
      │
      ├── node_modules/               # Зависимости проекта
      ├── .gitignore                  # Файл для игнорирования файлов в Git
      ├── cypress.config.js           # Конфигурация Cypress
      ├── package.json                # Файл конфигурации Node.js
      ├── package-lock.json           # Файл конфигурации Node.js
      └── README.md                   # Документация проекта.


## Page object
Page Objects (Объекты страниц) в автоматизации тестирования — это шаблон проектирования, используемый для организации кода в автоматизированных тестах. Он помогает сделать код тестов более читаемым, управляемым и повторно используемым.
Зачем использовать Page Objects?
1. Улучшение читаемости кода.

2. Уменьшение дублирования кода.

3. Легкость обслуживания.
   
   В файле `.\cypress\e2e\login.cy.js` LoginPage предоставляет метод login, который абстрагирует детали ввода логина и пароля, а также нажатия на кнопку входа. В тесте мы просто вызываем этот метод, делая код более чистым и понятным.
## Описание тест кейсов

-Файл `.\cypress\e2e\login.cy.js`
Описание: Проверяет процесс авторизации на сайте. Вводит корректные учетные данные и убеждается, что пользователь успешно авторизован.

Шаги:

1. Открыть страницу входа.
2. Ввести корректные учетные данные.
3. Нажать кнопку "Войти".

Ожидаемый результат: Пользователь успешно авторизован и перенаправлен на страницу /clients.

-Файл `.\cypress\e2e\edit.cy.js`
Описание: Проверяет возможность редактирования информации о пользователях. Взаимодействует с формой редактирования, вносит изменения и убеждается, что данные сохранены.

Шаги:

1. Авторизоваться на сайте.
2. Перейти в список пользователей.
3. Нажать на Первого пользователя
4. Изменить информацию о пользователе (например, фамилию или номер телефона).
5. Сохранить изменения.

Ожидаемый результат: Изменения сохранены, и новые данные отображаются на странице профиля.

-Файл `.\cypress\e2e\download.cy.js`
Описание: Проверяет функционал скачивания информации о пользователях. Имитирует действие пользователя по скачиванию данных и проверяет выделенные данные.

Шаги:

1. Авторизоваться на сайте.
2. Перейти в список пользователей.
3. Нажать на Первого пользователя.
4. Нажать кнопку "Экспортировать CSV".
5. Нажать кнопку "снять все".
6. Нажать кнопку "выделить все".
7. Сохранить данные.
Ожидаемый результат: Файл CSV успешно скачан, содержит актуальную информацию о пользователях.

## gitignore

Файл .gitignore — это специальный файл, который используется в системе контроля версий Git для указания файлов и каталогов, которые не должны быть отслеживаемыми Git. Когда файл .gitignore присутствует в корневом каталоге Git-репозитория, Git использует его для определения, какие файлы и каталоги следует игнорировать при выполнении операций, таких как git add или git commit.
 Игнорировать каталог node_modules в проектах Node.js
 
node_modules/
   