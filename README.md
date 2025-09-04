# Booking System

A modern booking application for managing public and semi-public resources.

## Overview

This booking system provides a comprehensive solution for searching, booking, and reviewing public or private resources such as rooms, venues, equipment, or any other reservable items. Inspired by Airbnb's model but designed for general-purpose usage, this application connects users with available options for any kind of booking scenario.

## Features

### Listings Management
- Complete CRUD operations for listings
- Detailed listing information including name, description, location, amenities, photos, availability, and pricing
- Search and filter capabilities

### Booking System
- Calendar-based reservation system
- Real-time availability checking
- Booking confirmation and cancellation workflows

### Reviews & Ratings
- User review and rating system for any resource
- Admin moderation of reviews

### Notifications
- Email and in-app notifications for booking confirmations
- Reminders and cancellation alerts

### Administration
- Comprehensive admin panel for managing users, listings, bookings, and reviews
- Analytics dashboard for monitoring usage, revenue, and occupancy rates

## Technology Stack

- **Backend**: NestJS (TypeScript-based Node.js framework)
- **Database**: MySQL with TypeORM
- **Validation**: Class Validator
- **Configuration**: NestJS Config
- **Testing**: Jest

## Installation

### Prerequisites

- Node.js (v14 or later)
- MySQL (v8.0 recommended)
- npm or yarn
- Docker (optional, for containerized development)

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/thiercelin-loic/booking.git
   cd booking
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USERNAME=root
   MYSQL_PASSWORD=yourpassword
   MYSQL_ROOT_PASSWORD=yourrootpassword
   MYSQL_DATABASE=booking
   ```

4. Start the MySQL database (using Docker):
   ```
   docker-compose up -d
   ```

5. Run the application:
   ```
   npm run start:dev
   ```

## API Endpoints

The application exposes the following main API endpoints:

### Listings
- `GET /listings` - Get all listings
- `GET /listings/:id` - Get a specific listing
- `POST /listings` - Create a new listing
- `PATCH /listings/:id` - Update a listing
- `DELETE /listings/:id` - Delete a listing

### Bookings
- `GET /bookings` - Get all bookings
- `GET /bookings/:id` - Get a specific booking
- `POST /bookings` - Create a new booking
- `PATCH /bookings/:id` - Update a booking
- `DELETE /bookings/:id` - Delete a booking

### Reviews
- `GET /reviews` - Get all reviews
- `GET /reviews/:id` - Get a specific review
- `POST /reviews` - Create a new review
- `PATCH /reviews/:id` - Update a review
- `DELETE /reviews/:id` - Delete a review

### Notifications
- `GET /notification` - Get all notifications
- `GET /notification/:id` - Get a specific notification
- `POST /notification` - Create a new notification
- `PATCH /notification/:id` - Update a notification
- `DELETE /notification/:id` - Delete a notification

### Administration
- `GET /administration` - Get all admin resources
- `GET /administration/:id` - Get a specific admin resource
- `POST /administration` - Create a new admin resource
- `PATCH /administration/:id` - Update an admin resource
- `DELETE /administration/:id` - Delete an admin resource

## Project Structure

```
booking/
├── src/
│   ├── controllers/     # HTTP request handlers
│   ├── models/          # Database entity definitions
│   ├── modules/         # Feature modules
│   ├── providers/       # Service providers
│   ├── services/        # Business logic
│   ├── validations/     # DTO definitions
│   └── main.ts          # Application entry point
├── test/                # Test files
├── dist/                # Compiled JavaScript output
├── node_modules/        # Dependencies
├── docker-compose.yml   # Docker configuration
├── .env                 # Environment variables
└── package.json         # Project metadata and dependencies
```

## Development

### Running the app

```bash
# development mode
npm run start:dev

# production mode
npm run start:prod
```

### Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

### Building

```bash
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.