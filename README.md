# Rice Pictures

The official website for **Rice Pictures** — a media company focused on uplifting marginalized voices through film, documentary, and music video production.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router v7 |
| Backend | Node.js, Express |
| Email | Resend API |

---

## Pages

- **Home** — Landing page showcasing Rice Pictures' work
- **About** — Mission statement, team members, and crew
- **Film** — Individual film pages (short films, documentaries, music videos)
- **Contact** — Contact form that sends inquiries via the backend API

---

## Project Structure

```
ricepix/
├── backend/
│   └── server.js          # Express API (contact form via Resend)
├── public/
│   └── images/            # Static image assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── AboutButton/
│   │   ├── Button/
│   │   ├── FilmPosterCard/
│   │   ├── Marquee/
│   │   ├── SectionHeading/
│   │   ├── TeamMemberCard/
│   │   ├── VideoPlayer/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   ├── films.js        # Film metadata
│   │   └── team.js         # Team member data
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Film.jsx
│   │   └── Home.jsx
│   └── App.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Frontend

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

### Backend

```bash
cd backend
npm install
npm start
```

The API will run at `http://localhost:3000`.

### Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
RESEND_API_KEY=your_resend_api_key_here
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## Films

- **Volador** — Short Film
- **Finding Xiao** — Documentary
- **Higher Way** — Official Music Video

---

## Contact

- [Instagram](https://www.instagram.com/pictures_rice/)
- [Facebook](https://www.facebook.com/people/Rice-Pictures/pfbid02JyyFFBWspa5qHVYTg9QT5LM7PafwM5qDvN1WNxSwLgtpjtzu1UBMtZax4sQA6PbDl/)

