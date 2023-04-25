# Event Management System - Full Stack

## Description / Summary

The event management website is a platform that enables users to book different types of events and services such as weddings, concerts, birthdays, and corporate events. The website allows users to register and log in to their accounts to access the various features available.

Users can contact the website admin through the contact form to ask any queries or to report any issues. When a user selects a particular event or service, they are provided with a list of available vendors for that particular event or service. The user can then select a vendor of their choice and view details such as the venue, capacity, location, and contact number.

Users can also select a slot for their event, such as morning, evening, or any other preferred time. They can choose the services they require from the services provided by the vendor, such as sound system, catering, and more.

Once the user has selected their vendor, they will be required to fill in their billing details such as their name, CNIC number, phone number, and address. The user can choose from different payment options such as card, bank transfer, or any other preferred method.

After completing the payment procedure, the user will receive an OTP number on their phone. They must confirm this OTP number to complete the order. After the user's order has been confirmed, they will receive a confirmation message on their mobile number. Additionally, the details of their order will be displayed on the webpage.

Overall, the event management website provides a user-friendly platform that enables users to book events and services with ease. The website's various features ensure that the user can easily select the vendor, services, and other details required for their event, making the event planning process more convenient and hassle-free.

## Installation for Developers

### Prerequisites

Make sure to have the following installed in your system before running the application:

- Node.js, NPM
- Xampp Server
- @nestjs/cli, typescript and nodemon globally on your machine

## Usage

### How to develop

#### public

1. Go to index.html file in html folder and open it with any browser.

#### backend

1. Install the required packages by running npm install in the backend's root folder.
2. Ensure that XAMPP server is running before starting the backend server.
3. Import the "event-db.sql" file located in the project root folder to your localhost. First, create a database with the name "event-db" and then import the SQL file into that database.
4. To start the server, run npm run start:dev in the backend's root folder (e.g. /workspace/Event-Management-Website/backend).

#### Create Migrations

1. Navigate to the root folder of the backend by typing 'cd backend/' in the command prompt.
2. Execute the command 'npm run migration:generate MigrationName' to generate a migration file.
3. The migration file will be created, and you need to copy it to the migration folder inside the db folder.
4. Run the command 'npm run migration:run' to run the migration.
5. Copy the seeds file into the migration folder and run 'npm run migration:run' again.

Note that you should have a database created on your localhost server before running the migrations.
