import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

function PostItem(props) {
  const { title, image, excert, date, slug } = props.post;

  const formatedData = new Data(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedData}</time>
            <p>{excert}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
