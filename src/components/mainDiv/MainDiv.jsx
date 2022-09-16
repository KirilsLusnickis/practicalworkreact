import './mainDiv.css'

    const MainDiv = ({catName, catColor, catAge, catGender, catBreed }) => {
      return (
        <div className='cats-info'>
          <h1>{catName}</h1>
          <p>Color : {catColor}</p>
          <p>Age : {catAge}</p>
          <p>Gender : {catGender}</p>
          <p>Breed : {catBreed}</p>
        </div>
      );
    };
  


export default MainDiv