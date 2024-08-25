import { mockCharacters } from "../../../entities/Character";
import { CharacterTable, CharacterTableProps } from "./Table";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Table",
  component: CharacterTable,
};

const Template: StoryFn<CharacterTableProps> = (args) => (
  <CharacterTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  characters: mockCharacters,
};
