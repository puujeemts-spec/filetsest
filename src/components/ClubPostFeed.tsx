import { clubPosts } from "@/data/posts";
import ClubPostCard from "./ClubPostCard";

export default function ClubPostFeed() {
  return (
    <div className="flex flex-col gap-5">
      {clubPosts.map((post) => (
        <ClubPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
