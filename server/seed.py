#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker
from datetime import *
# Local imports
from app import app
from models import db, Attendee, Reservation, Event

def create_attendees():
    attendees = []
    for _ in range(10):
        attendee = Attendee(
            name = fake.name(),
            email = fake.email(),
            password = fake.sentence(),
            birthday = fake.date_of_birth(minimum_age = 21, maximum_age = 80),
        )
        attendees.append(attendee)

    return attendees

def create_reservations(attendees, events):
    reservations = []
    for _ in range(10):
        reservation = Reservation(
            tickets = randint(1, 10),
            attendee_id = rc(attendees).id,
            event_id = rc(events).id,
        )
        reservations.append(reservation)
    return reservations

def create_events():
    events = []
    images = ['https://www.wric.com/wp-content/uploads/sites/74/2022/07/IMG_9274.jpeg?strip=1', 'https://static.vecteezy.com/system/resources/previews/003/243/912/non_2x/happy-halloween-party-background-free-vector.jpg', 'https://ilaniresort.com/content/dam/ilani/Images/Festivals/Brewfest/Carousel-ilani_Brewfest-1440x620.jpg']
    for _ in range(5):
        event = Event(
            name = fake.name(),
            description = fake.sentence(),
            price = 10,
            event_date = date(randint(2024,2026), randint(1,12), randint(1,28)),
            time = randint(0,23),
            location = 'Main Venue',
            image = rc(images)
        )
        events.append(event)
    return events


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        
        print("Clearing db...")
        Event.query.delete()
        Attendee.query.delete()
        Reservation.query.delete()
        db.session.commit()

        print("Seeding attendees...")
        attendees = create_attendees()
        db.session.add_all(attendees)
        db.session.commit()

        print("Seeding events...")
        events = create_events()
        db.session.add_all(events)
        db.session.commit()

        print("Seeding reservations...")
        reservations = create_reservations(attendees, events)
        db.session.add_all(reservations)
        db.session.commit()

        # print("seeding...")
        # new_at = Attendee(name = "Ser", email = "sergio@gmail", password = "password1", birthday = fake.date_of_birth(minimum_age = 21, maximum_age = 80))
        # print(type(new_at.birthday))
        # db.session.add(new_at)
        # db.session.commit()
        # print(type(new_at.birthday))
        

        print("Done seeding :) ")
