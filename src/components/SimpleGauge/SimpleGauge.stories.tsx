import { Meta, StoryObj } from "@storybook/react";
import SimpleGauge from "./SimpleGauge";

const meta: Meta<typeof SimpleGauge> = {
  component: SimpleGauge,
  title: "SimpleGauge",
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Total: Story = {
  args: {
    value: 50,
    isTotal: true,
  },
};

export const Square: Story = {
  args: {
    value: 50,
    borderType: "square",
    indicatorVisible: false,
  },
};
