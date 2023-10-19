#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Attendee, Reservation, Event
from datetime import datetime, date

# Views go here!


class Attendees(Resource):
    def get(self):
        attendees = [attendee.to_dict(only=('name', 'id',))
                     for attendee in Attendee.query.all()]
        return make_response(attendees, 200)

    def post(self):
        data = request.json
        # MAY NEED CHANGES DEPENDING ON FRONT END FORMATTED BDAY
        birthday = data["birthday"].split("-")
        fixed_birthday = date(int(birthday[0]), int(
            birthday[1]), int(birthday[2]))
        try:

            new_attendee = Attendee(
                name=data["name"],
                email=data["email"],
                password=data["password"],
                birthday=fixed_birthday,
            )

            db.session.add(new_attendee)
            db.session.commit()

            return make_response(new_attendee.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Attendees, '/attendees')


class Login(Resource):
    def post(self):
        data = request.json
        print(data["email"])
        attendee = Attendee.query.filter_by(email=data["email"]).first()
        print(attendee)
        if attendee is None:
            return make_response({"error": "user not found"}, 404)
        elif attendee.password != data["password"]:
            return make_response({"error": "incorrect password"}, 403)
        else:
            return make_response({"id": attendee.id}, 200)


api.add_resource(Login, '/login')


class AttendeesByID(Resource):
    def get(self, id):
        attendee = Attendee.query.filter_by(id=id).first()
        if attendee:
            return make_response(attendee.to_dict(), 200)
        else:
            return make_response({"error": "No attendee was found"}, 404)

    def patch(self, id):
        attendee = Attendee.query.filter_by(id=id).first()
        data = request.json
        if data["birthday"]:
            birthday = data["birthday"].split("-")
            fixed_birthday = date(int(birthday[0]), int(
                birthday[1]), int(birthday[2]))
        if attendee:
            try:
                for attr in data:
                    if attr == "birthday":
                        setattr(attendee, attr, fixed_birthday)
                    else:
                        setattr(attendee, attr, data[attr])

                db.session.add(attendee)
                db.session.commit()

                return make_response(attendee.to_dict(), 201)
            except ValueError:
                return make_response({"errors": ["validation errors"]}, 400)

        else:
            return make_response({"error": "No attendee was found"}, 404)

    def delete(self, id):
        attendee = Attendee.query.filter_by(id=id).first()
        if attendee:
            db.session.delete(attendee)
            db.session.commit()

            return make_response({"message": "attendee was successfully deleted"}, 204)
        else:
            return make_response({"error": "No attendee was found"}, 404)


api.add_resource(AttendeesByID, '/attendees/<int:id>')


class Events(Resource):
    def get(self):
        events = [event.to_dict(rules=('-reservations',))
                  for event in Event.query.all()]
        return make_response(events, 200)

    def post(self):
        data = request.json
        try:
            new_event = Event(
                name=data["name"],
                description=data["description"],
                price=data["price"],
                event_date=data['event_date'],
                time=data["time"],
                location=data["location"],
                image=data["image"]
            )

            db.session.add(new_event)
            db.session.commit()

            return make_response(new_event.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Events, '/events')


class EventsById(Resource):

    def get(self, id):
        event = Event.query.filter_by(id=id).first()

        if event:
            return make_response(event.to_dict(), 200)
        else:
            return make_response({"error": "No event was found"}, 404)

    def delete(self, id):
        event = Event.query.filter_by(id=id).first()
        if event:
            db.session.delete(event)
            db.session.commit()

            return make_response({"Successfully deleted": True}, 204)
        else:
            return make_response({"error": "No event was found"}, 404)


api.add_resource(EventsById, '/events/<int:id>')


class Reservations(Resource):
    def get(self):
        reservations = [res.to_dict(only=('attendee.name', 'event.name', 'event.image', 'event.location',
                                    'event_date', 'event.time', 'tickets', '')) for res in Reservation.query.all()]
        return make_response(reservations, 200)

    def post(self):
        data = request.json
        try:
            new_reservation = Reservation(
                tickets=data["tickets"],
                attendee_id=data["attendee_id"],
                event_id=data["event_id"]
            )

            db.session.add(new_reservation)
            db.session.commit()

            return make_response(new_reservation.to_dict(), 201)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(Reservations, '/reservations')


class ReservationId(Resource):
    def delete(self, id):
        reservation = Reservation.query.filter_by(id=id).first()
        if reservation:
            db.session.delete(reservation)
            db.session.commit()

            return make_response({"Successfully deleted": True}, 204)
        else:
            return make_response({"error": "No event was found"}, 404)

    def patch(self, id):
        reservation = Reservation.query.filter_by(id=id).first()
        if not reservation:
            return make_response({"error": "Reservation not found"}, 404)
        try:
            for key in request.json:
                setattr(reservation, key, request.json[key])
            db.session.add(reservation)
            db.session.commit()
            return make_response(reservation.to_dict(rules=("-attendees",)), 202)
        except ValueError as e:
            print(e)
            return make_response({"errors": ["validation errors"]}, 400)


api.add_resource(ReservationId, '/reservations/<int:id>')


@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)
