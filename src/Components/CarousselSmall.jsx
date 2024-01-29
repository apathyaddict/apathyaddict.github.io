import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  { id: "1", image: "images/frames/1.jpg", description: "Bath Windows" },
  { id: "2", image: "images/frames/2.jpg", description: "Venitian Door" },
  { id: "3", image: "images/frames/3.jpg", description: "Chateau Stairs" },
  {
    id: "4",
    image: "images/frames/4.jpg",
    description: "The great Barrier Reef",
  },
  { id: "5", image: "images/frames/5.jpg", description: "Naxos, Greece" },
  { id: "6", image: "images/frames/6.jpg", description: "Melbourne" },
  { id: "7", image: "images/frames/7.jpg", description: "Paris: Conciergerie" },
  { id: "8", image: "images/frames/8.jpg", description: "Botanical Lemons" },
];

const CarousselSmall = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="m-auto">
        <div className="my-5 mx-20">
          <Slider {...settings}>
            {carouselItems.map((img) => (
              <div
                key={img.id}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={img.image}
                  alt=""
                  className="object-cover h-[250px] w-[250px] p-4
                  transition-transform transform hover:scale-110"
                />
                <p className="align-middle text-center text-slate-600">
                  {img.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarousselSmall;
