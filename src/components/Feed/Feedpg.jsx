import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData";
import Stories from "../stories/Stories";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
