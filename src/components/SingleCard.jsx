import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { img_300, unavailable } from "../aplication/config";
import "../styles/CardMovie.css";
import NoImage from "../assets/img/no-image1.png";

const SingleCard = ({ id, poster, title, date, media_type, vote_average }) => {
  vote_average = Math.round(vote_average * 100) / 100;
  return (
    <>
      <Link className="ojo" to={`/SelectedMovie/${id}/${media_type}`} key={id}>
        <div className="card d-flex bg-dark justify-content-center ">
          <Badge
            badgeContent={vote_average}
            color={vote_average >= 7 ? "success" : "info"}
          />
          <img
            className="w-100"
            src={poster ? `${img_300}/${poster}` : NoImage}
            alt={title}
          />
          <div className="text-center">
            <h6 className="title-movie text-warning mt-1">{title}</h6>
            <h6 className="text-light">
              {media_type === "tv" ? "TV Series" : "Movie"}
            </h6>
            <h5 className="text-info">{date}</h5>
          </div>
        </div>
      </Link>
    </>
  );
};
export default SingleCard;
