import React from 'react';

import { render, screen } from '../../test-util';
import { Detail } from '..';
import { RouteChildrenProps } from 'react-router-dom';

describe('Feed page', () => {
  const unArchivedCall = {
    id: 7833,
    created_at: '2018-04-18T16:59:48.000Z',
    direction: 'outbound',
    from: 'Jonathan Anguelov',
    to: null,
    via: 'NYC Office',
    duration: '60',
    is_archived: false,
    call_type: 'missed',
  };
  const archivedCall = {
    id: 7834,
    created_at: '2018-04-19T09:38:41.000Z',
    direction: 'outbound',
    from: null,
    to: '06 46 62 12 33',
    via: 'NYC Office',
    duration: '120',
    is_archived: true,
    call_type: 'missed',
  };

  const fetchOneRequest = jest.fn();
  const renderDetailPage = (props) => {
    return render(<Detail {...props} />);
  };

  test('dispatch action fetchOneRequest ', () => {
    const routeProps = { match: { params: { id: '7833' } } } as RouteChildrenProps<{ id: string }>;
    renderDetailPage({ ...routeProps, fetchOneRequest, call: undefined });
    expect(fetchOneRequest).toHaveBeenCalledWith('7833');
  });

  test('render unArchivedCall detail ', () => {
    const routeProps = { match: { params: { id: '7833' } } } as RouteChildrenProps<{ id: string }>;
    renderDetailPage({ ...routeProps, fetchOneRequest, call: unArchivedCall });
    expect(screen.getByText(unArchivedCall.from)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Archive' })).toBeInTheDocument();
  });

  test('render archivedCall detail', () => {
    const routeProps = { match: { params: { id: '7834' } } } as RouteChildrenProps<{ id: string }>;
    renderDetailPage({ ...routeProps, fetchOneRequest, call: archivedCall });
    expect(screen.getByText(archivedCall.to)).toBeInTheDocument();
    expect(screen.getByText('Archived')).toBeInTheDocument();
  });
});
