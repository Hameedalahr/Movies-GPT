import useNowPlaying from '../hooks/useNowPlaying'
import Header from './Header'
import MainVideoContainer from './MainVideoContainer';
import SecondaryVideoContainer from './SecondaryVideoContainer';
import usePopular from '../hooks/usePopular'
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useDispatch, useSelector } from 'react-redux';
const Browse = () => {

  const gptSearchActive=useSelector(store=>store.gpt.isGptSearch)

  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div>
        <Header/>
        {gptSearchActive?<GptSearch/>:
          (<>
            <MainVideoContainer/>
            <SecondaryVideoContainer/>
          </>)
        }
        
        
    </div>
  )
}

export default Browse
