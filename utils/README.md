# CrediKhaata – Loan Tracker for Shopkeepers

## Overview
CrediKhaata is a RESTful backend service designed for shopkeepers to:
- Add and manage customers
- Record credit sales (loans)
- Track repayments
- Receive alerts for overdue payments

This helps small businesses digitize their credit transactions.

## Features
- *User Authentication:* JWT-based authentication with shopkeeper registration/login.
- *Customer Management:* Add/edit/delete customer profiles.
- *Loan Tracking:* Create loans with due dates, track status (pending, paid, overdue).
- *Repayment System:* Record repayments, auto-update balance.
- *Loan Summary & Alerts:* Track overdue amounts and notify customers.

## Tech Stack
- *Backend:* Node.js + Express
- *Database:* MongoDB + Mongoose
- *Authentication:* JWT + bcrypt
- *Time Management:* Moment.js / date-fns
- *Notifications:* SMS/WhatsApp integration (mocked)

