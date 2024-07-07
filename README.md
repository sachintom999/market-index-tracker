# IndexPulse: Stock Index Tracking App

**IndexPulse** is a web application designed to track stock index values. It features user login/registration, a graphical representation of index values, and an alert system to notify users when stock indices hit specified price thresholds. The application uses Firebase Authentication, Express.js/NestJS, and Next.js, and is hosted on Vercel

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [API Integration](#api-integration)
- [Email Alert System](#email-alert-system)

## Features

- **User Authentication:** Secure login and registration using Firebase Authentication.
- **Stock Index Overview:** View available stock indices.
- **Graphical Representation:** Interactive charts showing index values for a given day.
- **Price Threshold Alerts:** Set alerts to receive email notifications when index values cross user-defined thresholds.
- **API Query Statistics (Optional):** Detailed statistics on API usage.

## Technologies

- **Backend:** Node.js, Express.js/NestJS
- **Frontend:** React, Next.js
- **Authentication:** Firebase Authentication
- **Data Source:** Polygon API
- **Hosting:** Backend - render.com | Frontend - Vercel
- **Styling:** Tailwind CSS

## API Integration

- **Polygon API** is used to fetch stock index data. 

## Email Alert System

- The alert system checks daily for index values exceeding user-defined thresholds.
- When an index hits the specified value, an email notification is sent to the user.
- **Note:** This functionality is implemented to work with the capabilities of the Polygon API and Firebase Functions. So the check is daily once for the index value against the user -defined trigger.




### Demo

![CLIPO-1](https://github.com/sachintom999/market-index-tracker/assets/62328681/65072f5b-3dc4-4eaa-a2f5-cd96549b7180)


**Index value trigger email screenshot**
![clipo-email](https://github.com/sachintom999/market-index-tracker/assets/62328681/c374c851-62ce-41a1-8086-210acae2316a)
