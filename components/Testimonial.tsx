type TestimonialData = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export default function Testimonial({ data }: { data: TestimonialData }) {
  return (
    <figure className="testimonial-card">
      <div className="stars" aria-hidden="true">
        {"★".repeat(data.rating)}
        {"☆".repeat(Math.max(0, 5 - data.rating))}
      </div>
      <blockquote>&laquo;&nbsp;{data.quote}&nbsp;&raquo;</blockquote>
      <figcaption>
        <span className="name">{data.name}</span>
        <span className="role">{data.role}</span>
      </figcaption>
    </figure>
  );
}
