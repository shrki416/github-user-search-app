import { CardStyles } from "../styles";
import company from "../assets/icon-company.svg";
import formatDate from '../lib/formatDate';
import location from "../assets/icon-location.svg";
import octocat from "../assets/octocat.png";
import twitter from "../assets/icon-twitter.svg";
import website from "../assets/icon-website.svg";

function Card({ user }) {
  return (
    <CardStyles>
      <section className="card-img">
        <img src={user.avatar_url ? user.avatar_url : octocat} alt="avatar" />
      </section>

      <section className="card-body">
        <div className="user-info">
          <h2 className="card-header">{user.name ? user.name : `The Octocat`}</h2>
          <p className="user-name">@{user.login ? user.login : 'octocat'}</p>
          <p className="joined">Joined {formatDate(user.created_at)}</p>
        </div>
      </section>

      <section className="user-bio">
        <p>{user.bio ? user.bio : `This profile has no bio`}</p>
      </section>

      <section className="user-stats">
        <div>
          <p className="user-stats-header">Repos</p>
          <p className="user-stats-body">{user.public_repos ? user.public_repos : 8}</p>
        </div>
        <div>
          <p className="user-stats-header">Followers</p>
          <p className="user-stats-body">{user.followers ? user.followers : 3938}</p>
        </div>
        <div>
          <p className="user-stats-header">Following</p>
          <p className="user-stats-body">{user.following ? user.following : 9}</p>
        </div>
      </section>

      <section className="social">
        <div>
          <img src={location} alt="location" />
          <p id='location'>{user.location ? user.location : `Not Available`}</p>
        </div>
        <div>
          <img src={twitter} alt="twitter" />
          <p>
            {user.twitter_username ? user.twitter_username : `Not Available`}
          </p>
        </div>
        <div>
          <img src={website} alt="website" />
          <p>{user.blog ? user.blog : `Not Available`}</p>
        </div>
        <div>
          <img src={company} alt="company" />
          <p>{user.company ? user.company : `Not Available`}</p>
        </div>
      </section>
    </CardStyles>
  );
}

export default Card;
