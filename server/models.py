from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Attendee(db.Model, SerializerMixin):
    __tablename__ = 'attendees'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    birthday = db.Column(db.Datetime)

    def __repr__(self):
        return f'<Attendee {self.name}>'

class Reservation(db.Model, SerializerMixin):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key = True)
    tickets = db.Column(db.Integer)

    atendee_id = db.Column(db.Integer, db.ForeignKey('attendees.id'))
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))

    def __repr__(self):
        return f'<Reservation count: {self.tickets}>'
    
class Event(db.Model, SerializerMixin):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    time = db.Column(db.Integer)
    location = db.Column(db.String, default = 'Main Venue')

    def __repr__(self):
        return f'<Event {self.name}: {self.description}>'