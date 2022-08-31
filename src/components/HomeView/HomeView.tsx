import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObjectType } from "typescript";
import { useAuth } from "../../context/authContext";
import { getData } from "../../utils/api";
import { images } from "../../utils/constant";
import { Button, CardContent, categoryCss, Content, imageCss, titleCss } from "./HomeView.styles";


function HomeView(){

  const {user} = useAuth();
  const [ categories, setCategories]  = useState <any> ();
  const navigate = useNavigate();
/*   const handleClick = async () => {
    await logout();
  } */

  const handleClick = (category: string) => {
    navigate(`/contentcategory?category=${category}`)
  }

  useEffect(()=> {
    getCategoriesData();
  },[])
  
  const getCategoriesData = async () => {
    const data = await getData("categories");
    const arrayCategories = data.docs[0].data().category;
    setCategories(arrayCategories);
  }

  return(
    <Content>
      <h2 className={titleCss}>Bienvenido {user?.email}</h2>
      <CardContent>
        {categories?.map( (date : any) => (
          <Button key={date} onClick={() => handleClick(date)}>
            <div>
              <img src={images[date]} alt={date} width={200} className={imageCss}/>
            </div>
            <div>
              <p className={categoryCss}>{date}</p>
            </div>
          </Button>
        ))}
      </CardContent>
    </Content>
    
  )
}

export default HomeView;