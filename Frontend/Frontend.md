# Portfolio Structure

## Home
- **Component Name**: `HomePage`
- **Description**: The landing page featuring the `InteractiveHeader` and an introduction to who you are.

## Projects
- **Component Name**: `ProjectsPage`
- **Description**: A dedicated page showcasing your projects, utilizing the `ProjectCarousel` or `ProjectDetailViewer` components to highlight individual projects.

## Skills
- **Component Name**: `SkillsPage`
- **Description**: A page that visualizes your skills using the `SkillsGlobe` and `SkillComparisonChart` components.

## About Me
- **Component Name**: `AboutMePage`
- **Description**: A personal introduction with the `AboutMeScene`, detailing your background, interests, and personality.

## Career Timeline
- **Component Name**: `CareerTimelinePage`
- **Description**: A visual representation of your career journey using the `CareerTimeline` component.

## Contact
- **Component Name**: `ContactPage`
- **Description**: A contact form using the `ContactForm3D` component, allowing visitors to reach out to you.

## Blog (Optional)
- **Component Name**: `BlogPage`
- **Description**: A section for sharing articles or insights related to your field, potentially incorporating a 3D element for each blog post.


---

# example main.jsx 

--- 

```cs 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseForm from './components/ExpenseForm.jsx'
import {  // import router functions
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserForm from './components/UserForm.jsx'
import Header from './components/Header.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addExpense",
    element: <ExpenseForm />,
  },
  {
    path: "/addUser",
    element: <UserForm />
  }  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider  router = {router}>
    <Header />
  </RouterProvider>

)
```