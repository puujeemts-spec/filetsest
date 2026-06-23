import { ClubPost } from "@/types/post";

export const clubPosts: ClubPost[] = [
  {
    id: 1,
    clubName: "Монгол Хөгжмийн Клуб",
    clubAvatar: "🎵",
    authorName: "Батбаяр",
    postedAt: "2024-06-23T08:00:00Z",
    title: "Морин хуурын хичээл эхэллээ",
    content:
      "Энэ долоо хоногоос морин хуурын анхан шатны хичээл эхэлж байна. Бүгдийг урьж байна!",
    tags: ["хөгжим", "хичээл", "морин хуур"],
    isFree: true,
    likes: 34,
    comments: 8,
  },
  {
    id: 2,
    clubName: "Ном Уншигчдын Клуб",
    clubAvatar: "📚",
    authorName: "Оюунчимэг",
    postedAt: "2024-06-22T14:30:00Z",
    title: "Энэ сарын ном: Алтан гадас",
    content:
      "Энэ сард бид 'Алтан гадас' романыг хамт уншиж хэлэлцэх болно. Нэгдэх хүсэлтэй хүмүүс бүртгүүлнэ үү.",
    tags: ["ном", "уншлага", "хэлэлцүүлэг"],
    isFree: true,
    likes: 21,
    comments: 5,
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
  },
  {
    id: 3,
    clubName: "Спорт Клуб",
    clubAvatar: "⚽",
    authorName: "Мөнхбат",
    postedAt: "2024-06-21T09:15:00Z",
    title: "Нийтийн биеийн тамирын өдөр",
    content:
      "Ирэх бямба гарагт нийтийн биеийн тамирын өдөр болно. Хөл бөмбөг, сагсан бөмбөг тоглоно.",
    tags: ["спорт", "биеийн тамир", "нийтийн арга хэмжээ"],
    isFree: true,
    likes: 57,
    comments: 13,
  },
];
