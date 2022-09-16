import MainDiv from '../../components/mainDiv/MainDiv'
import './homePage.css'

const HomePage = () => {
  return (
    <>
    <MainDiv
        catName={"Miya"}
        catColor={"Brown"}
        catAge={"6"}
        catGender={"Female"}
        catBreed={"Sfinx"}
        />
    <MainDiv
        catName={"Eva"}
        catColor={"Black"}
        catAge={"9"}
        catGender={"Female"}
        catBreed={"Persian Cats"}
    />
</>
  )
}

export default HomePage