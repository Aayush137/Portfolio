import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const prompt = "Add bootstrap classes to make it more attention gaining.the main-heading should be in center. then the navigation button nicely designed with bootstrap classes then we have about section and picture (that should be round) and below that skill-section: title on left and content on right. then if we have resume page selected we should have a full page size resume. then comes job section that should be like a time line. a straight vertical line in center and job 1 on below right with time on below left, then job2 on above left and time for job 2 on right it should look like an timeline. then comes project section i want four images making a collage img 1 at top left, img 2 top right, img 3 at bottomleft and img 4 at bottom right. then comes the certificate the title should be in center and bold for body i want a card on left the picture and on left about section "