import { mockCharacters } from "..";
import { CharacterRow, CharacterRowProps } from "./CharacterRow";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Table",
  component: CharacterRow,
};

const Template: StoryFn<CharacterRowProps> = (args) => (
  <CharacterRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...mockCharacters[0],
};
