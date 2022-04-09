import Link from "next/link";

function EventItem(props) {
  const { title, id, image, date, location } = props;

  const humanReadableData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h1>{title}</h1>
          <div>
            <time>{humanReadableData}</time>
          </div>
          <div>
            <address>{formatAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
