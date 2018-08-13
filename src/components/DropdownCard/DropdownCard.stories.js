import React from "react";
import { storiesOf } from "@storybook/react";
import DropdownCard from "./DropdownCard";
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

storiesOf("DropdownCard", module)
    .add("Normal", () => (
        <DropdownCard title='Contact 1' border={true}>
            <DetailsCard links={links} cardDetails={allDetails} />
        </DropdownCard>))
    .add("without border", () => (
        <DropdownCard title='Contact 1' >
            <DetailsCard links={links} cardDetails={allDetails} />
        </DropdownCard>))
    .add("with underline", () => (
        <DropdownCard title='Contact 1' underline={true}>
            <DetailsCard links={links} cardDetails={allDetails} />
        </DropdownCard>
    ));