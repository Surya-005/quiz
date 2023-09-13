import { Link } from 'react-router-dom'
import './vinadivina.css';
import Gk from './quizzimages/gk.jpg'
import Arts from './quizzimages/arts.jpg'
import Culture from './quizzimages/culture.jpg'
import Food from './quizzimages/food.jpg'
import Geography from './quizzimages/giography.jpg'
import History from './quizzimages/history.jpg'
import Music from './quizzimages/music.jpg'
import Science from './quizzimages/science.jpg'
import Sports from './quizzimages/sports.jpg'
import Tv from './quizzimages/tv.jpg'

function Vinadivina({ Category }) {
    return (
        <div className="filling_section">
            <h1>choose your catagory</h1>
            <div className="subject_catagory">
                <Link className='link' to={'/questions'} onClick={() => { Category('general_knowledge') }}>
                    <img src={Gk} alt='gk' />
                    <h2 className='category'>General knowledge</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('arts_and_literature')}>
                    <img src={Arts} alt='arts' />
                    <h2 className='category'>Arts & Literature</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('history')}>
                    <img src={History} alt='history' />
                    <h2 className='category'>History</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('science')}>
                    <img src={Science} alt='science' />
                    <h2 className='category'>Science</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('food_and_drink')}>
                    <img src={Food} alt='food' />
                    <h2 className='category'>Food & Drink</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('geography')}>
                    <img src={Geography} alt='geography' />
                    <h2 className='category'>Geography</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('society_and_culture')}>
                    <img src={Culture} alt='culture' />
                    <h2 className='category'>Society & Culture</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('film_and_tv')}>
                    <img src={Tv} alt='tv' />
                    <h2 className='category'>Film & Tv</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('music')}>
                    <img src={Music} alt='music' />
                    <h2 className='category'>Music</h2>
                </Link>
                <Link className='link' to={'/questions'} onClick={() => Category('sport_and_leisure')}>
                    <img src={Sports} alt='sports' />
                    <h2 className='category'>Sport & Leisure</h2>
                </Link>
            </div>
        </div>
    )
}

export default Vinadivina