// Даннный пакет содержит телеграм-бота.
package bot

import (
	"fmt"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

var Bot *tgbotapi.BotAPI

func CreateTgBot(Token string) {
	if Token == "" {
		fmt.Println("Пустой токен бота. Скорее всего не найдена переменная среды. controller.go #15")
		return
	}
	var err error
	Bot, err = tgbotapi.NewBotAPI(Token)
	if err != nil {
		//log.Panic(err)
		fmt.Println(err.Error())
	}

	//Создание канала, куда приходят сообщения для обработки
	u := tgbotapi.NewUpdate(0)
	u.Timeout = 60
	updates := Bot.GetUpdatesChan(u)
	//Обработка команд от бота
	for update := range updates {
		//Обработка текстовых сообщений: текст, команды.
		if update.Message != nil {
			//Создание структуры ответного сообщения
			msg := tgbotapi.NewMessage(update.Message.Chat.ID, "")
			//Вывод в консоль id отправляющего и его команду.
			fmt.Println(update.Message.Chat.ID, ": ", update.Message.Text)

			//Если пользователь отправлю команду
			if update.Message.IsCommand() {
				command(update.Message, &msg)
			} else {
				text(update.Message, &msg)
			}
			if msg.Text == "" {
				continue
			}
			if _, err := Bot.Send(msg); err != nil {
				fmt.Println(err.Error())
			}
		} else if update.CallbackQuery != nil {
			callback := tgbotapi.NewCallback(update.CallbackQuery.ID, update.CallbackQuery.Data)
			if _, err := Bot.Request(callback); err != nil {
				fmt.Println(err.Error())
			}
			msg := tgbotapi.NewMessage(update.CallbackQuery.Message.Chat.ID, "")
			//Обработка команды.
			callbackMessage(&callback, &msg)
			//Отправка сообщения
			if _, err := Bot.Send(msg); err != nil {
				fmt.Println(err.Error())
			}
		}

	}
}
