# Portfolio Backend

Production-ready Django backend for Jayesh's portfolio.

## Tech Stack
- Django 5
- Django REST Framework
- PostgreSQL
- SimpleJWT
- WhiteNoise
- Gunicorn

## Setup Instructions

1. `python -m venv venv`
2. `source venv/bin/activate` or `venv\Scripts\activate` on Windows
3. `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and fill the variables.
5. Create PostgreSQL DB `portfolio_db`.
6. `python manage.py migrate`
7. `python manage.py createsuperuser`
8. `python manage.py runserver`

## Deployment Strategy
1. The app uses `config.settings.production` or `.local` based on env `DJANGO_SETTINGS_MODULE`.
2. Configure environment variables in Render/Railway.
3. Start command: `gunicorn config.wsgi:application`
