# Welcome to the Restful

## One sentence description:
Book tickets for events at our one-of-a-kind venue!

## CRUD Deliverables
* C- users can create a reservation for an event by buying a ticket
* R- users can view all their reservations (from My Tickets page)
* U- users can update their reservation for an event
* D- users can cancel their reservation with a refund

# Data models:
<img width="1318" alt="Screenshot 2023-10-13 at 3 54 07 PM" src="https://github.com/Varlotte/phase4-venue-project/assets/32116877/e55789fc-4204-4f1b-9007-f4ad211c6fcc">

## Many-to-many relationships:
* One attendee goes to many events through reservations 
* One event has many attendees through reservations
* Reservations is a submittable form as well as having foreign keys

## Validations:
* Name can't be empty string
* Password can’t be an empty string
* Email needs "@"
* Time must be between 0:00 and 23:59
* Birthday must be after 10/13/2002 (or after 21, with built-in validation)

## Constraints:
* Name can't be empty string
* Password can't be empty string
* Email needs "@"
* Time must be between 0:00 and 23:59
* Birthday must be after 10/13/2002 (or after 21, we're gonna build in a validation somehow?)

# Wireframe for frontend:
![Screenshot 2023-10-13 135622](https://github.com/Varlotte/phase4-venue-project/assets/137942550/4ee390a9-f26f-40d0-a25b-276cbc813374)
![Screenshot 2023-10-13 135636](https://github.com/Varlotte/phase4-venue-project/assets/137942550/e57f116a-48d3-4246-af4e-abce2a02cf99)
![Screenshot 2023-10-13 135649](https://github.com/Varlotte/phase4-venue-project/assets/137942550/06938977-82ac-4dd7-a053-e46d984192c0)


# API Routes:
* GET /events
* GET /events/<int:id>
* GET /reservations/<int:id> 
* POST /reservations/<int:id>
* DELETE /reservations/<int:id>
* GET /attendees/<int:id>
* POST /attendees/<int:id>
* DELETE /attendees/<int:id>
* PATCH /attendees/<int:id>

# Frontend Component Routing:
### Calendar
* GET /events
* GET /events/<int:id>
### Login page
* GET /attendees/<int:id> (also passed to acct)
### My Account
* GET /reservations/<int:id>
* DELETE /reservations/<int:id>
* POST /attendees/<int:id>
* DELETE /attendees/<int:id>
* PATCH /attendees/<int:id>
### Reservation form
* POST /reservations/<int:id>

# Serialize Rules:
* ("-reservations.attendee" ,)
* ("-reservations.event" ,)
* ("-event.reservations", "attendee.reservations")

# Stretch Goals:
* Add ticketmaster API to see events in the same city
* Wire up for other cities
* Sort for calendar for event types
* Potential “host my event” inquiry page (front end and POST)
* Add another venue (as another table) potentially
* About us component for the venue
* Let users switch reservations for the same event on a different date

# Trello:
<img width="1032" alt="Screenshot 2023-10-13 at 4 32 27 PM" src="https://github.com/Varlotte/phase4-venue-project/assets/32116877/7526efd2-4225-4bcb-8a53-708c1f363d19">


