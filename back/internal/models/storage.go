package models

import "time"

type Resume struct {
	ID         int64     `json:"id"`
	UserID     int64     `json:"user_id"`
	Name       string    `json:"name"`
	Sku        string    `json:"sku"`
	Barcode    string    `json:"barcode"`
	CreatedAt  time.Time `json:"created_at"`
	Updated_at time.Time `json:"updated_at"`
	Deleted_at time.Time `json:"deleted_at"`
}
