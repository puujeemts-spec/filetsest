export interface ClubPost {
  id: number;
  clubName: string;
  clubAvatar: string;
  authorName: string;
  postedAt: string;
  title: string;
  content: string;
  tags: string[];
  isFree: boolean;
  likes: number;
  comments: number;
  imageUrl?: string;
}
