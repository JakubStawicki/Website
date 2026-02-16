import { Link } from "react-router";
import { motion } from "motion/react";
import ShinyText from "@/components/ShinyText";
import Threads from "@/components/Threads";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CountUp from "@/components/ui/count-up";
// @ts-expect-error vite-imagetools directives
import photoAvif from "@/assets/photo.jpg?w=628;1256&format=avif&as=srcset";
// @ts-expect-error vite-imagetools directives
import photoWebp from "@/assets/photo.jpg?w=628;1256&format=webp&as=srcset";
// @ts-expect-error vite-imagetools directives
import photoJpg from "@/assets/photo.jpg?w=628&format=jpg";

// circInOut easing for snappy animations
const circInOut = [0.785, 0.135, 0.15, 0.86] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Threads Background */}
      <motion.div
        className="absolute bottom-160 sm:bottom-5 inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex-1 space-y-8 md:space-y-10">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1, ease: circInOut }}
            >
              <span className="text-foreground font-semibold">
                Master the Mark Scheme{" "}
              </span>
              <ShinyText
                text="in Weeks, Not Months."
                speed={3}
                delay={1}
                color="#00ff90"
                shineColor="#fff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.2, ease: circInOut }}
            >
              Former A-Level graduate showing you exactly what examiners want.
              No fluff. Just exam technique that gets results.
            </motion.p>

            <motion.div
              className="pt-2"
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.3, ease: circInOut }}
            >
              <Button
                asChild
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
              >
                <Link to="/booking">Book My Free 15-Min Strategy Call</Link>
              </Button>
            </motion.div>
          </div>

          {/* Hero Image with SpotlightCard */}
          <motion.div
            className="flex-1 relative flex justify-center"
            {...scaleIn}
            transition={{ duration: 0.6, delay: 0.2, ease: circInOut }}
          >
            <div className="relative w-full max-w-sm md:max-w-md space-y-6">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={photoAvif}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                  />
                  <source
                    type="image/webp"
                    srcSet={photoWebp}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                  />
                  <img
                    src={photoJpg}
                    alt="Jakub Stawicki - A-Level Exam Strategist"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchPriority="high"
                    width={628}
                    height={837}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                  />
                </picture>
              </div>

              {/* Info and Stats Below Picture */}
              <motion.div
                className="space-y-4"
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.4, ease: circInOut }}
              >
                <div className="space-y-2 text-center">
                  <Badge
                    variant="outline"
                    className="text-sm px-5 py-2 font-medium bg-background/50 backdrop-blur-sm border-foreground/20 hover:bg-background/80 transition-colors"
                  >
                    Studying civil engineering @ Imperial college
                  </Badge>
                </div>

                {/* Stats with CountUp and Gradient Text */}
                <div className="flex justify-center gap-6 sm:gap-8 pt-2">
                  <motion.div
                    className="text-center"
                    {...fadeIn}
                    transition={{ duration: 0.5, delay: 0.5, ease: circInOut }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-green-400 bg-clip-text text-transparent">
                      <CountUp value={4} />
                      A*
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      A-Level Grades
                    </p>
                  </motion.div>
                  <motion.div
                    className="text-center"
                    {...fadeIn}
                    transition={{ duration: 0.5, delay: 0.6, ease: circInOut }}
                  >
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-green-400 bg-clip-text text-transparent">
                      <CountUp value={100} />+
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      Students Helped
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
