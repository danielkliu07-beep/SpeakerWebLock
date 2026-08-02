# SpeakerWebLock
A speaker recognition web lock software

Steps for running this:

0. Make sure you have Docker Desktop installed

1. npm install (Installs node js and dependencies)

2. Go into the backend folder and create .env according to .env.example 

.env files and docker-compose.yaml files must have the same name for the following:
POSTGRES_USER - DB_USER
POSTGRES_PASSWORD - DB_PASSWORD
POSTGRES_DB - DB_NAME


?. In order to run this, run 'docker compose up --build -d' in your terminal, 'npm start' in the backend folder, and 