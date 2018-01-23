import React from "react";
import { storiesOf } from "@storybook/react";
import MessageCard from "./MessageCard";

storiesOf("MessageCard", module)
  .add("With message and icon", () => (
    <MessageCard
      title="Custom title"
      subtitle="Subtitle"
      icon="card_membership"
    />
  ))
  .add("With subitems", () => (
    <MessageCard title="Title" subtitle="Subtitle" />
  ));
