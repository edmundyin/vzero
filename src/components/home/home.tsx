import React, { useEffect } from 'react';
import styles from './home.module.css';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  useEffect(() => {
    // CODE FOR CARD HOVERING AND PHYSICS
    const handleMouseMove = (mouse: MouseEvent) => {
      const gradientElement = document.getElementById(styles.gradient) as HTMLElement;
      const cardElement = document.getElementById(styles.card) as HTMLElement;

      if (gradientElement && cardElement) {
        const cardRect = cardElement.getBoundingClientRect();

        const gradientX = mouse.clientX - cardRect.x;
        const gradientY = mouse.clientY - cardRect.y;
        gradientElement.style.transform = `translate(${gradientX}px, ${gradientY}px)`;

        if (
          mouse.clientX > cardRect.x &&
          mouse.clientX < cardRect.x + cardRect.width &&
          mouse.clientY > cardRect.y &&
          mouse.clientY < cardRect.y + cardRect.height
        ) {
          // Mouse is inside the card boundary
          gradientElement.classList.add(styles.visible);

          const mouseStepsX = 20 / cardRect.width;
          const mouseStepsY = 20 / cardRect.height;

          const cardCenterX = cardRect.x + cardRect.width / 2;
          const cardCenterY = cardRect.y + cardRect.height / 2;

          const rotateY = (cardCenterX - mouse.clientX) * mouseStepsX;
          const rotateX = (mouse.clientY - cardCenterY) * mouseStepsY;

          cardElement.style.transform = `perspective(50cm) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          gradientElement.classList.remove(styles.visible);
          cardElement.style.transform = '';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // CODE FOR IMAGE TRACK SCROLLING
    const track = document.getElementById(styles.imagetrack) as HTMLElement;

    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      let clientX: number;

      if (e instanceof MouseEvent) {
        clientX = e.clientX;
      } else if (e instanceof TouchEvent) {
        clientX = e.touches[0].clientX;
      } else {
        throw new Error("Unsupported event type");
      }

      track.dataset.mouseDownAt = clientX.toString();
    };

    const handleOnUp = (): void => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage || "0";
    };

    const handleOnMove = (e: MouseEvent | TouchEvent): void => {
      if (!track.dataset.mouseDownAt || track.dataset.mouseDownAt === "0") return;

      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const prevPercentage = parseFloat(track.dataset.prevPercentage || "0");
      const nextPercentageUnconstrained = prevPercentage + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage.toString();

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      Array.from(track.getElementsByClassName(styles.image)).forEach(image => {
        (image as HTMLElement).animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      });
    };

    const handleOnWheel = (e: WheelEvent): void => {
      e.preventDefault();
      const delta = e.deltaY;
      const maxDelta = window.innerWidth / 2;

      const percentage = (delta / maxDelta) * -100;
      const prevPercentage = parseFloat(track.dataset.percentage || "0");
      const nextPercentageUnconstrained = prevPercentage + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage.toString();

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      Array.from(track.getElementsByClassName(styles.image)).forEach(image => {
        (image as HTMLElement).animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      });
    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));
    window.addEventListener("wheel", handleOnWheel, { passive: false });

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e: TouchEvent) => handleOnDown(e));
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e: TouchEvent) => handleOnMove(e));
      window.removeEventListener("wheel", handleOnWheel);
    };
  }, []);

  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.bottomButtons}>
        <div className={styles.shopNow}>
          <Link className={styles.link} to="/shop"> shop now </Link>
        </div>
        <div className={styles.about}>
          <Link className={styles.link} to="/about"> about us </Link>
        </div>
      </div>
      <div className={styles.shopkaizen}>
        <div className={styles.trackContainer}>
          <div id={styles.imagetrack} data-mouse-down-at="0" data-prev-percentage="0">
            <img className={styles.image} src="/components/pictures/alphane.png" draggable="false" />
            <img className={styles.image} src="/components/pictures/burden.png" draggable="false" />
            <img className={styles.image} src="/components/pictures/burden2.png" draggable="false" />
            <img className={styles.image} src="/components/pictures/poison.jpeg" draggable="false" />
            <img className={styles.image} src="/components/pictures/sleepwalker.jpeg" draggable="false" />
            <img className={styles.image} src="/components/pictures/ticino.jpeg" draggable="false" />
            <img className={styles.image} src="/components/pictures/vecchio.png" draggable="false" />
          </div>
        </div>
      </div>
      <div className={styles.fullScreen}>
        <div className={styles.gradientOverlay}> </div>
        <img className={`${styles.fullScreenImage}`} src="/components/pictures/alphane.png" alt="Full screen" />
      </div>

      <div id={styles.nextPage}>
        <div className={styles.cardcontainer}>
          <div id={styles.card} className={styles.card}>
            <div id={styles.gradient} className={styles.gradient}></div>
            <div className={styles.leftside}>
              <span className={styles.poetsen}>
                VZERO, where performance converges seamlessly with
                style in the dynamic realm of fashion. Born from the collective passion of two friends,
                our adventure commenced with a shared love for rock climbing.
              </span>
              <a href="https://www.instagram.com/vzero.xyz/" target='_blank'>
                <span className={styles.poetsen}>instagram</span>
              </a>
            </div>
            <div className={styles.rightside}>
              <img src="/components/pictures/IMG_6710.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;