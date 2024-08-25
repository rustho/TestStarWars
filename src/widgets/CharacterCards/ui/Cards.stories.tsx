import { mockCharacters } from "../../../entities/Character";
import { CharacterCards, CharacterCardsProps } from "./Cards";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Cards",
  component: CharacterCards,
};

const Template: StoryFn<CharacterCardsProps> = (args) => (
  <CharacterCards {...args} />
);

export const Default = Template.bind({});
Default.args = {
  characters: mockCharacters,
};
