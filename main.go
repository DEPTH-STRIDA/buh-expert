package main

import (
	"AccountingExpert/bot"
	dataBase "AccountingExpert/dataBase"
	site "AccountingExpert/site"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
)

var mainAdmin string
var mainAdminId int64

func main() {
	//////////////////////////////////////////////////////////////////////
	////////////////////////      БОТ       //////////////////////////////
	//////////////////////////////////////////////////////////////////////
	go bot.CreateTgBot(os.Getenv("buh_expert"))
	ip := os.Getenv("APP_IP")
	port := os.Getenv("APP_PORT")
	addr := flag.String("addr", (ip + ":" + port), "Сетевой адрес веб-сервера")
	flag.Parse()
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
	templateCache, err := site.NewTemplateCache("./ui/html/")
	if err != nil {
		errorLog.Fatal(err)
	}
	app := &site.Application{
		ErrorLog:      errorLog,
		InfoLog:       infoLog,
		TemplateCache: templateCache,
	}
	srv := &http.Server{
		Addr:     *addr,
		ErrorLog: errorLog,
		Handler:  app.Routes(),
	}

	infoLog.Printf("Запуск сервера на %s", *addr)
	mainAdmin, mainAdminId = dataBase.ShowMainAdmin()
	infoLog.Printf("Админ: %s", mainAdmin)
	infoLog.Printf("ID: %d", mainAdminId)

	dataBase.DataWorkes = dataBase.ShowWorkersIDs()
	fmt.Println("Сотрудники: ", dataBase.DataWorkes)
	fmt.Println("-------------------------------------------------------------")
	err = srv.ListenAndServe()
	errorLog.Fatal(err)
}
