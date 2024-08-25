import { CharacterResponse, mockCharacters } from "..";
import { CharacterInfo } from "./CharacterInfo";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Table",
  component: CharacterInfo,
};

const Template: StoryFn<CharacterResponse> = (args) => (
  <CharacterInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...mockCharacters[0],
};
