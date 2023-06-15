import { render, screen } from "@testing-library/react";
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        // mock를 사용하면 API로 불필요한 data 요청을 하지 않아 네트워크 트래픽을 줄일 수 있다. 
        window.fetch = jest.fn(); // fetch 함수를 mock 함수로 바꿈 
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
});