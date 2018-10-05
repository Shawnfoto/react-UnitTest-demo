import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const request = axios.get(url);
  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}
