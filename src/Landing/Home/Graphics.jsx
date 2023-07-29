import main from "../../assets/Images/main2.png";
import upRectangle from "../../assets/Images/Rectangle 256.png";
import downRectangle from "../../assets/Images/Rectangle 257.png";

const Graphics = () => {
    return (
        <div style={{ position: 'relative' }}>
            <img
                src={main}
                alt="Our workplace"
                className={`main-img ${window.innerWidth > 900 ? 'show' : ''}`}
                style={{ position: 'absolute', top: '-14vh', left: '5vw', zIndex: 10, transform: 'scale(0.8)' }}
            />

            <img
                src={upRectangle}
                alt="Image 2"
                className={`main-img ${window.innerWidth > 900 ? 'show' : ''}`}
                style={{ position: 'absolute', top: '-16vh', left: '3vw', zIndex: 2, transform: 'scale(0.8)' }}
            />
            <img
                src={downRectangle}
                alt="Image 2"
                className={`main-img ${window.innerWidth > 900 ? 'show' : ''}`}
                style={{ position: 'absolute', top: '2vh', left: '10vw', zIndex: 3, transform: 'scale(0.8)' }}
            />

        </div>
    );
};

export default Graphics;
