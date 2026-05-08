# Leap & Leash Retail Demo App

Leap & Leash is a frontend-only retail store built by Leapwork for practicing test automation on realistic ecommerce workflows.

The app includes product browsing, cart management, login and registration, customer account pages, checkout, order confirmation, returns, FAQ content, and an admin order view.

## Hosted Demo

Try the hosted app:

[https://demoapps.leapwork.ai/retail/](https://demoapps.leapwork.ai/retail/)

Leapwork's full demo app catalog is available at:

[https://demoapps.leapwork.ai/](https://demoapps.leapwork.ai/)

The catalog also provides supporting materials such as requirements PDFs and Gherkin test cases in Markdown format.

## Test Automation Practice

Useful test scenarios include product discovery, cart updates, guest and logged-in checkout, saved addresses, required field validation, payment selection, delivery date selection, VIP discounts, order confirmation, admin order management, and returns eligibility.

## Application Type

This is a static frontend application built with plain HTML, CSS, and JavaScript. There is no backend, database, API, framework build step, or real payment processing.

## Local Preview

Open `index.html` directly in a browser:

```text
index.html
```

No local server is required.

## Demo Data

The app includes built-in demo users:

| User | Email | Password | Notes |
| --- | --- | --- | --- |
| New Customer | `emma.carter@example.com` | `Welcome123!` | Standard customer with saved address and order history |
| VIP Customer | `daniel.hughes@example.com` | `Loyalty123!` | Receives a 10% discount |
| Admin | `olivia.admin@example.com` | `Admin123!` | Opens the admin order view |

These accounts are shown inside the login dialog so testers can quickly exercise different business rules.

## Supporting Materials

Sample requirements PDFs and Gherkin test cases are available through the Leapwork demo apps site:

[https://demoapps.leapwork.ai/](https://demoapps.leapwork.ai/)

## Important Notes

- This is a demo app, not a production ecommerce store.
- Data is simulated and stored only in the browser session.
- Payment methods do not call external services.
