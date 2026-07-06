import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/spa-data";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto text-gold/60" size={40} />
      <blockquote
        key={i}
        className="fade-up mt-8 font-serif text-2xl leading-relaxed text-jade-deep md:text-3xl"
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex flex-col items-center gap-1">
        <div className="text-sm font-medium text-jade-deep">{t.author}</div>
        <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {t.location}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-jade-deep transition hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-[3px] rounded-full transition-all ${
                idx === i ? "w-8 bg-gold" : "w-4 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setI((v) => (v + 1) % testimonials.length)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-jade-deep transition hover:border-gold hover:text-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
