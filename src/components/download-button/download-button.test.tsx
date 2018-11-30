import * as React from 'react';
import { mount } from 'enzyme';
import { Button51 } from './download-button';

test('Button51 with text and click actions', () => {
    const mockCallBack = jest.fn();
    const downloadButton = mount(
        <Button51 type="ghost" onClickHandler={mockCallBack}>Download</Button51>
    );

    expect(downloadButton.props().type).toEqual('ghost');

    const downloadButtonWrapper = downloadButton.find("button");
    
    expect(downloadButtonWrapper.length).toBe(1);

    downloadButtonWrapper.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
});