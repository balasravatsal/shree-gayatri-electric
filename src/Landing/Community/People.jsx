import people from "../../assets/Images/Ellipse 4.png"
import Typography from "@mui/material/Typography";


const People = () => {
    // Sample data for people list (you can replace this with your actual data)
    const peopleData = [
        // { id: 1, name: "John Doe", img: people, post: "Co - Founder"},
        { id: 2, name: "Jane Smith", img: people, post: "Co - Founder"},
        { id: 3, name: "Bob Johnson", img: people, post: "CEO"},
        { id: 4, name: "Alice Williams", img: people, post: "Manager"},
        { id: 5, name: "Michael Brown" , img: people, post: "CEO"},
        { id: 11, name: "John Doe", img: people, post: "CEO"},
        { id: 12, name: "Jane Smith" , img: people, post: "CEO"},
        { id: 13, name: "Bob Johnson", img: people , post: "CEO"},
        { id: 14, name: "Alice Williams", img: people , post: "CEO"},
        { id: 15, name: "Michael Brown", img: people, post: "CEO"},
        { id: 21, name: "John Doe", img: people, post: "CEO"},
        { id: 22, name: "Jane Smith" , img: people, post: "CEO"},
        { id: 23, name: "Bob Johnson" , img: people, post: "CEO"},
        { id: 24, name: "Alice Williams" , img: people, post: "CEO"},
        { id: 25, name: "Michael Brown", img: people, post: "CEO"},

    ];


    return (
        <div className="people-list-container" >
            <div className="people-list">
                {peopleData.map((person) => (
                    <div key={person.id} className="person-item">
                        <img src={person.img} alt={person.name} className="person-image" />
                        <Typography variant={"h4"} fontSize={"2.5rem"}>{person.name}</Typography>
                        <Typography variant={"body2"} fontSize={"1.5rem"}>{person.post}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;





// import { useRef, useEffect } from "react";
// import people from "../../assets/Images/Ellipse 4.png";
// import Typography from "@mui/material/Typography";
//
// const People = () => {
//     // Sample data for people list (you can replace this with your actual data)
//     const peopleData = [
//         { id: 1, name: "John Doe", img: people, post: "Co - Founder"},
//         { id: 2, name: "Jane Smith", img: people, post: "Co - Founder"},
//         { id: 3, name: "Bob Johnson", img: people, post: "CEO"},
//         { id: 4, name: "Alice Williams", img: people, post: "Manager"},
//         { id: 5, name: "Michael Brown" , img: people, post: "CEO"},
//         { id: 11, name: "John Doe", img: people, post: "CEO"},
//         { id: 12, name: "Jane Smith" , img: people, post: "CEO"},
//         { id: 13, name: "Bob Johnson", img: people , post: "CEO"},
//         { id: 14, name: "Alice Williams", img: people , post: "CEO"},
//         { id: 15, name: "Michael Brown", img: people, post: "CEO"},
//         { id: 21, name: "John Doe", img: people, post: "CEO"},
//         { id: 22, name: "Jane Smith" , img: people, post: "CEO"},
//         { id: 23, name: "Bob Johnson" , img: people, post: "CEO"},
//         { id: 24, name: "Alice Williams" , img: people, post: "CEO"},
//         { id: 25, name: "Michael Brown", img: people, post: "CEO"},
//     ];
//
//     const containerRef = useRef(null);
//
//     useEffect(() => {
//         const container = containerRef.current;
//
//         const scrollContainer = () => {
//             container.scrollLeft += 9 * 16; // Scroll 3rem (16 pixels per rem)
//         };
//
//         const timer = setInterval(scrollContainer, 2000); // Scroll every 2 seconds
//
//         // Clean up the timer when the component unmounts
//         return () => clearInterval(timer);
//     }, []);
//
//     return (
//         <div className="people-list-container" ref={containerRef}>
//             <div className="people-list">
//                 {peopleData.map((person) => (
//                     <div key={person.id} className="person-item">
//                         <img src={person.img} alt={person.name} className="person-image" />
//                         <Typography variant={"h4"} fontSize={"2.5rem"}>
//                             {person.name}
//                         </Typography>
//                         <Typography variant={"body2"} fontSize={"1.5rem"}>
//                             {person.post}
//                         </Typography>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default People;


// import  { useRef, useEffect } from "react";
// import people from "../../assets/Images/Ellipse 4.png";
// import Typography from "@mui/material/Typography";
//
// const People = () => {
//
//     const peopleData = [
//         { id: 1, name: "John Doe", img: people, post: "Co - Founder"},
//         { id: 2, name: "Jane Smith", img: people, post: "Co - Founder"},
//         { id: 3, name: "Bob Johnson", img: people, post: "CEO"},
//         { id: 4, name: "Alice Williams", img: people, post: "Manager"},
//         { id: 5, name: "Michael Brown" , img: people, post: "CEO"},
//         { id: 11, name: "John Doe", img: people, post: "CEO"},
//         { id: 12, name: "Jane Smith" , img: people, post: "CEO"},
//         { id: 13, name: "Bob Johnson", img: people , post: "CEO"},
//         { id: 14, name: "Alice Williams", img: people , post: "CEO"},
//         { id: 15, name: "Michael Brown", img: people, post: "CEO"},
//         { id: 21, name: "John Doe", img: people, post: "CEO"},
//         { id: 22, name: "Jane Smith" , img: people, post: "CEO"},
//         { id: 23, name: "Bob Johnson" , img: people, post: "CEO"},
//         { id: 24, name: "Alice Williams" , img: people, post: "CEO"},
//         { id: 25, name: "Michael Brown", img: people, post: "CEO"},
//     ];
//
//     const containerRef = useRef(null);
//     let animationFrameId = null;
//     let startTime = null;
//     const duration = 2000; // 2 seconds
//     const distanceToScroll = 3 * 16; // 3rem (16 pixels per rem)
//     const scrollInterval = 4000; // 4 seconds
//
//     const easeInOutQuad = (t) => {
//         t /= duration / 2;
//         if (t < 1) return (distanceToScroll / 2) * t * t;
//         t--;
//         return (-distanceToScroll / 2) * (t * (t - 2) - 1);
//     };
//
//     const animateScroll = (timestamp) => {
//         if (!startTime) startTime = timestamp;
//         const elapsed = timestamp - startTime;
//         const progress = easeInOutQuad(Math.min(elapsed, duration));
//
//         containerRef.current.scrollLeft = progress;
//
//         if (elapsed < duration) {
//             animationFrameId = requestAnimationFrame(animateScroll);
//         }
//     };
//
//     const startScrollAnimation = () => {
//         if (animationFrameId) cancelAnimationFrame(animationFrameId);
//         startTime = null;
//         animationFrameId = requestAnimationFrame(animateScroll);
//     };
//
//     useEffect(() => {
//         // Function to start the scrolling animation
//         const startAnimationInterval = () => {
//             startScrollAnimation();
//
//             setTimeout(startAnimationInterval, scrollInterval);
//         };
//
//         // Start the initial animation
//         startAnimationInterval();
//
//         // Clean up the animation frame when the component unmounts
//         return () => {
//             if (animationFrameId) cancelAnimationFrame(animationFrameId);
//         };
//     }, []);
//
//     return (
//         <div className="people-list-container" ref={containerRef}>
//             <div className="people-list">
//                 {peopleData.map((person) => (
//                     <div key={person.id} className="person-item">
//                         <img src={person.img} alt={person.name} className="person-image" />
//                         <Typography variant={"h4"} fontSize={"2.5rem"}>
//                             {person.name}
//                         </Typography>
//                         <Typography variant={"body2"} fontSize={"1.5rem"}>
//                             {person.post}
//                         </Typography>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default People;
