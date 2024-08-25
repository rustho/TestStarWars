import { mockCharacters } from "..";
import { CharacterCard, CharacterCardProps } from "./CharacterCard";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Table",
  component: CharacterCard,
};

const Template: StoryFn<CharacterCardProps> = (args) => (
  <CharacterCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...mockCharacters[0],
};
