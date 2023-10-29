interface BaseTweet {
  publishedBy: TweetUser;
  createdAt: Date;
  content: string;
}

export interface TweetSummary extends BaseTweet {
  comments: number;
  retweets: number;
  likes: number;
}

export interface TweetUser {
  username: string;
  nickname: string;
  photoURL: string;
}
