import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        commodi iusto velit saepe amet officia iure omnis, alias excepturi quas
        quo distinctio possimus tempora, veniam illo! Ut blanditiis voluptate
        atque!
      </p>

      <p>
        Go to <Link to="/"> HomePage</Link>
      </p>
    </div>
  );
};

export default NotFound;
