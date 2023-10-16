from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
# from datetime import *

from config import db

# Models go here!


class Attendee(db.Model, SerializerMixin):
    __tablename__ = 'attendees'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    birthday = db.Column(db.DateTime)

# relationship with reservations
    reservations = db.relationship(
        "Reservation", backref="attendee", cascade="all, delete-orphan")

    serialize_rules = ("-reservations.attendee",)

# validations for name, password, email, birthday
    @validates('name')
    def validate_name(self, key, name):
        if name and len(name) >= 1:
            return name
        else:
            raise ValueError("Must have valid name attribute")

    @validates('password')
    def validate_password(self, key, password):
        if password and len(password) >= 1:
            return password
        else:
            raise ValueError("Must have valid password attribute")

    @validates('email')
    def validate_email(self, key, email):
        if email and '@' in email:
            return email
        else:
            raise ValueError("Must have valid email attribute")

# to do: figure out how to automatically check datetime against current date
# for now it's just the earliest date to be 21 as of 10/15
    # @validates('birthday')
    # def validate_birthday(self, key, birthday):
    #     d1 = datetime.datetime(2002, 10, 15)
    #     if birthday and birthday > d1:
    #         return birthday
    #     else:
    #         raise ValueError("Must have valid birthday attribute")

    def __repr__(self):
        return f'<Attendee {self.name}>'


class Reservation(db.Model, SerializerMixin):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    tickets = db.Column(db.Integer)
    # ticket_quantity = db.Column(db.Integer)

    attendee_id = db.Column(db.Integer, db.ForeignKey('attendees.id'))
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))

    # Add serialization rules
    serialize_rules = ("-attendee.reservations", "-event.reservations")

    def __repr__(self):
        return f'<Reservation count: {self.tickets}>'


class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    time = db.Column(db.Integer)
    location = db.Column(db.String, default='Main Venue')

    # relationship with reservations
    reservations = db.relationship(
        "Reservation", backref="event", cascade="all, delete-orphan")

    serialize_rules = ("-reservations.attendee",)

    # validations for time (if we use Strftime we can use hour:minute too)
    # to do: figure out how to do that
    @validates('time')
    def validate_time(self, key, time):
        if time and 0 <= time <= 23:
            return time
        else:
            raise ValueError("Must have valid time attribute")

    def __repr__(self):
        return f'<Event {self.name}: {self.description}>'
