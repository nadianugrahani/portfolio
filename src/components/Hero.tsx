import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import ButtonWithIcon from "./ButtonWithIcon";
import IdentityHighlight from "./IdentityHighlight";
import { Download } from "lucide-react";

export default function Hero() {
  const BadgeContent = [
    { text: "Master of Ceremony" },
    { text: "Moderator" },
    { text: "Environment Student" }
  ];

  const badgeVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeInOut",
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="flex flex-col gap-10 justify-center items-center pt-10 md:pt-28 md:h-3/4">
      <motion.div
        className="flex gap-2 z-10"
        initial="hidden"
        animate="visible"
        variants={badgeVariants}
      >
        {BadgeContent.map((badge, index) => (
          <Badge
            key={index}
            variant="outline"
            className="rounded-full text-gray-600 text-base bg-gray-50 font-medium hidden md:block"
          >
            {badge.text}
          </Badge>
        ))}
        <Badge
          variant="outline"
          className="rounded-full text-gray-600 text-sm bg-gray-50 z-20 font-medium md:hidden"
        >
          Crafting Experiences That Matter
        </Badge>
      </motion.div>

      <IdentityHighlight />

      <ButtonWithIcon
        href="https://drive.google.com/file/d/1XUGXOteFkkvEtmvuQwZc5PJe9J3Ts2zA/view?usp=sharing"
        className="z-10"
      >
        <Download />
        Download My CV
      </ButtonWithIcon>
    </section>
  );
}
