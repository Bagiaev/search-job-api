package resume

import (
	"database/sql"
	"search-job/internal/models"
)

type Repo struct {
	db *sql.DB
}

func NewRepo(db *sql.DB) *Repo {
	return &Repo{db: db}
}

func (r *Repo) RGetResumeById(id int) (*models.Resume, error) {
	var note models.Resume
	err := r.db.QueryRow(`SELECT id, name, city, job_title, email, phone, created_at FROM resume WHERE id = $1`, id).
		Scan(&note.ID, &note.Name, &note.City, &note.JobTitle, &note.Email, &note.Phone, &note.CreatedAt)
	if err != nil {
		return nil, err
	}
	return &note, nil
}

func (r *Repo) RCreateResume(resume *models.Resume) error {
	err := r.db.QueryRow(`INSERT INTO resume (user_id, name, city, job_title, email, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, created_at`,
		resume.UserID, resume.Name, resume.City, resume.JobTitle, resume.Email, resume.Phone).
		Scan(&resume.ID, &resume.CreatedAt)
	if err != nil {
		return err
	}
	return nil
}
