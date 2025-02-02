package site

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"runtime/debug"
)

type Application struct {
	ErrorLog      *log.Logger
	InfoLog       *log.Logger
	TemplateCache map[string]*template.Template
}

func (app *Application) serverError(w http.ResponseWriter, err error) {
	trace := fmt.Sprintf("%s\n%s", err.Error(), debug.Stack())
	app.ErrorLog.Output(2, trace)

	http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
}
func (app *Application) clientError(w http.ResponseWriter, status int) {
	http.Error(w, http.StatusText(status), status)
}
func (app *Application) notFound(w http.ResponseWriter) {
	app.clientError(w, http.StatusNotFound)
}
func (app *Application) render(w http.ResponseWriter, r *http.Request, name string) {
	ts, ok := app.TemplateCache[name]
	if !ok {
		fmt.Println(app.TemplateCache)
		app.serverError(w, fmt.Errorf("Шаблон %s не существует!", name))
		return
	}
	err := ts.Execute(w, nil)
	if err != nil {
		app.serverError(w, err)
	}
}
