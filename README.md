Follow these steps to set up and run the project locally.

# Prerequisites

Make sure you have the following installed on your machine:

- Node.js and npm
- XAMPP or a similar local server environment

# Cloning the Repository

Clone the repository to your local machine:

git clone https://github.com/your-username/your-repo.git

# Frontend Setup
Change directory to the frontend folder , Install dependencies and run the development server

##### cd frontend
##### npm install
##### npm run dev

### Backend Setup
Copy the backend folder to your XAMPP htdocs directory.

Start XAMPP and activate MySQL and Apache servers.

Open the php files and update the following configurations:

##### Database host
##### Database username
##### Database password
##### Database name
##### Any other relevant configurations

# Database Setup
Open phpMyAdmin or a similar tool.

Create a new database with the name specified in your backend files.

Import the SQL file provided in the backend/database folder to set up the initial database structure.

Running the Application
Visit http://localhost/your-backend-folder to access the backend.

Open your browser and navigate to http://localhost:your-frontend-port to access the frontend.
