import React from "react";
import { storiesOf } from "@storybook/react";
import DetailsCard from "./DetailsCard";

const titles = [
    'title 1:',
    'title 2:',
    'title 3',
    'title 4',
];

const details = [
    'detail 1:',
    'detail 2:',
    'detail 3',
    'detail 4',
];

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

storiesOf("DetailsCard", module)
    .add("normal", () => (
        <DetailsCard titles={titles} details={details} links={links} allDetails={allDetails} />
    ));