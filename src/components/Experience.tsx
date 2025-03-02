import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type ExperienceProps = {
  image: string;
  position: string;
  company: string;
  duration: string;
  totalDuration: string;
  description: (string | string[])[];
  status: string;
};

export default function Experience(props: ExperienceProps) {
  return (
    <div className="flex flex-row gap-5">
      <img
        src={props.image}
        alt={props.company}
        className="w-12 h-12 md:w-16 md:h-16 shadow-sm rounded-md border border-input"
      />
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
          <h2 className="text-base md:text-xl font-bold text-gray-700 max-w-xl">
            {props.position}
          </h2>
          <Badge
            variant="outline"
            className="rounded-full text-gray-600 text-xs bg-gray-50 font-medium w-fit"
          >
            {props.status}
          </Badge>
        </div>
        <Accordion type="single" className="text-gray-600 h-fit" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-500">
              {props.company} | {props.duration} • {props.totalDuration}
            </AccordionTrigger>
            <AccordionContent>
              {props.description.map((item, index) =>
                typeof item === "string" ? (
                  <p key={index} className="mb-2">
                    {item}
                  </p>
                ) : (
                  <ul key={index} className="list-disc pl-6">
                    {item.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
