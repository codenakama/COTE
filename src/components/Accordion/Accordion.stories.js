import React from "react";
import { storiesOf } from "@storybook/react";
import Accordion from "./Accordion";

const cardDetails = [
    { title: 'title 1', details: 'detail 1' },
    { title: 'title 2', details: 'detail 2' },
    { title: 'title 3', details: 'detail 1' },
    { title: 'title 4', details: 'detail 2' },
    { title: 'title 5', details: 'detail 1' },
    { title: 'title 6', details: 'detail 2' },

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
    { title: 'Name 1', links, cardDetails },
    { title: 'Name 2', links, cardDetails },
    { title: 'Name 3', links, cardDetails },
    { title: 'Name 4', links, cardDetails },
]

const details2 = [
    { title: 'Name 1', cardDetails },
    { title: 'Name 2', cardDetails },
    { title: 'Name 3', cardDetails },
    { title: 'Name 4', cardDetails },
    { title: 'Name 5', cardDetails },
    { title: 'Name 6', cardDetails },
    { title: 'Name 7', cardDetails },
    { title: 'Name 8', cardDetails },
]

storiesOf("Accordion", module)
    .add("Normal", () => <Accordion title='list of contacts' details={details} />)
    .add("without links", () => <Accordion title='list of contacts' details={details2} />);
