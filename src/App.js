import { useState,useEffect } from 'react';
import './App.css';
import Nav from './nav';
import Questions from './questions';
import Quizzhome from './quizzhome';
import Vinadivina from './vinadivina';
import { Route,Routes} from 'react-router-dom';
import Missing from './missing';

function App() {
  let quizz_api=''
  const [quizz_questions, set_quizz_questions] = useState([])
  const [error, seterror] = useState(null)
  const [loading,setloading] = useState(true)
  const [quizzcategory,setcategory]=useState('Category')

  function Category(value) {
      quizz_api=`https://the-trivia-api.com/v2/questions/?categories=${value}`
      fetchapi(quizz_api)
     }
  async function fetchapi(url) {
      try {
          const response = await fetch(url);
          if(!response.ok) throw Error('data not available')
          const data = await response.json();
          set_quizz_questions(data)
          setcategory(data[0].category)
          seterror(null)
      }
      catch (err) {
          seterror(err)
      }
      finally{
        setloading(false)
      }
  }
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Quizzhome/>}/>
        <Route path="vinadivina" element={<Vinadivina Category={Category} />}/>
        <Route path="questions" element={<Questions error={error} quizz_questions={quizz_questions} set_quizz_questions={set_quizz_questions} quizzcategory={quizzcategory}  loading={loading}/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes>
    </div>

  )
}
export default App;
