import { sectionArr } from "../sections/sectionArr";
import { Section } from "./section";

export const Sections = () => {
    return (
        <div class="st-scroll">
          {sectionArr.map(section => (
            <Section key={section.id} section={section} />
          ))}
        </div>
    )
}