// Даннный пакет содержит переменные, функции и структуры, необходимые для работы телеграм-бота.
package bot

import (
	"AccountingExpert/dataBase"
	"errors"
	"fmt"
	"strings"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

const (
	possibleEmployeesFilename = "possibleEmployees.json"
	workersFilename           = "Workers.json"
)

var numericKeyboarAdmin = tgbotapi.NewReplyKeyboard(
	tgbotapi.NewKeyboardButtonRow(
		tgbotapi.NewKeyboardButton("Добавить сотрудника"),
		tgbotapi.NewKeyboardButton("Закрыть меню"),
	),
)

// Функция, которая обрабатывает команды от пользователя.
func command(fromUserMsg *tgbotapi.Message, toUserMsg *tgbotapi.MessageConfig) {
	switch fromUserMsg.Command() {
	default:
		//Если команда от пользователя не распознается
		toUserMsg.Text = "("
	}
}

// Обрабатывает текстовых сообщений от пользователя.
func text(fromUserMsg *tgbotapi.Message, toUserMsg *tgbotapi.MessageConfig) {
	var err error
	switch strings.ToLower(fromUserMsg.Text) {
	case "work":
		err = work(fromUserMsg)
		if err != nil {
			fmt.Println(err)
			return
		}
		toUserMsg.Text = "Спасибо"
	case "добавить сотрудника":
		err, ReplyMarkup := adminMenu(fromUserMsg, toUserMsg)
		if err != nil {
			fmt.Println(err.Error())
			return
		}
		toUserMsg.ReplyMarkup = ReplyMarkup
		toUserMsg.Text = "Возможные сотрудники:"
	case "1":
		_, adminId := dataBase.ShowMainAdmin()
		if adminId != fromUserMsg.Chat.ID {

			return
		}
		toUserMsg.Text = "Меню открыто"
		toUserMsg.ReplyMarkup = numericKeyboarAdmin
	case "закрыть меню":
		_, adminId := dataBase.ShowMainAdmin()
		if adminId != fromUserMsg.Chat.ID {
			return
		}
		toUserMsg.Text = "Меню закрыто"
		toUserMsg.ReplyMarkup = tgbotapi.NewRemoveKeyboard(true)
	default:
		//Если сообщение от пользователя не распознается
		toUserMsg.Text = "("
	}

}
func SendMessage(id int64, message string) error {
	msg := tgbotapi.NewMessage(id, message)
	if _, err := Bot.Send(msg); err != nil {
		return err
	}
	return nil
}
func work(fromUserMsg *tgbotapi.Message) error {
	workers := dataBase.ShowWorkersIDs()
	for _, v := range workers {
		if v.WorkersID == fromUserMsg.Chat.ID {
			return errors.New("Работник уже записан")
		}
	}
	possibleEmployees := dataBase.Company{}
	err := dataBase.ReadJSONFromFile(possibleEmployeesFilename, &possibleEmployees)
	if err != nil {
		return err
	}
	for _, v := range possibleEmployees.Employees {
		if v.Id == fromUserMsg.Chat.ID {
			return errors.New("Работник уже записан")
		}
	}
	employee := dataBase.Employee{}
	employee.Id = fromUserMsg.Chat.ID
	text := fromUserMsg.Chat.FirstName + " " + fromUserMsg.Chat.LastName + " @" + fromUserMsg.Chat.UserName
	employee.Text = text
	possibleEmployees.Employees = append(possibleEmployees.Employees, employee)
	dataBase.WriteJSONToFile(possibleEmployeesFilename, &possibleEmployees)
	return nil
}
func adminMenu(fromUserMsg *tgbotapi.Message, toUserMsg *tgbotapi.MessageConfig) (error, tgbotapi.InlineKeyboardMarkup) {
	_, adminId := dataBase.ShowMainAdmin()
	if adminId != fromUserMsg.Chat.ID {
		return errors.New("Команда не от админа"), tgbotapi.InlineKeyboardMarkup{}
	}
	//Работники
	possibleEmployees := dataBase.Company{}
	err := dataBase.ReadJSONFromFile(possibleEmployeesFilename, &possibleEmployees)
	if err != nil {
		return err, tgbotapi.InlineKeyboardMarkup{}
	}
	if len(possibleEmployees.Employees) == 0 {
		toUserMsg.Text = "Нет возможных сотрудников"
		return errors.New("Нет возможных сотрудников"), tgbotapi.InlineKeyboardMarkup{}
	}
	tempMenu := [][]tgbotapi.InlineKeyboardButton{}
	row := []tgbotapi.InlineKeyboardButton{}
	for i, v := range possibleEmployees.Employees {
		row = append(row, tgbotapi.NewInlineKeyboardButtonData(v.Text, string(v.Id)))
		if (i+1)%3 == 0 {
			tempMenu = append(tempMenu, row)
			row = []tgbotapi.InlineKeyboardButton{}
		}
	}
	if len(row) <= 2 && len(row) > 0 {
		tempMenu = append(tempMenu, row)
	}
	return nil, tgbotapi.InlineKeyboardMarkup{InlineKeyboard: tempMenu}
}
func callbackMessage(fromUserMsg *tgbotapi.CallbackConfig, toUserMsg *tgbotapi.MessageConfig) error {
	possibleEmployees := dataBase.Company{}
	possibleEmployees_copy := dataBase.Company{}
	err := dataBase.ReadJSONFromFile(possibleEmployeesFilename, &possibleEmployees)
	if err != nil {
		return err
	}
	workers := dataBase.ShowWorkersIDs()
	for _, v := range possibleEmployees.Employees {
		if string(v.Id) == fromUserMsg.Text {
			workers = append(workers, dataBase.WorkersData{v.Text, v.Id})
		} else {
			possibleEmployees_copy.Employees = append(possibleEmployees_copy.Employees, v)
		}
	}
	dataBase.WriteJSONToFile(possibleEmployeesFilename, &possibleEmployees_copy)
	dataBase.WriteJSONToFile(workersFilename, &workers)
	toUserMsg.Text = "Сотрудник успешно добавлен"
	return nil
}
