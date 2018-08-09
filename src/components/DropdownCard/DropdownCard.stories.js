import React from "react";
import { storiesOf } from "@storybook/react";
import DropdownCard from "./DropdownCard";

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

storiesOf("DropdownCard", module)
    .add("Normal", () => <DropdownCard title='Contact 1' links={links} details={allDetails} border={true} />)
    .add("without border", () => <DropdownCard title='Contact 1' links={links} details={allDetails} />)
    .add("with underline", () => <DropdownCard title='Contact 1' links={links} details={allDetails} underline={true} />);