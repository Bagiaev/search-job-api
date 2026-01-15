package service

import (
	"net/http"
	"search-job/internal/models"
	"strconv"

	"github.com/labstack/echo/v4"
)

func (s *Service) CreateResume(c echo.Context) error {
	var resume models.Resume
	err := c.Bind(&resume)
	if err != nil {
		s.logger.Error(err)
		return c.JSON(s.NewError(InvalidParams))
	}

	repo := s.resumeRepo
	err = repo.RCreateResume(&resume)
	if err != nil {
		s.logger.Error(err)
		return c.JSON(s.NewError(InternalServerError))
	}

	return c.String(http.StatusOK, "Ok")
}

func (s *Service) GetResume(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		s.logger.Error(err)
		return c.JSON(s.NewError(InvalidParams))
	}

	repo := s.resumeRepo

	report, err := repo.RGetResumeById(id)
	if err != nil {
		s.logger.Error(err)
		return c.JSON(s.NewError(InternalServerError))
	}

	return c.JSON(http.StatusOK, Response{Object: report})
}
