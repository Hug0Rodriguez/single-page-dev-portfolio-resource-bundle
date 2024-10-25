import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";

export const AboutSection = () => {
  return <div className="pb-96">
    <SectionHeader
    eyebrow="About Me"
    title="A Gimplse Into My Word"
    description="Learn more about who I am, what I do, and what inspires me"
    />
    <div>
      <Card>
        <StarIcon/>
        <h3>My Reads</h3>
        <p>Explore the books shaping my perspectives.</p>
        <Image src={bookImage} alt="Book Cover" />
      </Card>
    </div>
  </div>;
};
