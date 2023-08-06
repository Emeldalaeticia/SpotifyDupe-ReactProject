import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";



import PlayPause from './PlayPause';
import {setActiveSong, playPause} from '../redux/features/playerSlice';
import {useGetTopChartsQuery} from '../redux/services/shazamCore';


import 'swiper/css';
import 'swiper/css/free-mode'


const TopChartCard = ( song, i ) => (
  <div className="w-full flex flex-row items-center hover:bg[#FFFFFF] py-2 p-4 rounded-lg cursor-pointer mb-2">

    {song.title}
  </div>
)


const TopPlay = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth'});
  });

  const topPlays = data?.slice(0, 5);
  const handlePauseClick = () => {
    dispatch(playPause(false));

  };

  const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));

  };
  
  return (
    <>
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold"> Top Charts</h2>
            <Link to="/top-charts">
              <p className="text-gray-300 text-base cursor-pointer">See More</p>
            </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i ) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
            />
          ))}

        </div>
      </div>

      <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold"> Top Artists</h2>
            <Link to="/top-charts">
              <p className="text-gray-300 text-base cursor-pointer">See More</p>
            </Link>
      </div>
    </div>
    
    </>

  );

};

export default TopPlay;
