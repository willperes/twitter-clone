interface BaseTweet {
  id: number;
  publishedBy: TweetUserInformation;
  createdAt: Date;
  content: string;
}

export interface TweetSummary extends BaseTweet {
  comments: number;
  retweets: number;
  likes: number;
}

export interface TweetUserInformation {
  username: string;
  name: string;
  photoURL: string;
  verified: boolean;
}
