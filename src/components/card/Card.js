import { CardStyles } from "../../styles";
import Social from './Social';
import formatDate from "../../lib/formatDate";
import octocat from "../../assets/octocat.png";

function Card({ user }) {
  return (
    <CardStyles>
      <section className="card-img">
        <img src={user.avatar_url ? user.avatar_url : octocat} alt="avatar" />
      </section>

      <section className="card-body">
        <div className="user-info">
          <h2 className="card-header">
            {user.name ? user.name : `The Octocat`}
          </h2>
          <h3 className="user-name">@{user.login ? user.login : `octocat`}</h3>
          <p className="joined">Joined {formatDate(user.created_at)}</p>
        </div>
      </section>

      <section className={`${!user.bio && `not-available`} user-bio`}>
        <p>{user.bio ? user.bio : `This profile has no bio`}</p>
      </section>

      <section className="user-stats">
        <div>
          <p className="user-stats-header">Repos</p>
          <p className="user-stats-body">
            {user.public_repos ? user.public_repos : 8}
          </p>
        </div>
        <div>
          <p className="user-stats-header">Followers</p>
          <p className="user-stats-body">
            {user.followers ? user.followers : 3938}
          </p>
        </div>
        <div>
          <p className="user-stats-header">Following</p>
          <p className="user-stats-body">
            {user.following ? user.following : 9}
          </p>
        </div>
      </section>

      <Social user={user} />
    </CardStyles>
  );
}

export default Card;
