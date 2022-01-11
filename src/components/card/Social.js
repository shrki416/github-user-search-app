import company from "../../assets/icon-company.svg";
import location from "../../assets/icon-location.svg";
import twitter from "../../assets/icon-twitter.svg";
import website from "../../assets/icon-website.svg";

function Social({ user }) {
  return (
    <section className="social">
      <div>
        <img src={location} alt="location" />
        <p id="location" className={`${!user.location && `not-available`}`}>
          {user.location ? user.location : `Not Available`}
        </p>
      </div>
      <div>
        <img src={twitter} alt="twitter" />
        <p className={`${!user.twitter_username && `not-available`}`}>
          {user.twitter_username ? user.twitter_username : `Not Available`}
        </p>
      </div>
      <div>
        <img src={website} alt="website" />
        <p className={`${!user.blog && `not-available`}`}>
          <a href={`https://${user.blog}`} target="_blank" rel="noreferrer">
            {user.blog ? user.blog : `Not Available`}
          </a>
        </p>
      </div>
      <div>
        <img src={company} alt="company" />
        <p className={`${!user.company && `not-available`}`}>
          {user.company ? user.company : `Not Available`}
        </p>
      </div>
    </section>
  );
}

export default Social;
