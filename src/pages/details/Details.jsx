import React, { useEffect, useState } from 'react'
import './style.scss';
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';

const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  // const [vid, setVid] = useState(0);
  // useEffect(() => {
  //   for (let i = 0; i < data?.results?.length; i++) {
  //     console.log(data?.results?.[i].name);
  //     if (data?.results?.[i].name === "Official Trailer") {
  //       setVid(i);
  //       break;
  //     }
  //   }
  // }, [])
  // console.log(vid);
  const len = data?.results?.length - 1;
  return ( 
    <div>
      <DetailsBanner video={data?.results?.[len]}
        crew={credits?.crew} />
        <Cast data={credits?.cast} loading={creditsLoading}/>
        <VideosSection data={data} loading={loading} />
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details