# Tier 1: The Functional MVP (Minimum Viable Product)

## Goal
Prove you can handle basic full-stack architecture, database relations, and user security.

## Requirements
- **User Auth:** Secure login/signup (JWT or a provider like Clerk).
- **Manual Entry:** Create, Read, Update, and Delete (CRUD) for expenses (Amount, Category, Date, Note).
- **Basic Filtering:** View expenses by month or category.
- **Mobile Responsive:** Must work perfectly on a phone (simulating a "quick entry" app).

## Pages to Include
- **Landing Page:** A simple "pitch" for the app with a "Get Started" button.
- **Auth Pages:** Login and Registration.
- **Dashboard:** A list view of recent transactions and a "Quick Add" form.

---

# Tier 2: The Data-Driven App

## Goal
Show that you can transform raw data into visual insights. This is where you move from "student" to "engineer."

## Requirements
- **Visual Analytics:** Integration of a charting library (Recharts or Chart.js) to show spending over time.
- **Budgeting:** Allow users to set a monthly limit and show a progress bar (e.g., "You've used 70% of your grocery budget").
- **Search & Advanced Sort:** Search by keyword and sort by highest/lowest cost.
- **Persistent Settings:** Save user preferences like currency or theme (Dark Mode).

## Pages to Include
- **Analytics Page:** Dedicated space for pie charts (spending by category) and line graphs (monthly trends).
- **Budgets Page:** A management area to create and edit limits for different categories.
- **Settings Page:** Profile management and UI preferences.

---

# Tier 3: The "Shining" Resume Project

## Goal
Showcase advanced features like third-party APIs, asynchronous processing, or AI. This is the conversation starter at a job fair.

## Requirements
- **CSV/Bank Import:** Build a parser that allows users to upload a .csv file from their bank to bulk-upload expenses.
- **OCR Receipt Scanner:** Use a library like Tesseract.js to let users upload a photo of a receipt; the app automatically extracts the total and date.
- **Export Functionality:** Allow users to export their data as a PDF report or Excel sheet.
- **Real-time Notifications:** Alert the user when they are within 10% of their budget limit.

## Pages to Include
- **Import/Export Center:** A dedicated hub for handling external data (file uploads and downloads).
- **Report Generator:** A page where users can generate a custom summary of their year/month to save as a PDF.

---

# Technical Architecture Overview

To keep this organized, your data flow should look something like this:

## Suggested Tech Stack
- **Frontend:** React or Next.js (for SEO and speed).
- **Styling:** Tailwind CSS (professional and fast to build).
- **Backend:** Node.js with Express or C# with ASP.NET Core.
- **Database:** PostgreSQL (Relational data is perfect for expenses) or MongoDB.