import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Arun Prasath",
    date: "3 days ago",
    rating: 5,
    text: "Awesome and happy for water wash..there is very clean and using quality foam products.. customer service and explanation for all questions is very good .. must try on",
    avatar: "A",
    avatarBg: "bg-blue-500",
  },
  {
    name: "egaps_projects",
    date: "3 days ago",
    rating: 5,
    text: "Had a car wash here,Excellent space! Infrastructure &The atmosphere looks absolutely great!They offers services like premium car wash,Car",
    avatar: "e",
    avatarBg: "bg-gray-500",
  },
  {
    name: "Aswitha Gunnaa",
    date: "3 days ago",
    rating: 5,
    text: "Best place for Car wash!.They offer many more services like Car detailing,Paintbooth,Wheel alignment & Accessories.",
    avatar: "A",
    avatarBg: "bg-orange-500",
  },
];

const GoogleLogo = () => (
  <div className="flex items-center gap-1 text-xl font-medium">
    <span className="text-blue-500">G</span>
    <span className="text-red-500">o</span>
    <span className="text-yellow-500">o</span>
    <span className="text-blue-500">g</span>
    <span className="text-green-500">l</span>
    <span className="text-red-500">e</span>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
              <GoogleLogo />
              <span className="font-semibold text-foreground">Excellent</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-foreground font-medium">4.8</span>
              <span className="text-muted-foreground">| 11 reviews</span>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Write a review
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-r last:border-r-0 border-border pr-6 last:pr-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${review.avatarBg} rounded-full flex items-center justify-center text-white font-medium`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.date}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-body text-sm">
                  {review.text}
                </p>
                {index === 1 && (
                  <button className="text-muted-foreground text-sm mt-2 hover:text-foreground">
                    More
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <ChevronRight className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
