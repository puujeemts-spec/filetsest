import { ClubPost } from "@/types/post";
import Image from "next/image";

function timeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return `${diff} секундын өмнө`;
  if (diff < 3600) return `${Math.floor(diff / 60)} минутын өмнө`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} цагийн өмнө`;
  return `${Math.floor(diff / 86400)} өдрийн өмнө`;
}

export default function ClubPostCard({ post }: { post: ClubPost }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-xl">
            {post.clubAvatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm truncate">{post.clubName}</p>
            <p className="text-xs text-gray-400">
              {post.authorName} · {timeAgo(post.postedAt)}
            </p>
          </div>
          {post.isFree && (
            <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
              Үнэгүй
            </span>
          )}
        </div>

        <h2 className="text-base font-bold text-gray-900 mb-1">{post.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.content}</p>

        {post.imageUrl && (
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs bg-gray-100 text-gray-500"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-3 border-t border-gray-50">
          <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-rose-500 transition-colors">
            <span>❤️</span>
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-indigo-500 transition-colors">
            <span>💬</span>
            <span>{post.comments}</span>
          </button>
          <button className="ml-auto text-sm text-gray-400 hover:text-gray-700 transition-colors">
            Дэлгэрэнгүй →
          </button>
        </div>
      </div>
    </div>
  );
}
