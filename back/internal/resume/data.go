package resume

import (
	"context"

	"search-job/internal/models"
	"search-job/pkg/postgres"
)

type Repo struct {
	db *postgres.DB
}

func NewRepo(db *postgres.DB) *Repo {
	return &Repo{db: db}
}

func (r *Repo) RGetResumeById(ctx context.Context, id int) (*models.Resume, error) {
	var note models.Resume
	err := r.db.QueryRow(ctx, `SELECT id, name, city, job_title, email, phone, created_at FROM resume WHERE id = $1`, id).
		Scan(&note.ID, &note.Name, &note.City, &note.JobTitle, &note.Email, &note.Phone, &note.CreatedAt)
	if err != nil {
		return nil, err
	}
	return &note, nil
}

func (r *Repo) RCreateResume(ctx context.Context, resume *models.Resume) error {
	err := r.db.QueryRow(ctx, `INSERT INTO resume (user_id, name, city, job_title, email, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, created_at`,
		resume.UserID, resume.Name, resume.City, resume.JobTitle, resume.Email, resume.Phone).
		Scan(&resume.ID, &resume.CreatedAt)
	if err != nil {
		return err
	}
	return nil
}
