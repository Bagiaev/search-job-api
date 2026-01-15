package main

import (
	"search-job/internal/service"
	logs "search-job/pkg"

	"github.com/labstack/echo/v4"
)

func main() {
	// создаем логгер
	logger := logs.NewLogger(false)

	// подключаемся к базе
	db, err := PostgresConnection()
	if err != nil {
		logger.Fatal(err)
	}

	svc := service.NewService(db, logger)

	router := echo.New()
	// создаем группу api
	api := router.Group("api")

	api.GET("/resume/:id", svc.GetResume)
	api.POST("/resume", svc.CreateResume)
	// запускаем сервер, чтобы слушал 8000 порт
	router.Logger.Fatal(router.Start(":8000"))
}
