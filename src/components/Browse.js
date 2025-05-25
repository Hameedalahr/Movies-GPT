import useNowPlaying from '../hooks/useNowPlaying'
import Header from './Header'
import MainVideoContainer from './MainVideoContainer';
import SecondaryVideoContainer from './SecondaryVideoContainer';

const Browse = () => {
  useNowPlaying();
  return (
    <div>
        <Header/>
        <MainVideoContainer/>
        <SecondaryVideoContainer/>
    </div>
  )
}

export default Browse
