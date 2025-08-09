import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">The Grand Line Awaits... Soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Crossin’ into Uncharted Waters
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Sail into chaos, treasure, and talking reindeer—where maps are
          useless, captains yell a lot, and friendship might actually punch a
          sea monster.
        </p>
      </div>

      <BentoTilt className="text-black border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh md:text-black">
        <BentoCard
          src="videos/hero-2.mp4"
          title={
            <>
              Luffy
            </>
          }
          description="Hello Shreya this is the Birthday wish form the greatest creater of the wesites Satyam Rathod"
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Zoro
              </>
            }
            description="Don't get cocky just because it's your birthday...
...but yeah, have a good one.
Hmph... You deserve a proper celebration—
with swords and sake ~Zoro"
            isComingSoon
          />
        </BentoTilt>


 <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                Sanji
              </>
            }
            description="Happy Birthday, Shreya swan~ 💘
A special feast just for you,
with love cooked into every bite!
May your smile shine brighter than All Blue. ~Sanji"
            isComingSoon
          />
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/strawhats.mp4"
            title={
              <>
                Strawhats
              </>
            }
            description="HAPPY BIRTHDAY, SHREYA!! THIS IS FROM ALL THE STRAWHATS LET’S SET SAIL FOR ANOTHER AMAZING YEAR!"
            isComingSoon
          />
        </BentoTilt> */}


        
{/* 
        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                mugiwar<b>a</b>s
              </>
            }
            description="The wild bunch behind the captain—each one crazier and more loyal than the last."
            isComingSoon
          />
        </BentoTilt> */}

        {/* <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re adventures s<b>o</b>on!
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt> */}

 <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/ussop.mp4"
            title={
              <>
               God Ussop
              </>
            }
            description="Listen up, Shreya! This is Captain Usopp speaking—today is your legendary birthday! I once fought a sea king just to get your cake! True story! ~Ussop"
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="https://motionbgs.com/media/5872/straw-hat-pirates.960x540.mp4"
            title={
              <>
               Strawhats
              </>
            }
            description="Listen up, Shreya! This is Captain Usopp speaking—today is your legendary birthday! I once fought a sea king just to get your cake! True story! ~Ussop"
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
