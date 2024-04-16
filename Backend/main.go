package main

import (
	"encoding/json"
	
	"log"
	"net/http"

	"github.com/go-redis/redis/v8"
	"github.com/gorilla/mux"
)

// Card represents a game card
type Card string

const (
	Cat     Card = "cat"
	Bomb    Card = "bomb"
	Defuse  Card = "defuse"
	Shuffle Card = "shuffle"
)

// User represents a game user
type User struct {
	Username string `json:"username"`
	Points   int    `json:"points"`
}

var rdb *redis.Client

func getLeaderboard(w http.ResponseWriter, r *http.Request) {
	if rdb == nil {
		http.Error(w, "Failed to connect to Redis", http.StatusInternalServerError)
		return
	}

	users, err := rdb.ZRevRangeByScore(r.Context(), "leaderboard", &redis.ZRangeBy{
		Min:    "-inf",
		Max:    "+inf",
		Offset: 0,
		Count:  10, // top 10 users
	}).Result()
	if err != nil {
		log.Printf("Error fetching leaderboard data: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Convert leaderboard data to JSON
	json.NewEncoder(w).Encode(users)
}

func createUser(w http.ResponseWriter, r *http.Request) {
	if rdb == nil {
		http.Error(w, "Failed to connect to Redis", http.StatusInternalServerError)
		return
	}

	// Parse username from request body
	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Store the user data in Redis or your database
	// Example:
	err = rdb.HSet(r.Context(), user.Username, "points", 0).Err()
	if err != nil {
		log.Printf("Error creating user: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Respond with success message
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("User created successfully"))
}

func main() {
	// Connect to Redis
	rdb = redis.NewClient(&redis.Options{
		Addr: "redis-18911.c330.asia-south1-1.gce.cloud.redislabs.com:18911",
		Password: "uiqB6euP6ai1RzLRZ7JEYfSfn8t3sslK", 
		DB:0,  
	})

	// Test Redis connection
	_, err := rdb.Ping(rdb.Context()).Result()
	if err != nil {
		log.Printf("Failed to connect to Redis: %v", err)
	}

	// Create a new router
	r := mux.NewRouter()

	// Define API routes
	r.HandleFunc("/api/leaderboard", getLeaderboard).Methods("GET")
	r.HandleFunc("/api/user", createUser).Methods("POST")

	// Start the HTTP server
	log.Fatal(http.ListenAndServe(":8080", r))
}