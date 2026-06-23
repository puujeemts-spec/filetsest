import ClubPostFeed from "@/components/ClubPostFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Клубын постууд</h1>
        <ClubPostFeed />
      </div>
    </main>
  );
}
