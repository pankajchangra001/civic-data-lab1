# CivicDataSpace – Dataset Explorer

A Next.js application to explore datasets with search, filters, sorting, and pagination.

---

## Features

- Search datasets
- Filter by sectors, formats, tags, and geographies
- Sorting (latest, alphabetical)
- Pagination
- Grid and List view
- Responsive UI

---

## Project Structure

- `controller/` → Contains business logic and state management  
- `service/` → Handles API calls  
- `view/components/` → Common and reusable components  
- `app/datasets/` → Dataset listing page and its components  
- `utils/` → Helper functions (debounce, query params, etc.)

---

## Environment Setup

Create a `.env` file in the root folder and add:


NEXT_PUBLIC_API_BASE_URL=https://api.datakeep.civicdays.in/


---

## Installation

Install dependencies:


npm install


Run the project:


npm run dev


Open in browser:


http://localhost:3000


---

## Routes

- `/` → Home Page  
- `/datasets` → Dataset Listing Page  

---

## Tech Stack

- Next.js  
- React  
- TypeScript  
- Tailwind CSS  

---

## Notes

- Make sure `.env` file is added before running the project  
- The project uses client-side state management  