import React from 'react';

import { axiosMock } from '../../test-util/axios.setup';
import { baseURL } from '../../services/call';
import { render, screen } from '../../test-util';
import Feed from '..';

describe('Feed page', () => {
  const calls = [
    {
      id: 7833,
      created_at: '2018-04-18T16:59:48.000Z',
      direction: 'outbound',
      from: 'Jonathan Anguelov',
      to: null,
      via: 'NYC Office',
      duration: '60',
      is_archived: false,
      call_type: 'missed',
    },
    {
      id: 7834,
      created_at: '2018-04-19T09:38:41.000Z',
      direction: 'outbound',
      from: null,
      to: '06 46 62 12 33',
      via: 'NYC Office',
      duration: '120',
      is_archived: false,
      call_type: 'missed',
    },
  ];
  const renderFeedPage = () => {
    return render(<Feed />);
  };
  test('render a list of calls after fetching successfully', async () => {
    axiosMock.onGet(`${baseURL}/`).reply(200, calls);
    renderFeedPage();
    expect(screen.getByText('loading ...')).toBeInTheDocument();
    // should render 2 groups of calls by date
    const groups = await screen.findAllByTestId('group-by-date');
    expect(groups).toHaveLength(2);

    const fromLabels = screen.getAllByTestId('from-label');
    expect(fromLabels).toHaveLength(2);
    expect(fromLabels[0]).toHaveTextContent(calls[0].from);
    expect(fromLabels[1]).toHaveTextContent('Unknown');

    const toLabels = screen.getAllByTestId('to-label');
    expect(toLabels).toHaveLength(2);
    expect(toLabels[0]).toHaveTextContent('Unknown');
    expect(toLabels[1]).toHaveTextContent(calls[1].to);
  });

  test('render error message if failed to fetch', async () => {
    axiosMock.onGet(`${baseURL}/`).reply(500);
    renderFeedPage();
    expect(await screen.findByText('Request failed with status code 500')).toBeInTheDocument();
  });
});
