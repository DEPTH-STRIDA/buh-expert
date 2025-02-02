package site

import (
	"net/http"
)

func (app *Application) Routes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/", app.home)
	mux.HandleFunc("/save_info", app.save_info)
	mux.HandleFunc("/yandex_f4e9350effdb4931.html", app.ver)
	mux.HandleFunc("/sitemap.xml", app.sitemap)
	mux.HandleFunc("/about", app.successful)
	mux.HandleFunc("/calculator", app.calculator)
	mux.HandleFunc("/get_calculator_parametres", app.get_calculator_parametres)
	mux.HandleFunc("/telegram_form", app.telegram_form)
	mux.HandleFunc("/succes_tgForm", app.succes_tgForm)

	fileServer := http.FileServer(http.Dir("./ui/static/"))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))
	return mux
}
