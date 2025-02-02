package site

import (
	"AccountingExpert/bot"
	"AccountingExpert/dataBase"
	mmail "AccountingExpert/mail"
	"fmt"
	"net/http"
)

func (app *Application) home(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		app.notFound(w)
		return
	}
	app.render(w, r, "home.page.tmpl")
}
func (app *Application) ver(w http.ResponseWriter, r *http.Request) {
	app.render(w, r, "yandex_f4e9350effdb4931.page.tmpl")
}

func (app *Application) sitemap(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./ui/static/other/sitemap.xml")
}

// func find_file(w http.ResponseWriter, r *http.Request)
func (app *Application) save_info(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")
	mail := r.FormValue("mail")
	phone := r.FormValue("phone")
	problem := r.FormValue("problem")

	/////////////////////////////////////////////////////////////////////
	//////////////////  Отпрака сообщений в телеграм  ///////////////////
	/////////////////////////////////////////////////////////////////////
	var err error
	msg := "Поступила заявка\nИмя: " + name + "\nПочта: " + mail + "\nТелефон: " + phone + "\nПроблема: " + problem
	_, adminId := dataBase.ShowMainAdmin()
	err = bot.SendMessage(int64(adminId), msg)
	if err != nil {
		fmt.Println(err)
	}
	workers := dataBase.ShowWorkersIDs()
	for _, v := range workers {
		bot.SendMessage(v.WorkersID, msg)
	}
	//Отправка сообщений на почту.
	err = mmail.SendMailSimple(name, mail, phone, problem)
	if err != nil {
		app.serverError(w, err)
	}

	type form1 struct {
		Name    string
		Mail    string
		Phone   string
		Problem string
	}
	data := form1{Name: name, Mail: mail, Phone: phone, Problem: problem}
	ts, ok := app.TemplateCache["succes.page.tmpl"]
	if !ok {
		fmt.Println(app.TemplateCache)
		app.serverError(w, fmt.Errorf("Шаблон %s не существует!", name))
		return
	}

	err = ts.Execute(w, &data)
	if err != nil {
		app.serverError(w, err)
	}

	//http.Redirect(w, r, "/successful", http.StatusSeeOther)
	//http.Redirect(w, r, "/about", http.StatusSeeOther)
}
func (app *Application) successful(w http.ResponseWriter, r *http.Request) {
	app.render(w, r, "succes.page.tmpl")
}
func (app *Application) calculator(w http.ResponseWriter, r *http.Request) {
	app.render(w, r, "calc.page.tmpl")
}
func (app *Application) get_calculator_parametres(w http.ResponseWriter, r *http.Request) {
	CP := dataBase.Calc_parameters{}
	err := dataBase.ReadJSONFromFile("Calc_parameters.json", &CP)
	if err != nil {
		w.WriteHeader(http.StatusBadGateway)
		fmt.Fprintf(w, err.Error())
		return
	}
	strings, err := dataBase.SaveCalc_parametresAsString(&CP)
	if err != nil {
		w.WriteHeader(http.StatusBadGateway)
		fmt.Fprintf(w, err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
	app.InfoLog.Output(2, "Пользователь запросил параметры калькулятора.")

	fmt.Fprintf(w, strings)
}
func (app *Application) telegram_form(w http.ResponseWriter, r *http.Request) {
	app.render(w, r, "tgForm.page.tmpl")
}

func (app *Application) succes_tgForm(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")
	mail := r.FormValue("mail")
	phone := r.FormValue("phone")
	problem := r.FormValue("problem")

	/////////////////////////////////////////////////////////////////////
	//////////////////  Отпрака сообщений в телеграм  ///////////////////
	/////////////////////////////////////////////////////////////////////
	var err error
	msg := "Поступила заявка\nИмя: " + name + "\nПочта: " + mail + "\nТелефон: " + phone + "\nПроблема: " + problem
	_, adminId := dataBase.ShowMainAdmin()
	err = bot.SendMessage(int64(adminId), msg)
	if err != nil {
		fmt.Println(err)
	}
	workers := dataBase.ShowWorkersIDs()
	for _, v := range workers {
		bot.SendMessage(v.WorkersID, msg)
	}
	//Отправка сообщений на почту.
	err = mmail.SendMailSimple(name, mail, phone, problem)
	if err != nil {
		app.serverError(w, err)
	}

	type form1 struct {
		Name    string
		Mail    string
		Phone   string
		Problem string
	}
	data := form1{Name: name, Mail: mail, Phone: phone, Problem: problem}
	ts, ok := app.TemplateCache["succes_tgForm.page.tmpl"]
	if !ok {
		fmt.Println(app.TemplateCache)
		app.serverError(w, fmt.Errorf("Шаблон %s не существует!", name))
		return
	}

	err = ts.Execute(w, &data)
	if err != nil {
		app.serverError(w, err)
	}

	//http.Redirect(w, r, "/successful", http.StatusSeeOther)
	//http.Redirect(w, r, "/about", http.StatusSeeOther)
}
