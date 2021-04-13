import './styles.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/pt/9/9f/Mulher_Maravilha_2009.jpg',
    caption: 'Mulher Maravilha',
    altText: 'Ela é muito forte'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/pt/e/ee/A_Nightmare_on_Elm_Street_2010_poster.jpg',
    caption: 'A hora do pesadelo',
    altText: 'Assustador :o'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/pt/2/2a/TropaDeElitePoster.jpg',
    caption: 'Tropa de Elite',
    altText: 'Cadê o baiano?'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 


        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="imagem-carrousel">
        <img   className="carousel mb-40" src={item.src} alt={item.altText} />
        </div>
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;