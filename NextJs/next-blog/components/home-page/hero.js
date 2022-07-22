import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/rita.jfif"
          alt="Rita"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Rita</h1>
      <p>
        I blog about web development - expecially frontend frameworks like React
        & Nextjs
      </p>
    </section>
  );
}

export default Hero;
