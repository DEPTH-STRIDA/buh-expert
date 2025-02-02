package email

import (
	"fmt"
	"net/smtp"
)

func SendMailSimple(name string, mail string, phone string, problem string) error {
	var msg []byte
	if problem != "" {
		msg = []byte("Subject:Поступила заявка\nИмя: " + name + "\nПочта: " + mail + "\nТелефон: " + phone + "\nПроблема: " + problem)
	} else {
		msg = []byte("Subject:Поступила заявка\nИмя: " + name + "\nПочта: " + mail + "\nТелефон: " + phone)
	}
	auth := smtp.PlainAuth("", "", "", "mail.netangels.ru")
	err := smtp.SendMail("mail.netangels.ru:25", auth, "", []string{""}, msg)
	if err != nil {
		fmt.Println(err)
	}
	return nil
}
