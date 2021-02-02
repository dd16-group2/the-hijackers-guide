import CarouselItem from "../components/carouselItem";
import CarouselImage from "../components/carouselImage";
import { React, useRef, useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../left_arrow.svg";
import { ReactComponent as RightArrow } from "../right_arrow.svg";

function Carousel(props) {
  const [collection, setCollection] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState({
    state: false,
    direction: 0
  });

  const HIJACKED_COUNT = {
    "01": 40,
    "02": 40,
    "03": 40,
    '04': 40
  };

  const HASHTAG_NAME = {
    "01": '#WhiteLivesMatter',
    "02": "#ProudBoys",
    "03": "#myNYPD",
    '04': "#RussiaNeedsPutin"
  };

  useEffect(() => {
    createCollection(props.sectionId);
  }, []);

  function createCollection(sectionId) {
    console.log("this is the section " + sectionId);
    if (sectionId != '04'){

    let shuffledItems = getShuffledPosts(sectionId, 50, HIJACKED_COUNT[sectionId], 0, HASHTAG_NAME[sectionId]);

    setCollection(shuffledItems);
  } else {
    let arr1 = getShuffledPosts('04', 18, 13, 0, "#RussiaNeedsPutin");
    let arr2 = getShuffledPosts('04', 17, 12, 18, "#QAnon");
    let arr3 = getShuffledPosts('04', 14, 8, 35, "#JustinBieber");

    let totalItemsArray = arr1.concat(arr2, arr3);

    console.log(totalItemsArray);

    setCollection(totalItemsArray);
  }
  }

  function getShuffledPosts(sectionId, count, hijackedCount, countStart, hashtag){
    let itemsArray = [];

    for (let i = 0 + countStart; i < count + countStart; i++) {
      let type;
      if (i >= hijackedCount + countStart) {
        type = "original";
      } else {
        type = "hijacked";
      }
      let item = new CarouselItem(
        type,
        i,
        "/assets/section" + sectionId + "/carousel/" + (i + 1) + ".jpg",
        hashtag
      );
      itemsArray.push(item);
    }

    let shuffledItems = shuffle(itemsArray);
    return shuffledItems;

  }

  function shuffle(array) {
    let i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return (
    <div className="carousel-container">
      {collection.length > 1 && (
        <div
          className="carousel-images-container"
          style={
            transitioning.state
              ? {
                  transform:
                    "translateX(" +
                    props.width * 0.35 * transitioning.direction +
                    "px)",
                  transition: "transform 0.15s"
                }
              : { transform: "translateX(0)", transition: "none" }
          }
          onTransitionEnd={() => {
            if (transitioning.direction > 0) {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              } else {
                setCurrentIndex(collection.length - 1);
              }
            } else if (transitioning.direction < 0) {
              if (currentIndex < collection.length - 1) {
                setCurrentIndex(currentIndex + 1);
              } else {
                setCurrentIndex(0);
              }
            }
            setTransitioning({ state: false, direction: 0 });
          }}
        >
          <CarouselImage
            src={
              currentIndex > 1
                ? process.env.PUBLIC_URL + collection[currentIndex - 2].src
                : process.env.PUBLIC_URL +
                  collection[collection.length - (2 - currentIndex)].src
            }
            type={
              currentIndex > 1
                ? collection[currentIndex - 2].type
                : collection[collection.length - (2 - currentIndex)].type
            }
            hashtag={
              currentIndex > 1
                ? collection[currentIndex - 2].hashtag
                : collection[collection.length - (2 - currentIndex)].hashtag
            }
            color={props.color}
            width={props.width}
            height={props.height}
          />

          <CarouselImage
            src={
              currentIndex > 0
                ? process.env.PUBLIC_URL + collection[currentIndex - 1].src
                : process.env.PUBLIC_URL + collection[collection.length - 1].src
            }
            type={
              currentIndex > 0
                ? collection[currentIndex - 1].type
                : collection[collection.length - 1].type
            }
            hashtag={
              currentIndex > 0
                ? collection[currentIndex - 1].hashtag
                : collection[collection.length - 1].hashtag
            }
            color={props.color}
            width={props.width}
            height={props.height}
          />

          <CarouselImage
            src={process.env.PUBLIC_URL + collection[currentIndex].src}
            type={collection[currentIndex].type}
            hashtag={collection[currentIndex].hashtag}
            color={props.color}
            width={props.width}
            height={props.height}
          />

          <CarouselImage
            src={
              currentIndex < collection.length - 1
                ? process.env.PUBLIC_URL + collection[currentIndex + 1].src
                : process.env.PUBLIC_URL + collection[0].src
            }
            type={
              currentIndex < collection.length - 1
                ? collection[currentIndex + 1].type
                : collection[0].type
            }
            hashtag={
              currentIndex < collection.length - 1
                ? collection[currentIndex + 1].hashtag
                : collection[0].hashtag
            }
            color={props.color}
            width={props.width}
            height={props.height}
          />

          <CarouselImage
            src={
              currentIndex < collection.length - 2
                ? process.env.PUBLIC_URL + collection[currentIndex + 2].src
                : process.env.PUBLIC_URL +
                  collection[0 + (currentIndex - (collection.length - 2))].src
            }
            type={
              currentIndex < collection.length - 2
                ? collection[currentIndex + 2].type
                : collection[0 + (currentIndex - (collection.length - 2))].type
            }
            hashtag={
              currentIndex < collection.length - 2
                ? collection[currentIndex + 2].hashtag
                : collection[0 + (currentIndex - (collection.length - 2))].hashtag
            }
            color={props.color}
            width={props.width}
            height={props.height}
          />
        </div>
      )}
      <div
        className="carousel-arrow left-arrow"
        style={{ width: "30%", height: props.height }}
      />
      <div
        className="carousel-arrow right-arrow"
        style={{ width: "30%", height: props.height }}
      />
      <button
        className="carousel-arrow left-arrow"
        style={{ height: props.height }}
        onClick={event => {
          event.preventDefault();
          console.log(currentIndex);
          setTransitioning({ state: true, direction: 1 });
        }}
      >
        <LeftArrow fill={props.color} />
      </button>
      <button
        className="carousel-arrow right-arrow"
        style={{ height: props.height }}
        onClick={event => {
          event.preventDefault();
          console.log(currentIndex);
          setTransitioning({ state: true, direction: -1 });
        }}
      >
        <RightArrow fill={props.color} />
      </button>
    </div>
  );
}

export default Carousel;
