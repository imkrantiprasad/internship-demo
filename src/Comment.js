import React from 'react'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment(props) {
    return (
        <div>
            <div className="box">
                <div className="vote">
                    <button class="btnIcon" onClick={() => props.handleUpClick(props.id)}>
                        <span className="up"><FontAwesomeIcon icon={faThumbsUp} /></span>
                    </button> {props.up} upvotes
              <br />
                    <button class="btnIcon" onClick={() => props.handleDownClick(props.id)}>
                        <span className="down"><FontAwesomeIcon icon={faThumbsDown} /></span>
                    </button> {props.down} downvotes
            </div>
                <div className="comment">
                    <span className="boxHead">{props.name}</span>
                    <p>{props.comments}</p>
                </div>
            </div>
        </div>
    )
}
export default Comment