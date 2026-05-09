import {createRoot} from 'react-dom/client';
import {HeroNav} from './home.jsx'
import './styles/fonts.css'
import './styles/global.css'
import './styles/variables.css'

createRoot(document.getElementById('root')).render(<HeroNav />)