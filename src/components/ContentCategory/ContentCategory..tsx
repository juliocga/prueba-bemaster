import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../utils/api";
import { categoriesDB } from "../../utils/constant";
import { useQuery } from "../../utils/query";
import { Button, CardContent, Content, imageCss, titleCss, videoCss } from "./ContentCategory.styles";

function ContentCategory() {
  const query = useQuery();
  const category = query.get("category") || "";
  const dbCollection = categoriesDB[category];
  const [videos, setVideos] = useState <any>();
  const navigate = useNavigate();

  const handleClick = (video: string) => {
    navigate(`/contentdetail?video=${video}`)
  }

  useEffect(()=> {
    getCategoriesData(dbCollection);
  },[dbCollection])
  
  const getCategoriesData = async (_dbCollection : string) => {
    const data = await getData(_dbCollection);
    const arrayVideos = data.docs[0].data().videos;
    setVideos(arrayVideos);
  }

  return (
    <Content>
      <h1 className={titleCss}>{category}</h1>
      <CardContent>
        {videos?.map( (data : any, key : any) => (
          <Button key={key} onClick={() => handleClick(data.name)}>
            <div>
              <img src={data.image} alt={data.name} width={200} className={imageCss}/>
            </div>
            <div>
              <p className={videoCss}>{data.name}</p>
            </div>
          </Button>
        ))}
      </CardContent>
    </Content>
    

  );
}

export default ContentCategory;