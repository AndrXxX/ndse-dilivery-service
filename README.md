# Курсовой проект "NDSE - Настройка окружения и Express.js" (служба доставки)

ТЗ доступно по [ссылке](https://github.com/netology-code/ndse-diplom).

Курсовой проект представляет собой службу доставки. Ваша задача — создать работающее бэкенд-приложение, всеми основными функциями которого можно пользоваться.

## Запуск приложения

1. Для разработки:
    * `docker compose -f docker-compose.dev.yml up`

2. Из компактных образов:
    * `docker compose -f docker-compose.build.yml up`

3. Из готовых образов на hub.docker.com:
    * `docker compose -f docker-compose.prod.yml up`

При стандартных настройках приложение будет доступно по адресу [http://localhost:3002/](http://localhost:3002/).

Можно изменить настройки запуска docker-compose с помощью .env. Пример файла: [.env-example](config/.env.example)
Нужно переименовать его в `.env` и запускать приложение добавив конфиг:

1. Для разработки:
   * `docker compose --env-file config/.env -f docker-compose.dev.yml up`

2. Из компактных образов:
   * `docker compose --env-file config/.env -f docker-compose.build.yml up`

3. Из готовых образов на hub.docker.com:
   * `docker compose --env-file config/.env -f docker-compose.prod.yml up`

<details>
<summary>Описание настроек .env для docker-compose</summary>

* `DB_NAME` - название БД
* `DB_USERNAME` - имя пользователя
* `DB_PASSWORD` - имя пользователя

Важно! Вышеуказанные настройки корректно проинициализируются в MongoDB только при первом запуске.
Если в дальнейшем их изменить, то эффекта не будет. Для применения нужно будет очистить папку `db` и после этого запускать `docker-compose`

* `COOKIE_SECRET` - параметр для express session
* `DELIVERY_SERVICE_PORT` - порт, по которому будет доступно приложение на локальном компьютере
* `MONGODB_PORT` - внешний порт для подключения к MongoDb
* `MONGO_EXPRESS_PORT` - внешний порт, по которому будет доступна админка MONGO EXPRESS
</details>

Также можно настроить `.env` в самом приложении.
Пример файла: [.env-example](delivery/app/.env-example)
