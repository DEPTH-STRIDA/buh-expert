package bot

type Update struct {
	UpdateId int     `json:"update_id"`
	Message  Message `json:"message"`
}
type Message struct {
	Chat Chat   `json:"chat"`
	Text string `json:"text"`
}
type Chat struct {
	ChatId int `json:"id"`
}
type RestRespone struct {
	Result []Update `json:"result"`
}
type User struct {
	Name, Mail, Phone, Problem string
}
type BotMessage struct {
	ChatId int    `json:"chat_id"`
	Text   string `json:"text"`
}
