import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";

const patientReviews = [
  {
    name: "Michael Cavaliere",
    text: "Thomas Cabell is an extremely intelligent, personable, and caring clinician. He'll spend a lot of time ensuring you're comfortable with the treatment plan and that you're both on the same page. He's also quite objective, and explore options holistically. Very thankful to have met him and that's he's my cardiologist."
  },
  {
    name: "Ken Robinson",
    text: "Outstanding communicator! Great bedside manners. Extremely professional in his approach to medicine brings complicated terminology into laymen's language. Highly recommended him and besides that he's just a good guy!"
  },
  {
    name: "Laurie Regen",
    text: "Dr. Cabell is a brilliant, wise & compassionate clinician who endeavors to treat the mind, body & Spirit of each patient - patiently meeting them @ whatever point they may present when they enter his exam room. I am privileged to be his patient."
  },
  {
    name: "Mary K",
    text: "Knowledgeable far beyond the rest! Avid self education on root causes vs pushing medications. A gem!"
  },
  {
    name: "Brian Kelly",
    text: "I followed Dr Cabell from his previous employer. I've appreciated his great knowledge advice, and approach to medicine and my heart heath for 5 years. He always knows who I am and remembers most of my details. Even without his notes in front of him. You're not a number. I promise."
  },
  {
    name: "Robyn Mitchell",
    text: "Dr Cabell is a functional cardiologist. He is professional, nice, and so knowledgeable. He gave me homework to help me head in the right direction for improved health using natural resources. So highly recommend."
  },
  {
    name: "Sherry Phillips",
    text: "Could not have had a better experience. He is so humble and kind, he is patient, compassionate, and caring he cares for his patients with the upmost professionalism. He is very thorough and pays attention to detail. I left his office knowing and understanding my health conditions."
  },
  {
    name: "Nancy Burck",
    text: "A Dr who wants to help the whole person be well, not just treat symptoms. Very up to date in current research on diet and inflammation.. this visit was excellent"
  },
  {
    name: "JC Trouper",
    text: "Dr Cabell is definitely the best Cardio doctor that I have ever talked to. The amount of time he listened and the feedback he provided was exceptional. His whole body approach to heart health is amazing and he truly understood my concerns and needs."
  }
];

interface ReviewCardProps {
  review: typeof patientReviews[0];
  index: number;
}

const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(({ review, index }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="bg-white p-6 shadow-sm border border-border/50"
  >
    <blockquote className="text-muted-foreground leading-relaxed mb-6 text-sm">
      "{review.text}"
    </blockquote>
    <div className="flex items-center gap-2">
      <div className="divider-gold" />
      <div>
        <p className="text-navy font-medium text-sm">{review.name}</p>
      </div>
    </div>
  </motion.div>
));

ReviewCard.displayName = "ReviewCard";

const PatientReviewsSection = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const mobileInitialCount = 2;
  const desktopInitialCount = 3;

  return (
    <section className="section-padding bg-soft-white">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-display text-navy mb-8">
            Trusted by Hundreds of Patients Across Middle Tennessee
          </h2>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-gold fill-gold" />
            <span className="font-heading text-4xl text-navy">241+</span>
          </div>
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Five-Star Google Reviews
          </p>
        </motion.div>

        {/* Desktop: Show 3 initially with expand option */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientReviews.slice(0, desktopInitialCount).map((review, index) => (
              <ReviewCard key={review.name} review={review} index={index} />
            ))}
          </div>

          {/* Expandable reviews */}
          <AnimatePresence>
            {showAllReviews && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 overflow-hidden"
              >
                {patientReviews.slice(desktopInitialCount).map((review, index) => (
                  <ReviewCard 
                    key={review.name} 
                    review={review} 
                    index={index + desktopInitialCount} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="flex items-center justify-center gap-2 w-full py-6 text-navy hover:text-gold transition-colors group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium tracking-wide">
              {showAllReviews ? "Show fewer reviews" : "View more patient reviews"}
            </span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                showAllReviews ? "rotate-180" : ""
              }`} 
            />
          </motion.button>
        </div>

        {/* Mobile: Show 2 initially with expand option */}
        <div className="md:hidden space-y-6">
          {/* Initial reviews */}
          {patientReviews.slice(0, mobileInitialCount).map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}

          {/* Expandable reviews */}
          <AnimatePresence>
            {showAllReviews && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-6 overflow-hidden"
              >
                {patientReviews.slice(mobileInitialCount).map((review, index) => (
                  <ReviewCard 
                    key={review.name} 
                    review={review} 
                    index={index + mobileInitialCount} 
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="flex items-center justify-center gap-2 w-full py-4 text-navy hover:text-gold transition-colors group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium tracking-wide">
              {showAllReviews ? "Show fewer reviews" : "View more patient reviews"}
            </span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ${
                showAllReviews ? "rotate-180" : ""
              }`} 
            />
          </motion.button>
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground mt-12"
        >
          Reviews sourced directly from Google. Individual patient experiences may vary.
        </motion.p>
      </div>
    </section>
  );
};

export default PatientReviewsSection;
