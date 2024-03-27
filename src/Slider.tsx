// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function Carousel() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Call your API to fetch data
//     const fetchData = async () => {
//       // Simulating data fetching with a timeout
//       // Replace this with your actual API call
//       setTimeout(() => {
//         const dummyData = [
//           { imageUrl: 'https://imgs.search.brave.com/8g8n7mR6ftA7XbS318TaMJsV5xtax_fZ6nDoHTSD1h4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/NDUwMTgxL3Bob3Rv/L25lcGFsLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1KV3VO/ZlBzOGlXR200ZXdP/VWtxMnBnVkdfQWQy/YTRsdnlUVDgtWWNp/SUlZPQ' },
//           { imageUrl: 'https://imgs.search.brave.com/H_QE9LYRhb7GR8G3MtUA9HxnKOuuKev1B8yetn0qt2M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RhdGUuZ292L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzA0/L05lcGFsLTIxMjN4/MTQwNi5qcGc' },
//           { imageUrl: 'https://imgs.search.brave.com/XcvlSREzb5d2-QoNlzz7uI9gc8yhMk9Kk0Ju25RPkAc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE2/MjQyODA0L3Bob3Rv/L2JvdWRoYW5hdGgt/c3R1cGEta2F0aG1h/bmR1LW5lcGFsLWZl/YnJ1YXJ5LTI3LTIw/MTcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUg4dU9QNFJM/TEpYd21HREV4d2V5/RGdlb2FiUUZFd0df/Z2Z5NVFtSGtXSjQ9' },
//           // Add more image URLs as needed
//         ];
//         setData(dummyData);
//       }, 1000); // Simulate 1 second delay
//     };

//     fetchData();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="">
//       <Slider {...settings}>
//         {data.map((item, index) => (
//           <div className="w-40 h-96 overflow-hidden" key={index}>
//             <img className="w-full h-full object-cover" src={item.imageUrl} alt="" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
