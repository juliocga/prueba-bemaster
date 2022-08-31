import { useEffect, useState } from "react";
import { getData } from "../../utils/api";
import { useQuery } from "../../utils/query";
import { Content, TextContent, titleCss, VideoContent, videoCss } from "./ContentDetail.styles";

function ContentDetail() {
  const query = useQuery();
  const videoSelected = query.get("video") || "";
  const [video, setVideo] = useState <any>();

  useEffect(()=> {
    getVideoData();
  },[videoSelected]);
  
  const getVideoData = async () => {
    const data = await getData("videoprueba");
    const arrayVideo = data.docs[0].data().video;
    console.log(arrayVideo);
    setVideo(arrayVideo);
  }

  return(
    <Content>
      <h1 className={titleCss}>{video?.name}</h1>
      <VideoContent>
        <iframe src={video?.url} title={video?.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className={videoCss} />
        <TextContent>
          <p>Descripción</p>
          <p>{video?.summary}</p>
        </TextContent>
      </VideoContent>
    </Content>
  )
}

export default ContentDetail;