import React from "react";
import { storiesOf } from "@storybook/react";
import CardSlider from "./CardSlider";

const allDetails = [
    { title: 'title 1', details: 'detail 1' },
    { title: 'title 2', details: 'detail 2' },
    { title: 'title 3', details: 'detail 3' },
    { title: 'title 4', details: 'detail 4' },
]

const callback1 = () => {
    alert('Alert 1');
}

const links = [
    {
        callback: callback1,
        title: 'link 1',
    },
    {
        callback: callback1,
        title: 'link 2',
    },
]

const details = [
    { title: 'Name 1', links, allDetails },
    { title: 'Name 2', links, allDetails },
    { title: 'Name 3', links, allDetails },
    { title: 'Name 4', links, allDetails },
]

storiesOf("CardSlider", module)
    .add("Normal", () => <CardSlider title='list of contacts' allDetails={details} />);
