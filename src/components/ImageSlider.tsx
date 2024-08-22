import { useEffect, useState } from 'react'

type ImageSliderProp = {
    imageUrl: string[];
}

const ImageSlider = ({imageUrl} : ImageSliderProp) => {

    const [imageIndex, setImageIndex] = useState(0);
    
    useEffect(() =>
    {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % 3);
        }, 3500);

        return () => clearInterval(interval);
    },[imageIndex])

    function showPrevImage()
    {
        setImageIndex(() => imageIndex === 0 ? imageUrl.length - 1 : imageIndex - 1);
    }

    function showNextImage()
    {
        setImageIndex((imageIndex + 1) % 3);
    }

    return (
    <div className="home__slider">
        <div style={{width: "100%", height: "100%", overflow: 'hidden', display:'flex'}}>
            {imageUrl.map((url) => <img key={url} src={url} className="home__slider__image" style={{translate: `${-100 * imageIndex}%`}}/> )} 
        </div>  
        <button onClick={showPrevImage} className="home__slider__button home__slider__button--prev" 
                                        style={{left: 0, userSelect: 'none'}}>&lt;</button>
        <button onClick={showNextImage} className="home__slider__button home__slider__button--next" 
                                        style={{right: 0, userSelect: 'none'}}>&gt;</button>
    </div>
    )
}

export default ImageSlider