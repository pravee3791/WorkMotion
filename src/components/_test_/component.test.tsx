import React from 'react';
import ReactDom from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Status from "../status/status";


afterEach(cleanup);

it('reders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render<any, any>(<Status></Status>, div)
})

it('checks if status exists', () => {
    const StatusPage = render(<Status />);
    const statusList = StatusPage.container.querySelector('#status-wrapper-container');
    expect(statusList).toBeTruthy();
    expect(statusList).toBeDefined();
})

it(' component matches snapshot', () => {
    const StatusPage = render(<Status />);
    const tree = renderer.create(<Status></Status>).toJSON();
    expect(tree).toMatchSnapshot();
})
