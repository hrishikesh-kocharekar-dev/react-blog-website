import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./post4.jpg" className="singlePostImg" alt="o"/>
        <h1 className="singlePostTitle">
          A small river named Duden flows by their place...
          <div className="singlePostEdit">
            <img className="singlePostEdit" src="./edit.png" alt="" />
            <img className="singlePostTrash" src="./trash1.png" alt="" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Nate G</b>
          </span>
          <span className="singlePotDate">8 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar. The Big Oxmox advised her not to do so, because there were
          thousands of bad Commas, wild Question Marks and devious Semikoli, but
          the Little Blind Text didn’t Little Blind Text should turn around and
          return to its own, safe country. listen.
        </p>
      </div>
    </div>
  );
}
