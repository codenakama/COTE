import React from "react";
import { storiesOf } from "@storybook/react";
import DetailsCard from "./DetailsCard";

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
        <DetailsCard links={links} allDetails={allDetails} />
    ));